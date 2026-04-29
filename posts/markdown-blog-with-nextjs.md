---
title: "Next.js App RouterでMarkdownブログを作る方法"
date: "2026-01-10"
excerpt: "Next.js App Routerとgray-matter、markedを使ったMarkdownブログの実装方法を解説。ファイルベース管理で運用コストゼロ。"
---

# Next.js App RouterでMarkdownブログを作る方法

Next.js App Routerを使えば、データベース不要のMarkdownブログを簡単に構築できます。この記事では実際の実装コードを交えながら解説します。

## 背景

ブログシステムを構築する際、WordPressやmicroCMSなどの外部サービスを使う方法がありますが、個人開発では「シンプルにGit管理したい」「運用コストをゼロにしたい」というニーズがあります。MarkdownファイルをGitで管理し、ビルド時に静的HTMLを生成する方式が最もシンプルです。

## 課題

- 記事のメタデータ（タイトル、日付、概要）をどう管理するか
- MarkdownからHTMLへの変換をどう行うか
- 動的ルーティング（`/blog/[slug]`）をどう実装するか

## 実装方針

### 1. ファイル構成

```
posts/
  article-1.md
  article-2.md
lib/
  posts.ts      ← 記事読み込みロジック
app/blog/
  page.tsx      ← 記事一覧
  [slug]/
    page.tsx    ← 個別記事
```

### 2. Frontmatterでメタデータ管理

各Markdownファイルの先頭にYAML形式でメタデータを記述します。

```yaml
---
title: "記事タイトル"
date: "2026-01-10"
excerpt: "概要文"
---
```

### 3. gray-matterでメタデータ抽出

```ts
// lib/posts.ts
import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDir = path.join(process.cwd(), "posts");

export function getAllPosts(): BlogPost[] {
  const files = fs.readdirSync(postsDir).filter(f => f.endsWith(".md"));
  return files.map(file => {
    const raw = fs.readFileSync(path.join(postsDir, file), "utf8");
    const { data, content } = matter(raw);
    return {
      slug: file.replace(/\.md$/, ""),
      title: data.title,
      date: data.date,
      excerpt: data.excerpt,
      content,
    };
  }).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}
```

### 4. markedでMarkdown→HTML変換

```tsx
// app/blog/[slug]/page.tsx
import { marked } from "marked";

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  const html = await marked(post.content);

  return (
    <article className="prose prose-invert max-w-none"
      dangerouslySetInnerHTML={{ __html: html }} />
  );
}
```

### 5. generateStaticParamsでSSG

```ts
export async function generateStaticParams() {
  return getAllPosts().map(post => ({ slug: post.slug }));
}
```

## 失敗した点

1. **marked 18.xの非同期API**: 以前のバージョンでは`marked()`は同期的でしたが、v18から非同期（Promiseを返す）に変更されました。`await`を付け忘れて型エラーになるケースがありました。

2. **gray-matterの型定義**: `data.title`などが`any`型になるため、明示的な型アサーションが必要でした。

3. **改行の扱い**: Windows環境で作成したMarkdownファイルの改行コード（CRLF）がビルド時に問題を起こすことがありました。`.replace(/\r\n/g, '\n')`で正規化するようにしました。

## 改善した点

- JSONファイル管理からMarkdownファイル管理に移行し、記事追加が`git add posts/`だけで完結
- `@tailwindcss/typography`のproseクラスで見出し・リスト・テーブルなどを自動スタイリング
- `generateMetadata`でOGP情報を動的生成

## コード例：完全なブログページコンポーネント

```tsx
export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();
  const html = await marked(post.content);

  return (
    <article>
      <h1>{post.title}</h1>
      <time>{post.date}</time>
      <div className="prose prose-invert"
        dangerouslySetInnerHTML={{ __html: html }} />
    </article>
  );
}
```

## まとめ

Markdownブログの最大の利点は「運用コストゼロ」です。記事を追加したいときは`.md`ファイルを作成して`git push`するだけ。データベースもCMSも不要で、ビルド時にSSGで高速な静的サイトとして配信できます。

## 注意点

- `fs`モジュールはServer Componentsでのみ使用可能。Client Componentsでimportしないこと
- 記事数が増えるとビルド時間が長くなるため、数百記事を超える場合はISRの検討が必要
- markedのHTML出力はサニタイズされないため、XSS対策としてコンテンツの信頼性を確保すること

---
title: "個人開発でサイトマップとrobots.txtを整備する方法"
date: "2026-02-08"
excerpt: "Next.jsのsitemap.tsとrobots.tsを使ったSEO基盤の構築方法。動的ルートの自動登録、Google Search Console連携まで。"
---

# 個人開発でサイトマップとrobots.txtを整備する方法

サイトマップとrobots.txtはSEOの基本です。Next.js App Routerでは両方ともコードベースで自動生成できます。

## 背景

検索エンジンにサイトの構造を正しく伝えるには、サイトマップ（sitemap.xml）とrobots.txtが必須です。特に動的ルート（`/apps/[slug]`や`/blog/[slug]`）を持つサイトでは、全ページをサイトマップに含める必要があります。手動管理は非現実的なので、コードによる自動生成が不可欠です。

## 課題

- 動的ルートの全ページを自動でサイトマップに登録
- 更新頻度や優先度を適切に設定
- robots.txtでクロール許可範囲を指定
- Google Search Consoleとの連携

## 実装方針

Next.jsの`sitemap.ts`と`robots.ts`ファイルを`app/`直下に配置します。これらはビルド時に実行され、動的にサイトマップXMLとrobots.txtを生成します。

### 1. sitemap.ts

```ts
import { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/posts";
import { getAllAppMetas } from "@/lib/apps";

export default function sitemap(): MetadataRoute.Sitemap {
  const apps = getAllAppMetas().map(app => ({
    url: `https://example.com/apps/${app.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  const posts = getAllPosts().map(post => ({
    url: `https://example.com/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [
    { url: "https://example.com", priority: 1, changeFrequency: "daily" },
    { url: "https://example.com/about", priority: 0.7 },
    ...apps,
    ...posts,
  ];
}
```

### 2. robots.ts

```ts
import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://example.com/sitemap.xml",
  };
}
```

### 3. 動的ルートの全パスを登録

`generateStaticParams`で定義したルートをサイトマップにも反映することで、一貫性を保ちます。`getAllPosts()`や`getAllAppMetas()`を両方で使い回せるのがポイントです。

## 失敗した点

1. **変更頻度の設定ミス**: すべてのページを`daily`に設定していたら、クローラーの負荷が上がりすぎてクロール頻度が低下しました。実際の更新頻度に合わせて`weekly`や`monthly`に調整することで改善。

2. **サイトマップ未送信**: サイトマップを作成してもGoogle Search Consoleに送信しないと意味がありません。デプロイ後に手動送信するフローを忘れずに。

3. **canonical設定の漏れ**: サイトマップとcanonical URLが不一致だと、Googleがどちらを正規URLと見なすか混乱します。`metadata.alternates.canonical`も忘れずに設定すること。

## 改善した点

- アプリ詳細・ブログ記事の全ページをサイトマップに自動登録
- 更新日を実際のコミット日や記事公開日に合わせて設定
- Google Search Consoleでサイトマップを定期的に再送信

## まとめ

サイトマップとrobots.txtは、SEOの土台です。Next.jsなら数行のコードで自動生成でき、新しいページが追加されても自動的に反映されます。デプロイ後のSearch Console送信も忘れずに行いましょう。

## 注意点

- サイトマップのURL数が50,000を超える場合は分割が必要（個人開発では稀）
- robots.txtで`Disallow`を使う場合は、重要なページをブロックしていないか確認すること
- サイトマップは静的生成されるため、ISRのページもビルド時の状態で出力される

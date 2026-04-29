---
title: "Next.jsで構造化データJSON-LDを入れる方法"
date: "2026-04-01"
excerpt: "BlogPosting、SoftwareApplication、WebSiteなどのJSON-LD構造化データをNext.jsで実装する方法。リッチリザルト対策。"
---

# Next.jsで構造化データJSON-LDを入れる方法

構造化データ（JSON-LD）を追加すると、Google検索結果にリッチリザルト（星評価、パンくずリスト、サイト内検索ボックスなど）が表示されるようになります。

## 背景

検索結果で目立つには、構造化データが有効です。特に技術ブログでは`BlogPosting`、ツール紹介ページでは`SoftwareApplication`、サイト全体では`WebSite`のスキーマを使用することで、クリック率の向上が期待できます。

## 課題

- 適切なスキーマタイプの選択
- 動的コンテンツへのJSON-LD埋め込み
- 静的に生成されるページでの`dangerouslySetInnerHTML`の使用
- Googleのリッチリザルトテストでの検証

## 実装方針

Next.jsでJSON-LDを埋め込むには、`<script type="application/ld+json">`タグを`dangerouslySetInnerHTML`で挿入します。

### 1. サイト全体の構造化データ

```tsx
// app/layout.tsx または page.tsx
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "サイト名",
      "url": "https://example.com",
      "description": "サイトの説明",
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://example.com/search?q={search_term_string}",
        "query-input": "required name=search_term_string",
      },
    }),
  }}
/>
```

### 2. ブログ記事の構造化データ

```tsx
// app/blog/[slug]/page.tsx
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "headline": post.title,
      "datePublished": post.date,
      "description": post.excerpt,
      "author": { "@type": "Person", "name": "hikamer" },
    }),
  }}
/>
```

### 3. アプリ紹介ページの構造化データ

```tsx
// app/apps/[slug]/page.tsx
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": app.name,
      "applicationCategory": "WebApplication",
      "operatingSystem": "Web Browser",
      "description": app.shortDescription,
      "url": app.fqdn,
      "author": { "@type": "Person", "name": "hikamer" },
    }),
  }}
/>
```

## 失敗した点

1. **JSON.stringifyの循環参照**: `post`オブジェクトに循環参照があると`JSON.stringify`がエラーを投げます。必要なフィールドだけを抽出したプレーンオブジェクトを作成することで回避。

2. **SearchActionのクエリパラメータ形式**: `{search_term_string}`のフォーマットがGoogleの仕様と一致せず、リッチリザルトテストでエラーになることがありました。実際の検索URLのクエリパラメータ名（`?q=`なのか`?query=`なのか）を正確に指定する必要があります。

3. **構造化データの重複**: 複数のページに同じ`@id`を持つ構造化データを入れると、Googleが混乱します。`@id`はサイト全体でユニークにする必要があります。

## 改善した点

- ブログ・アプリ詳細・サイト全体の3層で構造化データを実装
- 各ページの`@id`をURLベースでユニークに設定
- Googleリッチリザルトテストで全ページを検証

## まとめ

JSON-LDはSEOの上位互換とも言える施策です。Next.jsなら数行のコードで実装でき、特に技術ブログやツール紹介サイトでは大きな効果が期待できます。

## 注意点

- JSON-LDの内容と実際のページ内容に一貫性がないと、Googleがペナルティを課す可能性があります
- 構造化データは公開ページにのみ埋め込み、管理画面などには不要です
- リッチリザルトテスト（https://search.google.com/test/rich-results）で必ず検証すること

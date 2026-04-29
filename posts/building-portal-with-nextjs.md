---
title: "Next.jsでポータルサイトを開発する方法"
date: "2026-02-14"
excerpt: "本サイトの技術的な裏側を解説。Next.js App Router、Tailwind CSS、Coolify、Markdownを使った開発フローを紹介します。"
---

# Next.jsでポータルサイトを開発する方法

本サイト（hikamer's portal）は**Next.js 16.2.3**を中心としたモダンスタックで構築されています。この記事では実際のコードに基づいた技術選定と開発フローを解説します。

## 背景：なぜポータルサイトが必要だったか

複数のWebサービスを運営していると、「どこに何があるか分からない」という声が増えてきました。各サービスは独立したドメインで運用されており、界隈の新規参加者にとって全体像を把握するのが困難でした。この課題を解決するため、全サービスを一覧できるポータルサイトの構築を決めました。

## 技術スタック

| 層 | 技術 |
|---|---|
| フロントエンド | Next.js 16.2.3 (App Router), React 19.2 |
| スタイリング | Tailwind CSS 4 + @tailwindcss/typography |
| Markdown | marked 18.0.2（サーバーコンポーネントでレンダリング） |
| 画像処理 | Sharp 0.34.5（/api/imgエンドポイント） |
| メタデータ取得 | /api/meta（OGP情報をHTMLからパース） |
| インフラ | Coolify（自宅サーバーDocker管理） |
| パッケージ管理 | pnpm |

## 実装方針

### App Routerの活用

すべてのページがApp Routerで構築されています。

- **動的ルーティング**: `app/apps/[slug]/page.tsx` と `app/blog/[slug]/page.tsx` で、generateStaticParamsによる静的生成（SSG）
- **Server Components**: Markdownレンダリング（marked）はサーバーサイドで実行
- **Client Components**: AppCard（OGPメタデータ動的取得）、AppGrid（検索フィルタリング）
- **API Routes**: /api/meta（OGP情報取得）、/api/img（画像最適化プロキシ）

### Coolifyとの統合

Coolify APIから動的にアプリケーション一覧を取得し、ポータルに表示しています。ISRにより60秒間隔で更新されます。

```ts
const res = await fetch(`${COOLIFY_URL}/api/v1/applications`, {
  headers: { Authorization: `Bearer ${COOLIFY_TOKEN}` },
  next: { revalidate: 60 }
});
```

### MarkdownとTypography

ブログ記事とアプリ詳細ページは**marked**でMarkdown→HTML変換し、**@tailwindcss/typography**のproseクラスでスタイリングしています。見出し、リスト、強調、テーブル、水平線などが自動的に適切なスタイルで表示されます。

## 失敗した点

1. **JSON一元管理の失敗**: 初期は19アプリの説明文を1つのJSONファイルにまとめていました。改行のエスケープが複雑化し、`\n`が`\\n`になるなど修正が困難に。後にMarkdownファイル分割管理に移行して解決しました。

2. **faviconのデフォルト表示**: 各サービスのfaviconを動的取得する仕組みで、SVG faviconの検出に失敗しNext.jsデフォルトが表示される問題が発生。meta APIの正規表現を改善し、`rel="icon"`の完全一致を優先するよう修正しました。

3. **OGP画像の未設定**: 多くのサブサービスでOGP画像が設定されておらず、SNSシェア時にプレビューが出ない問題がありました。全サービスにopengraph-image.tsxを追加し、metadataBaseを正しい本番URLに統一しました。

## 改善した点

- JSONファイル管理 → Markdownファイル管理に移行（保守性が大幅に向上）
- 静的favicon → app/icon.tsxによる動的favicon生成に統一
- ハードコードされたURL → 環境変数NEXT_PUBLIC_SITE_URLで一元管理
- 5秒だったメタデータ取得タイムアウト → 8秒に延長しUser-Agentも追加

## パフォーマンス最適化

- **ISR**: 60秒間隔のIncremental Static Regeneration
- **SSG**: 全ブログ記事・アプリ詳細をビルド時に静的生成（36ページ）
- **画像最適化**: SharpでWebP変換とリサイズ
- **CSP**: Content Security PolicyでAdSense互換性を維持

## 注意点

- CoolifyのAPIトークンは環境変数で管理し、Gitにはコミットしないこと
- marked 18.xは非同期API（`await marked()`）に変更されているため、バージョンアップ時の注意が必要
- Tailwind CSS 4では`@plugin`ディレクティブでtypographyを読み込む必要がある

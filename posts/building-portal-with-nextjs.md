---
title: "Next.jsでポータルサイトを開発する方法"
date: "2026-03-01"
excerpt: "本サイトの技術的な裏側を解説。Next.js App Router、Tailwind CSS、Coolify、Markdownを使った開発フローを紹介します。"
---

# Next.jsでポータルサイトを開発する方法

本サイトは**Next.js 16.2.3**を中心としたモダンスタックで構築されています。この記事では実際のコードに基づいた技術選定と開発フローを解説します。

## 技術スタック

- **フロントエンド**: Next.js 16.2.3 (App Router), React 19.2, TypeScript
- **スタイリング**: Tailwind CSS 4 + @tailwindcss/typography
- **Markdown**: marked 18.0.2（サーバーコンポーネントでレンダリング）
- **画像処理**: Sharp 0.34.5（/api/imgエンドポイント）
- **メタデータ取得**: /api/meta（OGP情報をHTMLからパース）
- **インフラ**: Coolify（自宅サーバーDocker管理）
- **パッケージ管理**: pnpm

## App Routerの活用

すべてのページがApp Routerで構築されています。

- **動的ルーティング**: `app/apps/[slug]/page.tsx` と `app/blog/[slug]/page.tsx` で、generateStaticParamsによる静的生成（SSG）
- **Server Components**: Markdownレンダリング（marked）はサーバーサイドで実行
- **Client Components**: AppCard（OGPメタデータ動的取得）、AppGrid（検索フィルタリング）
- **API Routes**: /api/meta（OGP情報取得）、/api/img（画像最適化プロキシ）

## MarkdownとTypography

ブログ記事とアプリ詳細ページは**marked**でMarkdown→HTML変換し、**@tailwindcss/typography**のproseクラスでスタイリングしています。見出し、リスト、強調、テーブル、水平線などが自動的に適切なスタイルで表示されます。

## Coolifyとの統合

Coolify APIから動的にアプリケーション一覧を取得し、ポータルに表示しています。ISRにより60秒間隔で更新されます。

## パフォーマンス最適化

- **ISR**: 60秒間隔のIncremental Static Regeneration
- **SSG**: 全ブログ記事・アプリ詳細をビルド時に静的生成（36ページ）
- **画像最適化**: SharpでWebP変換とリサイズ
- **CSP**: Content Security PolicyでAdSense互換性を維持

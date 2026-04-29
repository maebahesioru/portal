---
slug: "hikamersnews"
name: "hikamersnews"
fqdn: "https://hikamersnews.hikamer.f5.si"
shortDescription: "ヒカマー界隈の出来事をまとめた静的ニュースサイト。記事をカテゴリー別に閲覧できるシンプルな情報サイト。Vite SPAで軽量高速表示。"
tags: [ニュース, メディア, 情報, コミュニティ]
---

# hikamersnews — ヒカマー新聞

hikamersnewsは、ヒカマー界隈で日々起きる出来事を記事として閲覧できる静的ニュースサイトです。カテゴリー別に整理された記事を一覧表示し、各記事の詳細ページを提供します。

## 主な機能

- **記事一覧表示**: ページネーション付きの記事一覧（10件/ページ）
- **カテゴリー分類**: 速報・特集・インタビュー・レビュー・コラムの5カテゴリー
- **記事情報表示**: カテゴリーバッジ、公開日表示
- **パフォーマンス最適化**: 遅延読み込みとプリフェッチによる高速表示

## 技術スタック

- Vite + React 18 + TypeScript + Tailwind CSS 3
- react-router-dom（SPAルーティング）
- react-helmet-async（メタタグ管理）
- @vercel/analytics + @vercel/speed-insights（パフォーマンス計測）
- Vercelデプロイ

## 開発の裏話

Viteビルドで高速配信を実現するため、CSSとJSのバンドル分割を細かく調整しました。記事データはMarkdown/YAMLで管理しビルド時に静的生成しています。
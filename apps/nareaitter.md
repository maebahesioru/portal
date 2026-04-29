---
slug: "nareaitter"
name: "nareaitter"
fqdn: "https://nareaitter.hikamer.f5.si"
shortDescription: "公開投稿上のメンション傾向を集計し、交流ネットワークとして可視化する分析ツール。フォースディレクテッドグラフとツリー形式で関係を表示。CSVエクスポート対応。"
tags: [SNS, 可視化, Twitter, Cloudflare]
---

# nareaitter — Twitter交流関係可視化

nareaitterは、公開投稿上のメンション傾向を集計し、交流ネットワークをフォースディレクテッドグラフで可視化する分析ツールです。公開情報のみを対象とし、各プラットフォームの利用規約に従って運用しています。

## 主な機能

- **フォースディレクテッドグラフ**: Canvasベースの力学モデルでユーザー間のメンション関係を可視化（InteractionCircle）
- **ツリー表示**: FamilyTreeCanvasでツリー形式の関係表示
- **CSVエクスポート**: サークルデータをCSVでダウンロード
- **画像保存**: html-to-imageでグラフを画像として保存
- **ダーク/ライトテーマ**: next-themesで切り替え
- **日英i18n**: LocaleProviderで多言語対応
- **投げ銭機能**: OFUSEポップアップ連携

## 技術スタック

- Next.js 16.2.2、React 19.2、TypeScript、Tailwind CSS 4
- Geist Mono + Noto Sans JP フォント
- Yahooリアルタイム検索API（/api/yahoo-mentions）
- Yahooプロフィール画像プロキシ（/api/image-proxy）
- html-to-image、next-themes

## 開発の裏話

Canvasのフォースグラフでノード数が数百を超えるとフレームレートが落ち、d3-forceをWeb Workerにオフロードして60fpsを維持する構成に変更しました。
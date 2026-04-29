---
slug: "nareaitter"
name: "nareaitter"
fqdn: "https://nareaitter.hikamer.f5.si"
shortDescription: "Twitterユーザーの交流関係を可視化するグラフサービス。ハンドルネームを入力するとフォースディレクテッドグラフでメンション関係を表示。家系図ビューやCSVエクスポート対応。"
tags: [SNS, 可視化, Twitter, Cloudflare]
---

# nareaitter — Twitter交流関係可視化

nareaitterは、Twitterユーザーのメンション関係をフォースディレクテッドサークルグラフで可視化するツールです。Yahooリアルタイム検索APIを使ってメンションを収集し、Canvas上にインタラクティブなグラフを描画します。

## 主な機能

- **フォースディレクテッドグラフ**: Canvasベースの力学モデルでユーザー間のメンション関係を可視化（InteractionCircle）
- **家系図ビュー**: FamilyTreeCanvasでツリー形式の関係表示
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
- html-to-image、next-themes\n
## 開発の裏話

Canvasのフォースグラフでノード数が数百を超えるとフレームレートが落ち、d3-forceをWeb Workerにオフロードして60fpsを維持する構成に変更しました。
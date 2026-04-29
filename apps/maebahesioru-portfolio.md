---
slug: "maebahesioru-portfolio"
name: "maebahesioru-portfolio"
fqdn: "https://maebahesioru-portfolio.hikamer.f5.si"
shortDescription: "hikamer（maebahesioru）の個人ポートフォリオ。20以上のSNSリンクと開発プロジェクトを集約したリンクインバイオ。アニメーションとカスタムSVGアイコン。"
tags: [ポートフォリオ, リンク集, デザイン, アニメーション]
---

# maebahesioru-portfolio — 開発者ポートフォリオ

maebahesioru-portfolioは、運営者hikamerの個人ポートフォリオサイトです。20以上のSNSリンクと全開発プロジェクトを集約したリンクインバイオとして機能しています。

## 主な機能

- **SNSリンク集**: X、Bluesky、Discord、Twitch、YouTube、GitHub、Pixiv、Steam、Xbox、Threads、SoundCloudなど20以上のプラットフォームに対応（カスタムSVGアイコン）
- **プロジェクト一覧**: 運営中の全サービスへのリンクを集約
- **アニメーション演出**: fadeIn、fadeInUp、slideDown、bounceIn、glow-pulse、float、card-shineなど多彩なCSSアニメーション
- **浮遊パーティクル**: 十字シンボルのアニメーション背景
- **オーブグラデーション**: グロー効果のあるグラデーション背景
- **スクロールスナップ**: アニメーションインジケーター付き

## 技術スタック

- Next.js 16.1.1、React 19.2、TypeScript、Tailwind CSS 4
- Noto Sans JPフォント
- カスタムCSSアニメーション（キーフレーム）
- babel-plugin-react-compiler
- 赤 (#c41e3a) アクセントカラーのダークテーマ

## 開発の裏話

20種類以上のSNSのカスタムSVGアイコンを全て自前で描きました。浮遊パーティクルはrequestAnimationFrameを使ったCanvasレンダリングです。
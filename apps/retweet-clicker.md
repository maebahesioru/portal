---
slug: "retweet-clicker"
name: "retweet-clicker"
fqdn: "https://retweet-clicker.hikamer.f5.si"
shortDescription: "リツイートを題材にした放置系クリッカーゲーム。クリックでRTを稼ぎ、アップグレード購入、実績解除。タイピングミニゲームやコンボシステム搭載。"
tags: [ゲーム, クリッカー, エンタメ, 放置系]
launchedAt: 2022
---

# retweet-clicker — RTクリッカーゲーム

retweet-clickerは、リツイートをテーマにした放置系クリッカーゲームです。クリックでRT数を増やし、アップグレードを購入しながらスコアを伸ばしていきます。

## ゲームシステム

- **基本メカニクス**: クリックパワー、自動RT、コンボ倍率、クリティカル、ジャックポット
- **ショップ**: 認証バッジ、プレミアムバッジ、ガチャ運、フレイムガード、タイム延長などのアップグレード
- **タイピングミニゲーム**: 日本のトレンドワードを入力してリプライを稼ぐ
- **名言ミニゲーム**: 名言ワードを入力してボーナスRT
- **実績システム**: 複数段階のアンロック実績
- **セーブ/ロード**: localStorage永続化、インポート/エクスポート対応
- **テーマシステム**: カスタムテーマ切り替え
- **浮遊テキストエフェクト**: +RT、クリティカル、ジャックポットの視覚演出

## 技術スタック

- Next.js 16.1.1、React 19.2、TypeScript、Tailwind CSS 4
- babel-plugin-react-compiler
- Geist + Geist Mono フォント
- 全ゲームロジックをuseGameStateフック（542行）に集約
- タブナビゲーション（HomePage, ShopPage, AchievementsPage, SettingsPage）\n
## 開発の裏話

useGameStateフックが542行に膨れ上がり、状態管理の複雑さに苦労しました。タイピングミニゲームのワードリストはトレンドワードを手動選定しています。
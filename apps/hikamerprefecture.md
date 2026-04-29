---
slug: "hikamerprefecture"
name: "hikamerprefecture"
fqdn: "https://hikamerprefecture.hikamer.f5.si"
shortDescription: "Yahooリアルタイム検索でツイートから都道府県名を検出し、D3.jsでインタラクティブ日本地図に可視化するデータ分析ツール。Supabaseでデータを永続化。"
tags: [エンタメ, 可視化, コミュニティ, 地図]
launchedAt: 2022
---

# hikamerprefecture — ツイート都道府県分布マップ

hikamerprefectureは、指定したキーワードのツイートから都道府県名を自動検出し、日本地図上に可視化するツールです。Yahooリアルタイム検索APIで取得したツイート本文から47都道府県名の出現回数をカウントし、D3.jsで色分け表示します。

## 主な機能

- **インタラクティブ日本地図**: D3.js（d3-geo + topojson-client）で描画。県ごとのツイート数を色の濃淡で表現
- **投稿者アイコン表示**: 各県に反応したユーザーのプロフィール画像をfxtwitter API経由で取得しマップ上に配置
- **Supabaseデータ永続化**: ツイートIDの重複排除と集計データをSupabaseに保存
- **フォースレイアウト**: d3-forceで県内のアイコン配置を自動調整

## 技術スタック

- Vite + React 19 + TypeScript
- D3.js（d3-geo, d3-force, d3-scale, d3-scale-chromatic, d3-selection, d3-zoom）
- topojson-client + jpn-atlas（日本地図データ）
- Supabase（データベース・永続化）
- Yahooリアルタイム検索API + fxtwitter API

## 開発の裏話

d3-forceを使ったフォースレイアウトで県内のアイコン配置を自動計算していますが、初期配置によってアイコン同士が重なってしまい、パラメータ調整に数週間かかりました。
---
slug: "illustsagasitter"
name: "illustsagasitter"
fqdn: "https://illustsagasitter.hikamer.f5.si"
shortDescription: "Twitterイラスト検索エンジン。キーワードからTwitter上のイラストを検索。ギャラリー表示、フルスクリーンビューア、イラストレーターフィルター、表示制限/AI画像フィルター対応。"
tags: [イラスト, 検索, Twitter, SSE]
---

# illustsagasitter — Twitterイラスト検索

illustsagasitterは、Twitter上のイラストをキーワード検索できる専用検索エンジンです。Yahooリアルタイム検索APIをデータソースとし、見つけた画像をギャラリー表示やフルスクリーンで閲覧できます。

## 主な機能

- **リアルタイム検索**: Yahooリアルタイム検索API + fxtwitter/vxtwitterAPIでツイート情報を補完
- **SSEストリーミング検索結果**: サーバー送信イベントで検索結果を逐次表示
- **フルスクリーンビューア**: ピンチズーム、マウスホイールズーム、ドラッグ操作、スライドナビゲーション
- **動画再生**: HLS動画再生対応
- **フィルター**: イラストレーター検出（isIllustrator関数）、表示制限フィルター、AI画像フィルター、メディアタイプフィルター
- **ソート**: 人気順/最新順/古い順
- **パニックボタン**: Escキーで画面を真っ白にする緊急機能
- **ダウンロード**: 画像のダウンロード（プロキシ経由）

## 技術スタック

- Next.js 16.1.6、React 19.2、TypeScript、Tailwind CSS 4
- hls.js 1.6.15（動画再生）
- Yahooリアルタイム検索API → fxtwitter API → vxtwitter API フォールバック
- babel-plugin-react-compiler
- OFUSE投げ銭連携（広告なし、完全無料）

## 開発の裏話

fxtwitter API → vxtwitter APIのフォールバックチェーンを実装しました。両方のAPIにレート制限があるため、429エラーで自動切り替えするロジックを入れています。
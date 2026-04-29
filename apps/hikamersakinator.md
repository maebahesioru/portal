---
slug: "hikamersakinator"
name: "hikamersakinator"
fqdn: "https://hikamersakinator.hikamer.f5.si"
shortDescription: "ヒカマー版アキネーター。界隈のキャラクターを質問で当てるゲーム。エントロピーベースの質問選択で通常15問以内に正解到達。100体近くのキャラクターDB。"
tags: [ゲーム, 診断, クイズ, エンタメ]
---

# hikamersakinator — ヒカマー版アキネーター

hikamersakinatorは、有名な推論ゲーム「アキネーター」のヒカマー界隈版です。ユーザーが思い浮かべた界隈のキャラクターを、yes/no質問で絞り込み最終的に正解を導き出します。

## 主な機能

- **100体近いキャラクターデータベース**: 活動状態、所属県、フォロワー数、特徴などの属性をタグ付け
- **エントロピーベース質問選択**: 情報利得計算で最適な質問を選択
- **質問戻り機能**: 前の質問に戻って回答変更可能
- **キャラクター図鑑**: 登録全キャラクターを一覧表示
- **CSSアニメーション**: 星の瞬きやフロートアニメーション、回答時の演出

## 技術スタック

- Vite + React 18 + TypeScript + Tailwind CSS 3
- react-router-dom（SPAルーティング）
- zustand（状態管理）
- lucide-react（アイコン）
- CSS keyframesアニメーション

## 開発の裏話

エントロピーベースの質問選択アルゴリズムをゼロからTypeScriptで実装しました。シャノンエントロピーを使った情報利得計算と、界隈固有の属性フィルタリングが最大の難関でした。
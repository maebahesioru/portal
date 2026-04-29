---
slug: "hikamerssukikirai"
name: "hikamerssukikirai"
fqdn: "https://hikamer-suki-kira.hikamer.f5.si"
shortDescription: "ヒカマー界隈の投票・集計サービス。コミュニティメンバーへの投票、コメント、ランキング表示。Supabaseバックエンドでリアルタイム集計。"
tags: [投票, ランキング, エンタメ, Supabase]
---

# hikamerssukikirai — ヒカマーズ好き嫌い.com

hikamerssukikiraiは、ヒカマー界隈の人物に対して投票し、その結果を可視化する投票サービスです。コメント機能やランキング表示も備えています。

## 主な機能

- **投票**: コミュニティの人物に対して投票（Supabaseバックエンド）
- **コメントシステム**: 入れ子返信対応（parent_comment_id）、非表示コメント、コメントリアクション
- **ランキング表示**: 人気順、ワースト順、トレンド順の3種類
- **投票機能**: ユーザー作成の投票を作成・回答可能
- **検索**: ページネーション付き人物検索
- **管理者パネル**: 同意管理、分析、コンテンツモデレーション
- **ISR（10秒間隔）**: ほぼリアルタイムのデータ表示

## 技術スタック

- Next.js 15.5.6、React 19.1、TypeScript、Tailwind CSS 4
- Supabase (PostgreSQL) バックエンド
- date-fns + date-fns-tz（日付処理）
- js-cookie、Lucide React
- DNS prefetch/preconnectでSupabase通信を最適化\n
## 開発の裏話

コメントの入れ子構造をSupabaseの再帰CTEで実装しようとしてパフォーマンス問題に直面。アプリケーション層でツリー構築する方式に切り替えました。
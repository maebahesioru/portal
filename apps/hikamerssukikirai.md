---
slug: "hikamerssukikirai"
name: "hikamerssukikirai"
fqdn: "https://hikamer-suki-kira.hikamer.f5.si"
shortDescription: "コミュニティ内の投票・アンケートを集計するサービス。テーマごとの人気投票やコメント機能を備え、健全な交流を目的としています。Supabaseバックエンドでリアルタイム集計。"
tags: [投票, アンケート, コミュニティ, Supabase]
---

# hikamerssukikirai — コミュニティ投票サービス

hikamerssukikiraiは、コミュニティ内のテーマに対して投票・アンケートを行い、その結果を可視化するサービスです。コメント機能やランキング表示も備えています。

## 主な機能

- **テーマ投票**: コミュニティのテーマに対して投票（Supabaseバックエンド）
- **コメントシステム**: 入れ子返信対応（parent_comment_id）、モデレーション機能
- **ランキング表示**: 人気順、トレンド順などのランキング
- **アンケート機能**: ユーザー作成のアンケートを作成・回答可能
- **検索**: ページネーション付きテーマ検索
- **管理者パネル**: 同意管理、分析、コンテンツモデレーション
- **ISR（10秒間隔）**: ほぼリアルタイムのデータ表示

## 技術スタック

- Next.js 15.5.6、React 19.1、TypeScript、Tailwind CSS 4
- Supabase (PostgreSQL) バックエンド
- date-fns + date-fns-tz（日付処理）
- js-cookie、Lucide React
- DNS prefetch/preconnectでSupabase通信を最適化

## 開発の裏話

コメントの入れ子構造をSupabaseの再帰CTEで実装しようとしてパフォーマンス問題に直面。アプリケーション層でツリー構築する方式に切り替えました。

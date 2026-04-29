---
slug: "hikamerautowiki"
name: "hikamerautowiki"
fqdn: "https://hikamerautowiki.hikamer.f5.si"
shortDescription: "AIがMediaWikiの編集を自動化するアシスタント。指示を入力するだけでWikiページの作成・編集・ファクトチェックをAIが実行。Yahooリアルタイム検索と連携。"
tags: [Wiki, AI, 自動化, NLP]
launchedAt: 2023
---

# hikamerautowiki — AIによるWiki自動編集アシスタント

hikamerautowikiは、MediaWikiベースのWikiに対してAIが編集作業を自動化するツールです。ユーザーが編集指示を入力するだけでWikitextを生成し、実際にWikiページを作成・編集します。

## 4つのツールモード

- **ページ編集**: 既存Wikiページの修正案をAIが生成
- **新規ページ作成**: 指示に基づきAIがWikitextを生成
- **ファクトチェック**: Yahooリアルタイム検索のツイートデータと照合し、既存ページの正確性を検証（目次ナビゲーション付き）
- **リダイレクト作成**: 別名・略称のリダイレクトページを自動生成

## 技術スタック

- Next.js 16.2.1、React 19.2、TypeScript、Tailwind CSS 4
- PostgreSQL (pg 8.20.0) バックエンド
- ストリーミングAI応答（SSE）、推論過程の可視化
- Yahooリアルタイム検索API + MediaWiki API
- Zod 4.3.6（バリデーション）、Sharp 0.34.5（画像アップロード）
- Vitest 4.1.2（ユニットテスト）\n
## 開発の裏話

MediaWikiのAPI仕様が独特で、WikitextパーサーをZodでバリデーションするのに苦労しました。特にセクション編集とページ全体編集の使い分けでバグが多発し、Vitestでユニットテストを書いてようやく安定しました。\n
## 開発の裏話

MediaWikiのAPI仕様が独特で、WikitextパーサーをZodでバリデーションするのに苦労しました。特にセクション編集とページ全体編集の使い分けでバグが多発し、Vitestでテストを書いて安定させました。
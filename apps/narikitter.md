---
slug: "narikitter"
name: "narikitter"
fqdn: "https://narikitter.hikamer.f5.si"
shortDescription: "公開投稿を参考にしたキャラクター風AIチャットサービス。公開情報から会話スタイルを学習し、チャットを楽しめます。Yahooリアルタイム検索連携。Google OAuthログイン対応。"
tags: [AI, チャット, SNS, Stripe]
---

# narikitter — AIなりきりチャット

narikitterは、公開投稿を参考にしたキャラクター風AIと会話できるチャットサービスです。公開情報から会話スタイルを学習し、チャットを楽しめます。

## 主な機能

- **AIなりきりチャット**: Twitterユーザーの公開ツイートからAIが口調を学習し、その人物として会話
- **バトルモード**: 2人のAIペルソナが会話するバトルモード
- **グループチャット**: 複数のAIペルソナが参加するグループ会話
- **Google OAuth認証**: NextAuth.js v5 betaでログイン
- **会話共有**: 短縮URL共有、スナップショット画像共有、会話パケット共有
- **PWA対応**: @ducanh2912/next-pwaでオフラインキャッシュ
- **動的OGP画像**: ユーザーごとのOGP画像を動的生成（/api/og）
- **Markdownレンダリング**: react-markdown + remark-gfm + remark-breaksでチャット表示

## 技術スタック

- Next.js 16.1.6、React 19、TypeScript、Tailwind CSS 3.4
- Prisma + PostgreSQL（サブスクリプション管理、月間使用量トラッキング）
- NextAuth.js v5 beta（Google OAuth）
- react-markdown 9.0.1、Shinobi-s-tag（広告配信）

## DBスキーマ

Subscription（サブスクリプション管理）、ChatMonthlyUsage（無料枠追跡）\n
## 開発の裏話

AIの応答生成にYahooリアルタイム検索で本人のツイートをFew-shotプロンプトに注入する仕組みを実装。PrismaでChatMonthlyUsageテーブルを作り無料枠をトラッキングしています。
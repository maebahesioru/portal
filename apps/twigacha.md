---
slug: "twigacha"
name: "twigacha"
fqdn: "https://twigacha.hikamer.f5.si"
shortDescription: "Twitter/Bluesky/Misskey/MastodonのアカウントをTCGカード化するマルチプラットフォームガチャゲーム。8段階レアリティ、バトルシステム、オンライン対戦。"
tags: [ガチャ, ゲーム, TCG, マルチプラットフォーム]
---

# twigacha — マルチプラットフォームガチャTCG

twigachaは、Twitter、Bluesky、Misskey、MastodonのアカウントをTCGカードに変換するマルチプラットフォームガチャゲームです。デイリー5パックのカードを引き、コレクションし、バトルも楽しめます。

## ガチャシステム

- **マルチプラットフォーム対応**: Twitter（fxtwitter API）、Bluesky（AT Protocol）、Misskey API、Mastodon API（nodeinfo検出でインスタンス種別判定）
- **8段階レアリティ**: C→N→R→SR→SSR→UR→LR。公開情報に基づいてレアリティを計算
- **天井システム**: 10パックSSRなしでUR以上確定
- **ピックアップガチャ**: Yahooリアルタイム検索で特定ユーザーを検索
- **HKM仮想通貨**: ヒカキンマニアコインでパック購入可能

## バトルシステム

- **6ステータス**: ATK/DEF/SPD/HP/INT/LUK、各ステータスからスキル派生、実ツイートからアルティメット効果
- **PvEクエスト**: ステージ制
- **オンラインPvP**: Webプッシュ通知で対戦通知
- **チームバトル、レイドバトル**

## その他機能

- **デイリーミッション**: 5種類のデイリータスク
- **シリアルコード**: コード交換システム
- **カード署名**: HMACベースの改ざん防止
- **コレクション**: 重複トラッキング、ガチャ統計ダッシュボード
- **PWA**: マニフェスト対応

## 技術スタック

- Next.js 16.1.6、React 19.2、TypeScript、Tailwind CSS 4
- Zustand 5.0.11（永続化状態管理）
- Supabase（データベース）
- Web Push API（プッシュ通知）
- Lucide React、Vercel Analytics\n
## 開発の裏話

Zustand 5のlocalStorage永続化でカードデータ肥大化によるQuotaExceededErrorが頻発。Supabaseに移行しローカルはメタデータのみにしました。8段階レアリティ計算は6指標の重み付けです。
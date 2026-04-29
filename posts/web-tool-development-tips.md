---
title: "個人開発者がWebツールを作る際のノウハウ"
date: "2026-03-08"
excerpt: "12個のWebサービスを開発してきた経験から、実際のコードに基づいた企画・設計・開発・運用の実践的なアドバイス。"
---

# 個人開発者がWebツールを作る際のノウハウ

これまでに**12個以上のWebサービス**を開発してきました。この記事では実際のコードベースに基づいた実践的な知見を共有します。

## 1. 企画：課題感を掘り下げる

ツール開発のきっかけは常に「**課題感**」です。例えば：

- **hikamerslibrary**: 「過去のツイートをもっと簡単に検索したい」→ 30万件のツイートをPostgreSQLにインポートし、Pythonバッチで定期更新
- **hikafuwa-box**: 「画像に合った面白いツイートを自動生成したい」→ Google Gemini APIで画像解析+ジョーク生成
- **nareaitter**: 「Twitterの人間関係を可視化したい」→ フォースディレクテッドグラフでCanvas描画

## 2. 設計：メンテナンスできるスタックを選ぶ

全プロジェクトで共通の技術スタックを採用することで、新しいサービス立ち上げの時間を大幅に短縮しています。

**基本スタック**:

- Next.js + React + TypeScript + Tailwind CSS（全12プロジェクト）
- pnpm（11/12で採用）
- babel-plugin-react-compiler（7/12で採用）

**バックエンドが必要な場合**:

- Supabase（twigacha, sukikirai, hikamerslibrary）
- PostgreSQL + Prisma（narikitter）
- PostgreSQL + pg（hikamerautowiki）

**外部API**: Yahooリアルタイム検索（5プロジェクトで使用）、Google Gemini AI、Stripe

## 3. 開発：段階的に複雑さを追加する

hikamerslibraryのケーススタディ：

1. **MVP**: 基本的なキーワード検索のみ
2. **v2**: 音声検索とAI検索を追加
3. **v3**: AMP対応、管理者認証、JSON-LD構造化データ
4. **v4**: Service Worker（PWA）、ダウンロード機能

最初から全部作ろうとせず、使ってもらいながら改善するのが鉄則です。

## 4. 運用：監視と信頼構築

- **死活監視**: UptimeRobotで全サービスを監視
- **データバックアップ**: PostgreSQLの定期バックアップ
- **依存関係更新**: Dependabotで自動PR（hikafuwa-boxの例）
- **OGP対応**: metadataBase設定とopengraph-image生成を全プロジェクトで統一

## まとめ

個人開発で大切なのは「**継続すること**」です。20以上のWebサービスを作り、失敗から学び、技術スタックを磨き続けることが長期的な成功につながります。

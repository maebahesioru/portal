---
slug: "hikamerslibrary"
name: "hikamerslibrary"
fqdn: "https://hikamerslibrary.hikamer.f5.si"
shortDescription: "30万件以上のツイートを検索できる高速ツイート検索エンジン。音声検索、AI検索、AMP対応。Supabase + PostgreSQLでデータ管理。"
tags: [検索エンジン, ツイート, AI, Supabase]
launchedAt: 2022
---

# hikamerslibrary — ツイート検索エンジン HikamersSearch

hikamerslibrary（HikamersSearch）は、30万件以上のツイートを高速検索できるツイート検索エンジンです。キーワード検索に加え、音声入力やAIによる自然言語検索にも対応しています。

## 主な機能

- **高速ツイート検索**: 30万件以上のツイートデータベースを全文検索
- **AI検索**: 自然言語での質問に対してAIが関連ツイートを抽出（Vertex AI）
- **音声検索**: ブラウザのWeb Speech APIに対応
- **AMP検索対応**: モバイル向け高速検索ページ
- **管理者認証**: Adminパネルでのデータ管理

## 技術スタック

- Next.js 14.2、React 18.3、TypeScript（CSS Modules）
- Supabase（データベース・認証）
- Google Vertex AI（@google-cloud/aiplatform）
- reCAPTCHA認証、Service Worker（PWA）
- PostgreSQL（自宅サーバー）
- Pythonバッチ（ツイートインポート: import_tweets.py）
- structured data JSON-LD

## インフラ

- 自宅サーバーでPostgreSQLを運用
- 30万件以上のツイートデータをPythonバッチで定期インポート
- Coolifyでデプロイ管理

## 開発の裏話

30万件のツイートをPythonバッチでPostgreSQLにインポートする処理が一番の重労働でした。TSVファイルのパースでメモリ不足になり、チャンク分割読み込みに切り替えて安定しました。
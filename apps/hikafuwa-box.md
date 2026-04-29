---
slug: "hikafuwa-box"
name: "hikafuwa-box"
fqdn: "https://hikafuwa-box.hikamer.f5.si"
shortDescription: "AIが画像から面白いツイートを生成するサービス。Google Gemini AIを利用し、画像内容を解析してジョークツイートを自動生成。10段階テンションスライダー搭載。"
tags: [AI, 画像解析, ツイート, Gemini]
launchedAt: 2022
---

# hikafuwa-box — AIで画像からネタツイートを生成

hikafuwa-boxは、アップロードした画像をGoogle Gemini AIが解析し、面白いツイートを自動生成するサービスです。界隈で画像ネタを作るための定番ツールです。

## 主な機能

- **画像アップロードとAI解析**: ドラッグ&ドロップで画像をアップロードし、Gemini AIが内容を解析
- **テンションスライダー**: 10段階設定（「超和平的」から「カオス/狂気」まで）
- **ストリーミング応答**: AIの生成結果をリアルタイム表示（SSE）
- **マルチ共有**: X、Bluesky、LINE、クリップボードコピー
- **reCAPTCHA認証**: 悪用防止のレート制限

## 技術スタック

- Next.js 16.0.3、React 19.2、TypeScript（カスタムCSS・グラスモーフィズム）
- Google Generative AI (@google/generative-ai 0.24.1)
- グラスモーフィズムカード、紫/ピンクのグラデーションテーマ
- Nixpacks (Railway) デプロイ、PWA対応
- PapaParse（データ処理）\n
## 開発の裏話

Gemini APIのレート制限に悩まされ、無料枠を超えないよう10段階のプロンプトテンプレートをキャッシュする仕組みを独自実装しました。システムプロンプトは`hikafuwa.txt`に2500文字以上の日本語指示を書き込み、テンションレベルごとに異なるキャラ付けをしています。\n
## 開発の裏話

Gemini APIのレート制限に悩まされ、無料枠を超えないよう10段階のプロンプトテンプレートをキャッシュする仕組みを独自実装しました。
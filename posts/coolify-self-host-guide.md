---
title: "個人開発サービスをCoolifyで運用するメリット"
date: "2026-01-25"
excerpt: "Coolifyを使ったセルフホストDocker運用の実践ガイド。Vercelとの比較、デプロイ自動化、環境変数管理、API活用まで。"
---

# 個人開発サービスをCoolifyで運用するメリット

Coolifyは、セルフホスト型のPaaS（Platform as a Service）です。VercelやNetlifyのような使い勝手で、自宅サーバーやVPS上にDockerコンテナを簡単にデプロイできます。

## 背景

個人開発で複数のWebサービスを運用していると、各サービスのデプロイ管理が煩雑になります。Vercelの無料枠では本数制限があり、有料プランはコストがかさみます。Coolifyは自前のサーバーにインストールするだけで、無制限のアプリケーションを管理できます。

## 課題

- 複数サービスの一元管理
- デプロイの自動化
- SSL証明書の管理
- 環境変数の安全な管理
- GitHubとの連携

## 実装方針

Coolifyを自宅サーバーにDockerでインストールし、GitHubリポジトリと連携します。各サービスのソースコードをGitHubにプッシュすると、Coolifyが自動的にビルドとデプロイを行います。SSL証明書は自動発行されます。

## 主な機能と利点

1. **無制限のアプリケーション管理**: Vercelのような本数制限がない
2. **GitHub自動デプロイ**: プッシュするだけで本番反映
3. **SSL自動管理**: Let's Encryptで証明書を自動更新
4. **環境変数管理**: ブラウザ上の管理画面で安全に設定
5. **Dockerコンテナ管理**: 各サービスを独立したコンテナで運用
6. **API完備**: REST APIでデプロイや環境変数設定を自動化可能

## 失敗した点

1. **初期セットアップの複雑さ**: Dockerのネットワーク設定やファイアウォール設定で躓きました。公式ドキュメントを熟読することを推奨します。

2. **リソース管理**: 自宅サーバーのメモリが不足し、ビルド中にOOM killerが発生することがありました。スワップ領域の追加で対応しました。

3. **APIのバージョン差異**: CoolifyのAPIエンドポイントがバージョンによって異なり、`/deploy`が`/restart`になっていたり、ドキュメントが不足している部分がありました。

## 改善した点

- 全サービスのビルド設定を標準化（nixpacks使用）
- 環境変数`NEXT_PUBLIC_SITE_URL`を全サービスで統一
- APIを使った一括デプロイスクリプトを作成

## コード例：Coolify APIでアプリ一覧を取得

```ts
const res = await fetch(`${COOLIFY_URL}/api/v1/applications`, {
  headers: { Authorization: `Bearer ${COOLIFY_TOKEN}` },
  next: { revalidate: 60 }
});
const apps = await res.json();
```

## コード例：APIで環境変数を設定

```ts
await fetch(`${COOLIFY_URL}/api/v1/applications/${uuid}/envs`, {
  method: "POST",
  headers: {
    "Authorization": `Bearer ${TOKEN}`,
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    key: "NEXT_PUBLIC_SITE_URL",
    value: "https://example.com",
    is_buildtime: true,
  }),
});
```

## Vercelとの比較

| 項目 | Vercel | Coolify |
|---|---|---|
| 無料枠 | 制限あり | 無制限（自前サーバー） |
| SSL | 自動 | 自動（Let's Encrypt） |
| デプロイ | Gitプッシュ | Gitプッシュ |
| カスタマイズ性 | 低い | 高い（Docker） |
| 運用コスト | 無料枠超で有料 | サーバー代のみ |

## まとめ

Coolifyは個人開発者にとって理想的な運用基盤です。自宅サーバーがあれば実質無料で無制限のアプリケーションを運用でき、Vercelのような使い勝手を維持しながらカスタマイズ性も確保できます。

## 注意点

- 自宅サーバーの停電・ネットワーク障害に備えたバックアップ計画が必要
- Dockerイメージの定期的なクリーンアップでディスク容量を確保すること
- APIトークンは絶対にGitにコミットしないこと

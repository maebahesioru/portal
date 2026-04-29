---
title: "PWA対応で個人開発アプリを便利にする方法"
date: "2026-03-15"
excerpt: "next-pwaを使ったPWA対応の実装方法。オフラインキャッシュ、Service Worker、アイコン生成、manifest.jsonの設定まで。"
---

# PWA対応で個人開発アプリを便利にする方法

PWA（Progressive Web App）対応を追加するだけで、Webアプリをネイティブアプリのように使えるようになります。オフライン対応、ホーム画面追加、プッシュ通知などが可能になります。

## 背景

個人開発のWebサービスは、ブラウザでしか使えないという制約があります。PWA対応を追加することで、ユーザーはホーム画面から直接アクセスでき、オフラインでも一部機能が使えるようになります。特にゲームやツール系のサービスでは、リピート率向上に効果的です。

## 課題

- Service Workerの登録とライフサイクル管理
- オフラインキャッシュの戦略
- アイコン・スプラッシュ画面の用意
- manifest.jsonの適切な設定
- Next.jsとの統合

## 実装方針

`@ducanh2912/next-pwa`を使用してNext.jsプロジェクトにPWA対応を追加します。

### 1. パッケージのインストールと設定

```bash
pnpm add @ducanh2912/next-pwa
```

```js
// next.config.js
const withPWA = require("@ducanh2912/next-pwa").default({
  dest: "public",
  register: true,
  skipWaiting: true,
});

module.exports = withPWA({
  // 既存のnext.config設定
});
```

### 2. manifest.json

```json
{
  "name": "サービス名",
  "short_name": "サービス",
  "description": "サービスの説明",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#0d0d14",
  "theme_color": "#0d0d14",
  "icons": [
    { "src": "/icon-192.png", "sizes": "192x192", "type": "image/png" },
    { "src": "/icon-512.png", "sizes": "512x512", "type": "image/png" }
  ]
}
```

### 3. メタデータへの追加

```ts
export const metadata: Metadata = {
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "サービス名",
  },
};
```

## 失敗した点

1. **Service Workerの更新**: `skipWaiting: true`を設定していないと、新しいバージョンのService Workerが即座に有効にならず、ユーザーが古いキャッシュを使い続ける問題がありました。

2. **キャッシュ戦略のミス**: すべてのアセットをキャッシュした結果、更新が反映されない問題が発生。APIリクエストはキャッシュせず、静的アセットのみキャッシュするよう修正。

3. **アイコン生成の手間**: 複数サイズのアイコンを手動で用意するのが面倒でした。Next.jsの`app/icon.tsx`で動的生成する方法と併用することで効率化。

## 改善した点

- `app/icon.tsx`でfaviconを動的生成し、PWAアイコンと統一
- manifest.jsonのテーマカラーをサイトデザインと統一
- Service Workerの更新通知を実装

## まとめ

PWA対応は少ない工数で大きなユーザー体験向上が見込める投資です。特にゲームやツール系のサービスでは、ホーム画面からの直接アクセスがリピート率を大きく向上させます。

## 注意点

- Service Workerのキャッシュは開発中に問題を起こしやすいため、開発時は無効化すること
- HTTPSが必須です（localhostは例外）
- iOS SafariはPWA対応が限定的（プッシュ通知非対応など）なことに注意

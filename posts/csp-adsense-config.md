---
title: "AdSense対応のCSP設定メモ"
date: "2026-03-22"
excerpt: "Content Security Policyでセキュリティを確保しつつ、AdSenseやGoogle Analyticsのスクリプトを許可する設定方法。実際のコード付き。"
---

# AdSense対応のCSP設定メモ

Content Security Policy（CSP）はXSS攻撃を防ぐ重要なセキュリティヘッダーです。しかしAdSenseのスクリプトを許可しつつ、厳格なCSPを設定するのは意外と難しいです。この記事では実際に動作確認済みの設定を紹介します。

## 背景

CSPを有効にすると、許可したドメインからのスクリプト・スタイル・画像のみが読み込まれるようになります。AdSenseを導入しているサイトでは、Googleの広告配信ドメインを許可リストに追加する必要があります。これを忘れると、AdSenseの広告が表示されなくなります。

## 課題

- XSS対策としてのCSP強化
- AdSenseスクリプトの許可
- Funding Choicesの許可
- サードパーティスクリプト（Analytics等）の許可
- CSP違反レポートの活用

## 実装方針

Next.jsの`next.config.ts`で`headers()`関数を使ってCSPヘッダーを設定します。

### 1. 最小限のCSP設定

```ts
// next.config.ts
async headers() {
  return [{
    source: "/(.*)",
    headers: [{
      key: "Content-Security-Policy",
      value: [
        "default-src 'self'",
        "script-src 'self' 'unsafe-inline' 'unsafe-eval'",
        "style-src 'self' 'unsafe-inline'",
        "img-src 'self' data: https:",
        "font-src 'self'",
        "connect-src 'self' https:",
        "frame-src 'self'",
      ].join("; "),
    }],
  }];
}
```

### 2. AdSense対応のCSP設定

```ts
"script-src 'self' 'unsafe-inline' 'unsafe-eval' " +
  "https://pagead2.googlesyndication.com " +
  "https://fundingchoicesmessages.google.com " +
  "https://ep1.adtrafficquality.google " +
  "https://ep2.adtrafficquality.google",

"frame-src " +
  "https://googleads.g.doubleclick.net " +
  "https://tpc.googlesyndication.com " +
  "https://fundingchoicesmessages.google.com " +
  "https://www.google.com",
```

### 3. その他のセキュリティヘッダー

```ts
{ key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
{ key: "X-Content-Type-Options", value: "nosniff" },
{ key: "X-Frame-Options", value: "SAMEORIGIN" },
{ key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
```

## 失敗した点

1. **`'unsafe-inline'`の必要性**: AdSenseは動的にインラインスクリプトを挿入するため、`'unsafe-inline'`が必須でした。nonceベースのアプローチも検討しましたが、AdSenseのスクリプトが動的に生成されるため断念。

2. **frame-srcの設定漏れ**: 広告は`<iframe>`で表示されるため、`frame-src`にGoogleの広告ドメインを許可しないと広告が表示されませんでした。

3. **CSP違反のデバッグ**: CSPに違反するとブラウザのコンソールにエラーが出ますが、どのドメインがブロックされたかの特定に時間がかかりました。`report-uri`を設定して違反レポートを収集することで効率化。

## 改善した点

- AdSense、Funding Choices、Traffic Qualityの全ドメインを許可リストに追加
- 画像の許可を`https:`全体に広げ、OGP画像の読み込みに対応
- HSTSヘッダーを追加し、HTTPS強制を有効化

## まとめ

CSPはセキュリティ強化に必須ですが、AdSenseとの共存には細かい調整が必要です。`'unsafe-inline'`と広告配信ドメインの許可は避けられないため、他の部分でセキュリティを強化するバランスが重要です。

## 注意点

- CSPは少しの設定ミスでサイト全体が機能しなくなるため、必ずステージング環境でテストすること
- 新しい広告ネットワークを追加する際は、CSPの更新を忘れずに
- CSPヘッダーはブラウザキャッシュの影響を受けるため、変更後はハードリロードで確認すること

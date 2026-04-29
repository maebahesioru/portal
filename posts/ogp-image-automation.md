---
title: "Next.jsでOGP画像を自動生成する方法"
date: "2026-02-01"
excerpt: "opengraph-image.tsxを使ったOGP画像の自動生成方法。ImageResponse、Tailwind的なスタイリング、動的タイトル対応まで。"
---

# Next.jsでOGP画像を自動生成する方法

SNSでシェアされたときに表示されるOGP画像は、クリック率に大きく影響します。Next.js App Routerでは、`opengraph-image.tsx`ファイルを作成するだけで自動生成できます。

## 背景

各サービスでOGP画像を手動で作成するのは非効率です。特に複数サービスを運用している場合、すべてのサービスに個別のOGP画像を用意するのは現実的ではありません。Next.jsのImageResponseを使えば、コードで動的にOGP画像を生成できます。

## 課題

- 全サービスで統一されたOGP画像の生成
- サービス名や説明文を動的に埋め込み
- 適切なサイズ（1200x630px）とフォーマット（PNG）
- ビルド時の静的生成とキャッシュ

## 実装方針

Next.jsの`opengraph-image.tsx`（または`opengraph-image.ts`）ファイルを`app/`直下に配置すると、自動的に`/opengraph-image`ルートが生成され、OGP画像として配信されます。

### 1. 基本的な実装

```tsx
// app/opengraph-image.tsx
import { ImageResponse } from "next/og";

export const alt = "サイト名";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div style={{
        width: "100%", height: "100%", display: "flex",
        flexDirection: "column", alignItems: "center",
        justifyContent: "center", background: "#0f172a",
      }}>
        <div style={{ fontSize: 80, color: "white" }}>
          サイト名
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
```

### 2. 動的ルート用のOGP画像

`app/blog/[slug]/opengraph-image.tsx`を配置することで、各ブログ記事ごとに異なるOGP画像を生成できます。

```tsx
export default function Image({ params }) {
  const post = getPostBySlug(params.slug);
  return new ImageResponse(
    <div style={{ ... }}>
      <div style={{ fontSize: 60 }}>{post.title}</div>
    </div>,
    { width: 1200, height: 630 }
  );
}
```

### 3. metadataとの連携

```ts
export const metadata: Metadata = {
  openGraph: {
    images: ["/opengraph-image"],
  },
};
```

## 失敗した点

1. **フォントの問題**: 日本語フォントがデフォルトでは使えず、Google Fontsからロードする必要がありました。`@next/font`で静的にフォントを読み込むことで解決。

2. **ImageResponseの制限**: Tailwind CSSが使えず、インラインスタイルのみ対応。また、一部のCSSプロパティ（backdrop-filter等）が非対応でした。

3. **ビルド時のエラー**: `force-dynamic`を指定すると静的生成が無効になり、エッジランタイムで制限が出る場合がありました。削除してSSGに戻すことで解決。

## 改善した点

- 全19サービスに`opengraph-image.tsx`を追加
- metadataBaseを正しい本番URLに設定し、相対パス問題を解消
- Twitterカード用に`twitter-image.tsx`も併用

## まとめ

OGP画像の自動生成は、SNSシェア時の見栄えを大きく向上させます。Next.jsのImageResponseを使えば、コードベースで一元管理でき、サービス追加時もテンプレートをコピーするだけです。

## 注意点

- ImageResponseはServer Componentsでのみ動作します
- フォントは事前にロードしないと日本語が表示されません
- 動的生成はビルド時間に影響するため、記事数が多い場合は注意

---
title: "hikamer's portal の今後の展望"
date: "2026-04-29"
excerpt: "現在運営中のサービスの今後のロードマップや、実際のコードベースに基づいた技術的展望を紹介します。"
---

# hikamer's portal の今後の展望

12個以上のWebサービスを運営する中で、現在進行中の改善プロジェクトや技術的な展望をお伝えします。

## 背景：これまでの振り返り

2021年から個人開発を始め、現在では20以上のWebサービスを運用するまでになりました。すべてのサービスはCoolify上の自宅サーバーでDocker管理されており、Next.js + TypeScript + Tailwind CSSの統一スタックで開発されています。

## 課題：現在直面している問題

1. **バージョン分散**: Next.jsのバージョンが14.2〜16.2.3までプロジェクトごとにバラバラ
2. **Tailwind混在**: v3とv4が混在しており、スタイリングの一貫性に課題
3. **OGP未対応**: 一部サービスでOGP画像が未設定だった（現在は全サービス対応済み）
4. **faviconのデフォルト表示**: Next.jsデフォルトのfaviconが表示される問題（現在はicon.tsxで統一対応中）

## 実装方針

### 技術スタックの統一

現在、プロジェクトによってNext.jsのバージョンが14.2から16.2.3まで分散しています。これを**Next.js 16.xに統一**し、React Compiler（babel-plugin-react-compiler）を全プロジェクトに導入する計画です。

また、Tailwind CSSもv3とv4が混在しているため、**全プロジェクトをTailwind CSS 4 + @tailwindcss/typographyに統一**し、proseクラスによるMarkdownスタイリングを標準化します。

### ポータルサイトのコンテンツ拡充

ポータルサイトの情報価値を高めるため、以下の施策を実施中です。

- 全19アプリの詳細解説ページを作成（各1000〜1500字）
- ブログ機能の追加（5記事、Markdownファイル管理）
- JSON-LD構造化データの追加（SoftwareApplication, BlogPosting）
- 開発の裏話セクションで一次情報を提供
- AboutページのE-E-A-T強化

## 失敗と改善

1. **説明文のJSON一元管理**: 19アプリの長文説明を1つのJSONファイルで管理していましたが、改行エスケープが複雑化し修正不能に。現在は`apps/*.md`ファイル分割管理で完全解決。

2. **OGP画像の未設定**: 当初はOGPを意識しておらず、SNSシェア時にプレビューが出ない問題がありました。全サービスにopengraph-image.tsxを追加し解決。

3. **favicon問題**: Next.jsデフォルトfaviconの表示、Viteのfavicon上書き、SVGの非対応など、予想以上に多くの問題が発生。現在はicon.tsxによる動的生成で統一対応中。

## コード例：Markdownファイルからのアプリ情報読み込み

```ts
// lib/apps.ts
import fs from "fs";
import path from "path";
import matter from "gray-matter";

export function getAllAppMetas(): AppMeta[] {
  const files = fs.readdirSync(appsDir).filter(f => f.endsWith(".md"));
  return files.map(file => {
    const raw = fs.readFileSync(path.join(appsDir, file), "utf8");
    const { data, content } = matter(raw);
    return { slug: data.slug, name: data.name, ... };
  });
}
```

## 新規プロジェクト構想

**界隈マップ**の制作を計画しています。ヒカマー界隈の人間関係やサービス間の連携を可視化したインタラクティブマップです。nareaitterのフォースディレクテッドグラフの技術を応用し、SNSのフォロー関係やサービス間のリンク関係を分析します。

## オープンソース化

いくつかのプロジェクトはすでにGitHubで公開しています。今後はより多くのコードをオープンソース化し、以下のような共通ライブラリをnpmパッケージとして切り出す予定です。

- **Yahooリアルタイム検索ラッパー**: 5プロジェクトで使われている共通API呼び出しをライブラリ化
- **OGP画像生成ユーティリティ**: opengraph-image.tsxの共通化
- **Coolify APIクライアント**: ポータルサイトのアプリ一覧取得ロジックを汎用化

## インフラ

現在Coolify上で各サービスをDocker管理しており、このまま継続します。シンプルで十分なパフォーマンスが出ているため、過度な複雑化は避けます。

## コミュニティイベント

以前はオンラインイベントを定期的に開催していましたが、現在は運営体制の都合で不定期開催となっています。再開の際はhikamersnewsやhikafuwa-boxで告知します。

## 注意点

- 個人開発のため、サービス停止や仕様変更が突然行われる可能性があります
- すべてのサービスは無料で提供されていますが、利用規約とプライバシーポリシーを必ず確認してください
- バグ報告や機能リクエストは各サービスのお問い合わせフォームから受け付けています

---

*これからも、ヒカマー界隈の皆様にとって価値のあるサービスを提供し続けるために、尽力してまいります。*

# hikamer's portal

> 十字架_mania が開発・運営する20以上のWebサービスのカタログ兼技術ブログ

## 概要

Next.js 16 + TypeScript + Tailwind CSS 4 で構築されたポータルサイト。Coolify APIと連携し、全サービスの一覧表示・詳細解説・OGP情報の動的取得を行う。ブログはMarkdownファイル管理（gray-matter + marked）。

## 技術スタック

- Next.js 16.2.3 (App Router)
- React 19.2 / TypeScript 5
- Tailwind CSS 4 + @tailwindcss/typography
- marked + gray-matter (Markdownブログ)
- Sharp (画像最適化)
- Coolify API (アプリ一覧取得)

## 起動方法

```bash
pnpm install
pnpm dev
```

## 環境変数

`.env.example` をコピーして `.env.local` を作成：

| 変数 | 説明 |
|---|---|
| `COOLIFY_URL` | Coolify APIのURL |
| `COOLIFY_TOKEN` | Coolify APIトークン |
| `HKM_API_URL` | ヒカマニコインAPIのURL（任意） |

## ブログの追加

```bash
# posts/ に .md ファイルを追加するだけ
cp template.md posts/my-article.md
git add posts/ && git commit -m "new article" && git push
```

## アプリ説明の追加

```bash
# apps/ に .md ファイルを追加
# ---
# slug: "my-app"
# name: "my-app"
# fqdn: "https://my-app.example.com"
# shortDescription: "概要"
# tags: [タグ1, タグ2]
# ---
# Markdown本文...
```

## ライセンス

MIT

## 運営者

- **十字架_mania** ([@maebahesioru2](https://x.com/maebahesioru2))
- Discord: [招待リンク](https://discord.com/invite/26U6r5xMBx)

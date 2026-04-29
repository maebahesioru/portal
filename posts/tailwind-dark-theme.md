---
title: "Tailwind CSS 4でダークテーマUIを作る方法"
date: "2026-02-20"
excerpt: "Tailwind CSS 4のカスタムプロパティとプラグインを使ったダークテーマ実装。@tailwindcss/typographyでMarkdownも最適化。"
---

# Tailwind CSS 4でダークテーマUIを作る方法

Tailwind CSS 4は、CSS-firstの設定方式を採用し、より柔軟なテーマ構築が可能になりました。この記事では実際のポータルサイトのコードを例に、ダークテーマUIの実装方法を解説します。

## 背景

ダークテーマはユーザーの目の疲れを軽減し、バッテリー消費を抑える効果があります。また、開発者向けのツールやポータルサイトでは、ダークテーマがデフォルトとして好まれる傾向があります。

## 課題

- 全体で一貫したカラーパレットの管理
- Markdownコンテンツのスタイリング（prose）
- ガラスモーフィズムなどの特殊効果
- アクセシビリティ（コントラスト比）の確保

## 実装方針

### 1. globals.cssでカスタムプロパティを定義

```css
@import "tailwindcss";
@plugin "@tailwindcss/typography";

:root {
  --background: #0d0d14;
  --foreground: #e8e8f0;
}

body {
  background: var(--background);
  color: var(--foreground);
  font-family: var(--font-geist-sans), Arial, sans-serif;
}
```

### 2. ダークテーマのカラーパレット

```css
/* 主要な色の定義 */
.text-white { color: #ffffff; }
.text-gray-400 { color: #9ca3af; }
.text-gray-500 { color: #6b7280; }

/* グラスモーフィズム */
.bg-white\/3 { background: rgba(255, 255, 255, 0.03); }
.bg-white\/5 { background: rgba(255, 255, 255, 0.05); }
.border-white\/8 { border-color: rgba(255, 255, 255, 0.08); }
```

### 3. Tailwind CSS 4の新機能

v4では設定ファイル（tailwind.config.ts）が不要になり、CSSファイル内で`@theme`を使ってカスタマイズできます。`@plugin`ディレクティブでtypographyプラグインを読み込むのもv4の特徴です。

### 4. Markdownコンテンツのスタイリング

```css
/* globals.css */
@plugin "@tailwindcss/typography";
```

```html
<div class="prose prose-invert max-w-none">
  <!-- markedで変換されたHTML -->
</div>
```

`prose-invert`を使うことで、ダークテーマに適した色合いでMarkdownコンテンツが表示されます。

## 失敗した点

1. **Tailwind v3とv4の混在**: プロジェクトによってv3とv4が混在し、設定方式の違いで混乱しました。全プロジェクトをv4に統一する方針で進めています。

2. **typographyプラグインの読み込み**: v4では`@plugin`を使いますが、ドキュメントがv3の情報と混在しており、正しい設定方法を見つけるまで時間がかかりました。

3. **proseの色調整**: ダークテーマで`prose-invert`を使うと、一部の色（リンク、コードブロックなど）が読みづらくなることがありました。CSS変数で個別に上書きして対応。

## 改善した点

- 全プロジェクトのカラーパレットを統一
- `prose-invert` + `max-w-none`でMarkdownの可読性を向上
- ガラスモーフィズムカードを標準コンポーネント化

## コード例：グラスモーフィズムカード

```html
<div class="rounded-2xl border border-white/8 bg-white/3
  hover:bg-white/6 hover:border-white/15
  transition-all duration-200 p-6">
  <h3 class="text-white font-bold">カードタイトル</h3>
  <p class="text-gray-400">カードの説明文</p>
</div>
```

## まとめ

Tailwind CSS 4のCSS-firstアプローチは、設定のシンプルさと柔軟性を両立しています。ダークテーマはCSSカスタムプロパティで一元管理し、全体で一貫性を保つことが重要です。

## 注意点

- Tailwind CSS 4はv3からの破壊的変更が多いため、マイグレーションガイドを必ず確認すること
- `prose`クラスはtypographyプラグインがないと機能しません
- コントラスト比はWCAG AA基準（4.5:1以上）を確保すること

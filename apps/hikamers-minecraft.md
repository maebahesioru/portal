---
slug: "hikamers-minecraft"
name: "hikamers-minecraft"
fqdn: "https://hikamers-minecraft.hikamer.f5.si"
shortDescription: "ヒカマー界隈のMinecraftサーバー情報サイト。Java版・統合版の両方に対応。サーバー参加ガイド、建築ギャラリー、イベント記録、接続方法を詳しく解説。"
tags: [Minecraft, ゲーム, コミュニティ, サーバー]
---

# hikamers-minecraft — ヒカマーズマイクラ公式サイト

hikamers-minecraftは、ヒカマー界隈が運営するMinecraftサーバーの公式情報サイトです。サーバー参加方法から建築物ギャラリー、FAQまでを網羅しています。

## 主な機能

- **サーバー参加ガイド**: Java版・統合版それぞれの接続手順をスクリーンショット付きで解説
- **建築物ギャラリー**: サーバー内の作品をジャンル別に展示
- **13種類以上のプラグイン紹介**: 各プラグインの詳細と使い方を解説
- **FAQ（20以上のQ&A）**: よくある質問を網羅
- **Discordウィジェット**: サーバーDiscordへの参加導線
- **投票バナー**: minecraft.jp投票サイトとの連携

## 技術スタック

- Next.js 16.0.3、React 19.2、TypeScript、Tailwind CSS 4
- Minecraftテーマの濃い緑のグラデーションデザイン
- babel-plugin-react-compiler（React Compiler）
- AnimatedHero（ヒーローアニメーション）、AnimatedSection（スクロールトリガーアニメーション）
- Lucide React アイコン

## サーバースペック

- サーバーIP: `hikamerscraft.f5.si`
- Java版・統合版クロスプレイ対応
- 建築、サバイバル、PVPなど複数ワールドを運用

## 開発の裏話

AnimatedHeroとAnimatedSectionのスクロールトリガーアニメーションを自前実装しました。Intersection Observer APIとCSS keyframesを組み合わせています。
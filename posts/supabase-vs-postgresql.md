---
title: "SupabaseとPostgreSQLの使い分け"
date: "2026-04-18"
excerpt: "個人開発におけるSupabaseとセルフホストPostgreSQLの選び方。認証・リアルタイム・コスト比較、Prismaとの組み合わせ、バックアップ戦略まで。"
---

# SupabaseとPostgreSQLの使い分け

個人開発でデータベースを選ぶ際、Supabase（マネージドPostgreSQL）とセルフホストPostgreSQLのどちらを使うべきか迷うことがあります。この記事では実際の使用経験に基づいて比較します。

## 背景

私は複数のWebサービスを運営しており、データベースとしてSupabaseと自宅サーバーのPostgreSQLを併用しています。それぞれにメリット・デメリットがあり、用途によって使い分けています。

## 課題

- リアルタイム機能（投票、チャット）の実装
- 認証システムの構築
- 大量データ（30万件以上のツイート）の管理
- コスト管理（無料枠の制限）
- バックアップ・復旧の容易さ

## 実装方針

### Supabaseを使うケース

- 認証機能が必要（Supabase AuthでOAuth/メール認証が数行で実装可能）
- リアルタイム更新が必要（Supabase RealtimeでWebSocketが標準装備）
- 小〜中規模データ（無料枠500MBまで）
- 管理画面が欲しい（ダッシュボードでデータ閲覧・SQL実行が可能）

```ts
// Supabaseクライアントの初期化
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

// リアルタイム購読
supabase
  .channel("votes")
  .on("postgres_changes", { event: "INSERT", schema: "public", table: "votes" },
    (payload) => console.log("New vote:", payload.new))
  .subscribe();
```

### セルフホストPostgreSQLを使うケース

- 大量データ（数十万件以上）を扱う
- コストを最小限に抑えたい（自宅サーバーなら電気代のみ）
- プライバシーが重要なデータ（自前サーバーで完全管理）
- カスタム設定が必要（pgvector等の拡張機能）

```ts
// pgライブラリでの直接接続
import { Pool } from "pg";

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

const result = await pool.query(
  "SELECT * FROM tweets WHERE content ILIKE $1",
  [`%${keyword}%`]
);
```

### Prismaとの組み合わせ

どちらの場合も、PrismaをORMとして使うことでTypeScriptの型安全性を確保できます。

```prisma
// schema.prisma
datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

model Subscription {
  id            String   @id @default(uuid())
  userId        String
  status        String
  createdAt     DateTime @default(now())
}
```

## 失敗した点

1. **Supabase無料枠の超過**: 無料枠（500MB）を超えると自動的に停止します。使用量モニタリングを怠り、twigachaのカードデータが増えすぎて制限に達しました。

2. **自宅サーバーの可用性**: 停電やネットワーク障害でPostgreSQLが止まることがありました。UPS（無停電電源装置）の導入と定期的なバックアップで対応。

3. **Prismaのマイグレーション**: スキーマ変更時のマイグレーションでデータが消える事故がありました。本番データのバックアップを取ってからマイグレーションを実行する習慣をつけました。

## 改善した点

- 30万件以上のツイート検索 → 自宅PostgreSQL（コストゼロ、パフォーマンス良好）
- 投票・コメント機能 → Supabase（リアルタイム、認証込みで工数削減）
- 全プロジェクトでPrismaを標準ORMに採用
- バックアップスクリプトの自動化

## SupabaseとPostgreSQLの比較表

| 項目 | Supabase | セルフホストPostgreSQL |
|---|---|---|
| 初期設定 | 簡単（数分） | やや複雑（セットアップ必要） |
| 認証機能 | 標準搭載（OAuth等） | 自前実装が必要 |
| リアルタイム | 標準搭載（WebSocket） | 自前実装が必要 |
| コスト | 無料枠500MB制限 | 電気代のみ |
| バックアップ | 自動 | 自前で設定 |
| スケーラビリティ | 制限あり（無料枠） | サーバー性能次第 |

## まとめ

小〜中規模で認証・リアルタイム機能が必要なサービスにはSupabase、大量データや特殊な要件がある場合はセルフホストPostgreSQLが適しています。両方を併用するハイブリッド構成も、個人開発では十分現実的な選択肢です。

## 注意点

- Supabaseの無料枠を超えた場合の自動停止に備え、使用量アラートを設定すること
- 自宅サーバーのPostgreSQLは、UPSと定期的なpg_dumpバックアップが必須
- データベースの接続文字列（パスワード含む）は絶対にGitにコミットしないこと

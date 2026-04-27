export interface BlogPost { slug: string; title: string; date: string; excerpt: string; content: string; }

const posts: BlogPost[] = [
  {
    "slug": "history-of-hikamer-community",
    "title": "ヒカマー界隈の歴史と文化を振り返る",
    "date": "2024-01-15",
    "excerpt": "ヒカマー界隈が誕生してから現在までの歴史を、主要な出来事や文化の変遷を交えながら解説します。",
    "content": "# ヒカマー界隈の歴史と文化を振り返る\n\nヒカマー界隈が誕生してから数年が経過しました。この記事では、界隈の起源から現在に至るまでの歴史を振り返り、主要な出来事や文化の変遷を整理します。\n\n## 界隈の起源（2019年頃）\n\nヒカマーの起源は**2019年頃**に遡ります。当時、ヒカキンのファンコミュニティと特定のネットミーム文化が交差する場所で、新しい形の創作活動が始まりました。特に「hikakin_mania」という投稿者の活動が起点とされており、**2019年10月26日**の投稿は現在でも「ヒカマー記念日」として祝われています。\n\n初期の界隈は小規模なグループチャットや掲示板を中心に形成されており、参加者は数十人程度でした。当時のコンテンツは画像ミームや短い動画が中心で、現在のような多様なWebサービスは存在しませんでした。\n\n## サービス爆発（2021年〜2022年）\n\n2021年から2022年にかけて、有志の開発者たちによって様々なWebサービスが立ち上がりました。この「サービス爆発」の時期に生まれた主なサービスには以下があります。\n\n- **hikamerslibrary**（ツイート検索エンジン）: 30万件以上のツイートデータベースをPythonバッチでPostgreSQLに取り込み、Next.jsで高速検索UIを提供\n- **hikamerautowiki**（Wiki自動編集）: AIがMediaWikiを自動編集。Yahooリアルタイム検索と連携し最新情報を反映\n- **hikafuwa-box**（AIネタツイート生成）: Google Gemini AIを使った画像解析とジョーク生成\n- **twigacha**（ガチャTCG）: TwitterやBlueskyなどのアカウントを8段階レアリティのTCGカードに変換\n\nこれらのサービスはNext.js + React + TypeScript + Tailwind CSSのモダンスタックで構築され、Coolify上の自宅サーバーで運用されています。\n\n## 現在の界隈（2023年〜）\n\n2023年以降、界隈の文化はさらに多様化しました。AIを活用したサービスが増え、Stripe課金やSupabaseバックエンドを採用する本格的なサービスも登場しています。\n\n技術的には、全プロジェクトがpnpmをパッケージマネージャに採用し、React Compiler（babel-plugin-react-compiler）の導入も進んでいます。Yahooリアルタイム検索APIは5つのプロジェクトで使われており、界隈の情報インフラを支える重要な外部APIになっています。\n\n---\n\n*今後も、この界隈がどのように変化していくのか、参加者一人ひとりの活動がその方向性を決定づけることでしょう。*"
  },
  {
    "slug": "building-portal-with-nextjs",
    "title": "Next.jsでポータルサイトを開発する方法",
    "date": "2024-03-20",
    "excerpt": "本サイトの技術的な裏側を解説。Next.js App Router、Tailwind CSS、Coolify、Markdownを使った開発フローを紹介します。",
    "content": "# Next.jsでポータルサイトを開発する方法\n\n本サイトは**Next.js 16.2.3**を中心としたモダンスタックで構築されています。この記事では実際のコードに基づいた技術選定と開発フローを解説します。\n\n## 技術スタック\n\n- **フロントエンド**: Next.js 16.2.3 (App Router), React 19.2, TypeScript\n- **スタイリング**: Tailwind CSS 4 + @tailwindcss/typography\n- **Markdown**: marked 18.0.2（サーバーコンポーネントでレンダリング）\n- **画像処理**: Sharp 0.34.5（/api/imgエンドポイント）\n- **メタデータ取得**: /api/meta（OGP情報をHTMLからパース）\n- **インフラ**: Coolify（自宅サーバーDocker管理）\n- **パッケージ管理**: pnpm\n\n## App Routerの活用\n\nすべてのページがApp Routerで構築されています。\n\n- **動的ルーティング**: app/apps/[slug]/page.tsx と app/blog/[slug]/page.tsx で、generateStaticParamsによる静的生成（SSG）\n- **Server Components**: Markdownレンダリング（marked）はサーバーサイドで実行\n- **Client Components**: AppCard（OGPメタデータ動的取得）、AppGrid（検索フィルタリング）\n- **API Routes**: /api/meta（OGP情報取得）、/api/img（画像最適化プロキシ）\n\n## MarkdownとTypography\n\nブログ記事とアプリ詳細ページは**marked**でMarkdown→HTML変換し、**@tailwindcss/typography**のproseクラスでスタイリングしています。見出し、リスト、強調、テーブル、水平線などが自動的に適切なスタイルで表示されます。\n\n## Coolifyとの統合\n\nCoolify APIから動的にアプリケーション一覧を取得し、ポータルに表示しています。ISRにより60秒間隔で更新されます。\n\n## パフォーマンス最適化\n\n- **ISR**: 60秒間隔のIncremental Static Regeneration\n- **SSG**: 全ブログ記事・アプリ詳細をビルド時に静的生成（36ページ）\n- **画像最適化**: SharpでWebP変換とリサイズ\n- **CSP**: Content Security PolicyでAdSense互換性を維持"
  },
  {
    "slug": "web-tool-development-tips",
    "title": "個人開発者がWebツールを作る際のノウハウ",
    "date": "2024-05-10",
    "excerpt": "12個のWebサービスを開発してきた経験から、実際のコードに基づいた企画・設計・開発・運用の実践的なアドバイス。",
    "content": "# 個人開発者がWebツールを作る際のノウハウ\n\nこれまでに**12個以上のWebサービス**を開発してきました。この記事では実際のコードベースに基づいた実践的な知見を共有します。\n\n## 1. 企画：課題感を掘り下げる\n\nツール開発のきっかけは常に「**課題感**」です。例えば：\n\n- **hikamerslibrary**: 「過去のツイートをもっと簡単に検索したい」→ 30万件のツイートをPostgreSQLにインポートし、Pythonバッチで定期更新\n- **hikafuwa-box**: 「画像に合った面白いツイートを自動生成したい」→ Google Gemini APIで画像解析+ジョーク生成\n- **nareaitter**: 「Twitterの人間関係を可視化したい」→ フォースディレクテッドグラフでCanvas描画\n\n## 2. 設計：メンテナンスできるスタックを選ぶ\n\n全プロジェクトで共通の技術スタックを採用することで、新しいサービス立ち上げの時間を大幅に短縮しています。\n\n**基本スタック**:\n\n- Next.js + React + TypeScript + Tailwind CSS（全12プロジェクト）\n- pnpm（11/12で採用）\n- babel-plugin-react-compiler（7/12で採用）\n\n**バックエンドが必要な場合**:\n\n- Supabase（twigacha, sukikirai, hikamerslibrary）\n- PostgreSQL + Prisma（narikitter）\n- PostgreSQL + pg（hikamerautowiki）\n\n**外部API**: Yahooリアルタイム検索（5プロジェクトで使用）、Google Gemini AI、Stripe\n\n## 3. 開発：段階的に複雑さを追加する\n\nhikamerslibraryのケーススタディ：\n\n1. **MVP**: 基本的なキーワード検索のみ\n2. **v2**: 音声検索とAI検索を追加\n3. **v3**: AMP対応、管理者認証、JSON-LD構造化データ\n4. **v4**: Service Worker（PWA）、ダウンロード機能\n\n最初から全部作ろうとせず、使ってもらいながら改善するのが鉄則です。\n\n## 4. 運用：監視と信頼構築\n\n- **死活監視**: UptimeRobotで全サービスを監視\n- **データバックアップ**: PostgreSQLの定期バックアップ\n- **依存関係更新**: Dependabotで自動PR（hikafuwa-boxの例）\n- **OGP対応**: metadataBase設定とopengraph-image生成を全プロジェクトで統一\n\n## まとめ\n\n個人開発で大切なのは「**継続すること**」です。20以上のWebサービスを作り、失敗から学び、技術スタックを磨き続けることが長期的な成功につながります。"
  },
  {
    "slug": "community-management-mindset",
    "title": "オンラインコミュニティを運営する心得",
    "date": "2024-07-05",
    "excerpt": "ヒカマー界隈の12以上のサービスを運営する中で学んだ、コミュニティマネジメントと技術的プラクティス。",
    "content": "# オンラインコミュニティを運営する心得\n\nオンラインコミュニティの運営は技術だけでなく、人間性や判断力が問われます。この記事では実際のサービス運営から得た具体的な知見を共有します。\n\n## 1. ルールはコードに落とし込む\n\n単なる「ルール」ではなく、**技術的な仕組み**で秩序を維持することが重要です。\n\n- **sukikirai**: コメントの非表示機能と管理者パネルでモデレーション\n- **narikitter**: 月間使用量上限をDBで追跡（ChatMonthlyUsageテーブル）、Stripe課金でプレミアム制御\n- **hikafuwa-box**: reCAPTCHA + レート制限でAPI悪用を防止\n- **hikamerslibrary**: ADMIN_KEY認証で管理機能を保護\n\n## 2. クリエイターを支援する仕組み\n\nコミュニティの活力はクリエイターの活動に依存しています。\n\n- **illustsagasitter**: OFUSE投げ銭連携（広告なし、完全無料）\n- **twigacha**: カード署名（HMAC）で改ざん防止、ユーザーのコレクション価値を保護\n- **nareaitter**: サークルデータをCSVエクスポート・画像保存可能\n\n## 3. 透明性とSEO\n\n全サービスで以下の要素を統一しています。\n\n- OGP完全対応: metadataBase + openGraph.images + twitter.images\n- 構造化データ: JSON-LD (WebSite, Organization, SoftwareApplication)\n- サイトマップ: sitemap.tsで全ページを出力\n- robots.txt: インデックス許可\n\n## 4. インフラの自己完結\n\n- **Coolify**: 自宅サーバー上のDockerコンテナを一元管理\n- **OpenAI互換API**: 自宅サーバーでホスト\n- **PostgreSQL**: 自宅サーバーでデータを保持\n- **Cloudflare Workers**: nareaitterのみエッジデプロイ\n\n## 5. 燃え尽きを防ぐ\n\n- 全プロジェクトの技術スタックを統一し、コンテキストスイッチコストを最小化\n- Dependabotで依存関係更新を自動化\n- Coolifyでデプロイ自動化\n\n---\n\n*完璧なコミュニティは存在しませんが、技術と運用の両面から少しずつ改善を重ねることが信頼の鍵です。*"
  },
  {
    "slug": "future-of-hikamer-services",
    "title": "hikamer portal の今後の展望",
    "date": "2024-09-12",
    "excerpt": "現在運営中のサービスの今後のロードマップや、実際のコードベースに基づいた技術的展望を紹介します。",
    "content": "# hikamer portal の今後の展望\n\n12個以上のWebサービスを運営する中で、現在進行中の改善プロジェクトや技術的な展望をお伝えします。\n\n## 技術スタックの統一\n\n現在、プロジェクトによってNext.jsのバージョンが14.2から16.2.3まで分散しています。これを**Next.js 16.xに統一**し、React Compiler（babel-plugin-react-compiler）を全プロジェクトに導入する計画です。\n\nまた、Tailwind CSSもv3とv4が混在しているため、**全プロジェクトをTailwind CSS 4 + @tailwindcss/typographyに統一**し、proseクラスによるMarkdownスタイリングを標準化します。\n\n## インフラ強化\n\n<strong>界隈マップ</strong>の制作を計画しています。これはヒカマー界隈の人間関係やサービス間の連携を可視化したインタラクティブマップです。nareaitterのフォースディレクテッドグラフの技術を応用し、SNSのフォロー関係やサービス間のリンク関係を分析します。\n\n現在Coolify上で各サービスをDocker管理していますが、**Kubernetesへの移行**を中期的な目標としています。hikamerslibraryの自宅サーバー（PostgreSQL + OpenAI互換API）と合わせて、より堅牢なインフラを構築します。\n\n## オープンソース化\n\nいくつかのプロジェクトはすでにGitHubで公開しています。今後はより多くのコードをオープンソース化し、以下のような共通ライブラリをnpmパッケージとして切り出す予定です。\n\n- **Yahooリアルタイム検索ラッパー**: 5プロジェクトで使われている共通API呼び出しをライブラリ化\n- **OGP画像生成ユーティリティ**: opengraph-image.tsxの共通化\n- **Coolify APIクライアント**: ポータルサイトのアプリ一覧取得ロジックを汎用化\n\n## コミュニティイベントの再開\n\n2024年の年末から2025年にかけて、大規模なオンラインイベントの開催を計画しています。twigachaのガチャシステムやsukikiraiの投票機能を活用した参加型イベントを検討中です。\n\n---\n\n*これからも、ヒカマー界隈の皆様にとって価値のあるサービスを提供し続けるために、尽力してまいります。*"
  }
];

export function getAllPosts(): BlogPost[] { return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()); }
export function getPostBySlug(slug: string): BlogPost | undefined { return posts.find(p => p.slug === slug); }
export default posts;

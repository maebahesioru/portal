export interface AppMeta { slug: string; name: string; fqdn: string; shortDescription: string; longDescription: string; tags: string[]; launchedAt?: string; }

const apps: AppMeta[] = [
  {
    "slug": "hikafuwa-box",
    "name": "hikafuwa-box",
    "fqdn": "https://hikafuwa-box.hikamer.f5.si",
    "shortDescription": "AIが画像から面白いツイートを生成するサービス。Google Gemini AIを利用し、画像内容を解析してジョークツイートを自動生成。10段階テンションスライダー搭載。",
    "longDescription": "# hikafuwa-box — AIで画像からネタツイートを生成\n\nhikafuwa-boxは、アップロードした画像をGoogle Gemini AIが解析し、面白いツイートを自動生成するサービスです。界隈で画像ネタを作るための定番ツールです。\n\n## 主な機能\n\n- **画像アップロードとAI解析**: ドラッグ&ドロップで画像をアップロードし、Gemini AIが内容を解析\n- **テンションスライダー**: 10段階設定（「超和平的」から「カオス/狂気」まで）\n- **ストリーミング応答**: AIの生成結果をリアルタイム表示（SSE）\n- **マルチ共有**: X、Bluesky、LINE、クリップボードコピー\n- **reCAPTCHA認証**: 悪用防止のレート制限\n\n## 技術スタック\n\n- Next.js 16.0.3、React 19.2、TypeScript、Tailwind CSS 4\n- Google Generative AI (@google/generative-ai 0.24.1)\n- グラスモーフィズムカード、紫/ピンクのグラデーションテーマ\n- Nixpacks (Railway) デプロイ、PWA対応\n- PapaParse（データ処理）",
    "tags": [
      "AI",
      "画像解析",
      "ツイート",
      "Gemini"
    ],
    "launchedAt": "2022"
  },
  {
    "slug": "hikamerautowiki",
    "name": "hikamerautowiki",
    "fqdn": "https://hikamerautowiki.hikamer.f5.si",
    "shortDescription": "AIがMediaWikiの編集を自動化するアシスタント。指示を入力するだけでWikiページの作成・編集・ファクトチェックをAIが実行。Yahooリアルタイム検索と連携。",
    "longDescription": "# hikamerautowiki — AIによるWiki自動編集アシスタント\n\nhikamerautowikiは、MediaWikiベースのWikiに対してAIが編集作業を自動化するツールです。ユーザーが編集指示を入力するだけでWikitextを生成し、実際にWikiページを作成・編集します。\n\n## 4つのツールモード\n\n- **ページ編集**: 既存Wikiページの修正案をAIが生成\n- **新規ページ作成**: 指示に基づきAIがWikitextを生成\n- **ファクトチェック**: Yahooリアルタイム検索のツイートデータと照合し、既存ページの正確性を検証（目次ナビゲーション付き）\n- **リダイレクト作成**: 別名・略称のリダイレクトページを自動生成\n\n## 技術スタック\n\n- Next.js 16.2.1、React 19.2、TypeScript、Tailwind CSS 4\n- PostgreSQL (pg 8.20.0) バックエンド\n- ストリーミングAI応答（SSE）、推論過程の可視化\n- Yahooリアルタイム検索API + MediaWiki API\n- Zod 4.3.6（バリデーション）、Sharp 0.34.5（画像アップロード）\n- Vitest 4.1.2（ユニットテスト）",
    "tags": [
      "Wiki",
      "AI",
      "自動化",
      "NLP"
    ],
    "launchedAt": "2023"
  },
  {
    "slug": "hikamerprefecture",
    "name": "hikamerprefecture",
    "fqdn": "https://hikamerprefecture.hikamer.f5.si",
    "shortDescription": "ヒカマー界隈のメンバーを都道府県に見立てて分類・可視化するユニークなWebサービス。各メンバーの特性に応じて県名を割り当て、日本地図上に配置。県民診断機能付き。",
    "longDescription": "# hikamerprefecture — ヒカマー県民マップ\n\nhikamerprefectureは、ヒカマー界隈のメンバーを日本の都道府県に見立てて分類・可視化するサービスです。各メンバーの特性や活動スタイルに応じて「県名」を割り当て、インタラクティブな日本地図上に配置します。\n\n## 主な機能\n\n- **インタラクティブ日本地図**: SVGで描画された日本地図上に各「県」を配置。クリックで県民リストと特徴説明を表示\n- **県民診断**: 自分がどの県に属するか診断できるクイズ機能（診断結果をSNSでシェア可能）\n- **県章・県庁所在地**: 各県に独自の県章と県庁所在地を設定し世界観を演出\n- **半自動データ更新**: 新メンバー追加を管理画面から簡単に行える設計\n\n## 技術スタック\n\n- Vite（フロントエンド）、SVG地図描画、CSSアニメーション\n- レスポンシブデザイン、OGP完全対応（最近追加）\n- 簡単な管理画面でデータ更新可能\n\n## 界隈でのエピソード\n\nこのサービスがきっかけで「県民交流会」というオンラインイベントが開催され、同じ県に分類されたメンバー同士で親睦を深める機会となりました。珍しい分類の「県」ほど話題になり、独自コミュニティが形成される現象も。",
    "tags": [
      "エンタメ",
      "可視化",
      "コミュニティ",
      "地図"
    ],
    "launchedAt": "2022"
  },
  {
    "slug": "hikamers-minecraft",
    "name": "hikamers-minecraft",
    "fqdn": "https://hikamers-minecraft.hikamer.f5.si",
    "shortDescription": "ヒカマー界隈のMinecraftサーバー情報サイト。Java版・統合版の両方に対応。サーバー参加ガイド、建築ギャラリー、イベント記録、接続方法を詳しく解説。",
    "longDescription": "# hikamers-minecraft — ヒカマーズマイクラ公式サイト\n\nhikamers-minecraftは、ヒカマー界隈が運営するMinecraftサーバーの公式情報サイトです。サーバー参加方法から建築物ギャラリー、FAQまでを網羅しています。\n\n## 主な機能\n\n- **サーバー参加ガイド**: Java版・統合版それぞれの接続手順をスクリーンショット付きで解説\n- **建築物ギャラリー**: サーバー内の作品をジャンル別に展示\n- **13種類以上のプラグイン紹介**: 各プラグインの詳細と使い方を解説\n- **FAQ（20以上のQ&A）**: よくある質問を網羅\n- **Discordウィジェット**: サーバーDiscordへの参加導線\n- **投票バナー**: minecraft.jp投票サイトとの連携\n\n## 技術スタック\n\n- Next.js 16.0.3、React 19.2、TypeScript、Tailwind CSS 4\n- Minecraftテーマの濃い緑のグラデーションデザイン\n- babel-plugin-react-compiler（React Compiler）\n- AnimatedHero（ヒーローアニメーション）、AnimatedSection（スクロールトリガーアニメーション）\n- Lucide React アイコン\n\n## サーバースペック\n\n- サーバーIP: `hikamerscraft.f5.si`\n- Java版・統合版クロスプレイ対応\n- 建築、サバイバル、PVPなど複数ワールドを運用",
    "tags": [
      "Minecraft",
      "ゲーム",
      "コミュニティ",
      "サーバー"
    ],
    "launchedAt": "2021"
  },
  {
    "slug": "hikamersakinator",
    "name": "hikamersakinator",
    "fqdn": "https://hikamersakinator.hikamer.f5.si",
    "shortDescription": "ヒカマー版アキネーター。界隈のキャラクターや人物を質問に答えるだけで当てるゲーム。100体以上のキャラクターをデータベース化。決定木アルゴリズムで高速推論。",
    "longDescription": "# hikamersakinator — ヒカマー版アキネーター\n\nhikamersakinatorは、有名な推論ゲーム「アキネーター」のヒカマー界隈版です。ユーザーが思い浮かべた界隈のキャラクターを、yes/no質問で絞り込み、最終的に正解を導き出します。\n\n## 主な機能\n\n- **100体以上のキャラクターデータベース**: 外見的特徴、発言傾向、人間関係、代表エピソードなどをタグ付け\n- **決定木アルゴリズム（ID3）**: 情報利得を計算して最適な質問を選択、通常15〜25問で正解に到達\n- **匿名学習**: ユーザーの回答パターンを収集し、質問選択精度を継続的に改善\n- **アニメーション演出**: Framer Motionでキャラクター出現時の演出を実装\n\n## 技術スタック\n\n- Vite（フロントエンド）、React、Framer Motion\n- ID3アルゴリズム（情報利得に基づく決定木）\n- 界隈独自のキャラクターデータベース（有志との共同構築）\n- OGP完全対応（最近追加）\n\n## 界隈でのエピソード\n\n難易度の高いマイナーキャラクターを当てさせる「裏メニュー」的な遊びが生まれ、SNSで話題になり一時的にアクセスが急増しました。",
    "tags": [
      "ゲーム",
      "診断",
      "クイズ",
      "エンタメ"
    ],
    "launchedAt": "2022"
  },
  {
    "slug": "hikamerslibrary",
    "name": "hikamerslibrary",
    "fqdn": "https://hikamerslibrary.hikamer.f5.si",
    "shortDescription": "30万件以上のツイートを検索できる高速ツイート検索エンジン。音声検索、AI検索、検索結果のダウンロードに対応。Supabaseでデータ管理。",
    "longDescription": "# hikamerslibrary — ツイート検索エンジン HikamersSearch\n\nhikamerslibrary（HikamersSearch）は、30万件以上のツイートを高速検索できるツイート検索エンジンです。単なるキーワード検索に加え、音声入力やAIによる自然言語検索にも対応しています。\n\n## 主な機能\n\n- **高速ツイート検索**: 30万件以上のツイートデータベースを全文検索\n- **AI検索**: 自然言語での質問に対してAIが関連ツイートを抽出（OpenAI互換API使用）\n- **音声検索**: マイク入力による音声検索に対応\n- **検索結果ダウンロード**: TSVフォーマットで検索結果をエクスポート\n- **AMP検索対応**: モバイル向け高速検索ページ\n- **管理者認証**: Adminパネルでのデータ管理機能\n\n## 技術スタック\n\n- Next.js 16、React 19、TypeScript、Tailwind CSS\n- Supabase（データベース・認証）\n- OpenAI互換API（自宅サーバー: 120.75.187.71:2048/v1）\n- reCAPTCHA認証、Service Worker（PWA）\n- PostgreSQL（自宅サーバー）、Pythonバッチ（ツイートインポート）\n- structured data JSON-LD (WebSite, Organization, SoftwareApplication, Dataset等)\n\n## インフラ\n\n- 自宅サーバーでPostgreSQL + OpenAI互換APIを運用\n- 30万件以上のツイートデータをPythonバッチで定期インポート（`import_tweets.py`）\n- Coolifyでデプロイ管理",
    "tags": [
      "検索エンジン",
      "ツイート",
      "AI",
      "Supabase"
    ],
    "launchedAt": "2022"
  },
  {
    "slug": "hikamersnews",
    "name": "hikamersnews",
    "fqdn": "https://hikamersnews.hikamer.f5.si",
    "shortDescription": "ヒカマー界隈の最新ニュース・話題をまとめたニュースサイト。界隈で起きた出来事やトレンドをいち早くキャッチアップできる情報源。",
    "longDescription": "# hikamersnews — ヒカマー新聞\n\nhikamersnewsは、ヒカマー界隈で日々起きる出来事やトレンドを集約・配信するニュースサイトです。SNSのタイムラインを追うのが大変という声に応え、編集された情報を定期的に提供しています。\n\n## 主な機能\n\n- **速報・特集・インタビュー・レビュー・コラム**の5カテゴリー\n- **1日2回更新**（朝9時・夜9時）\n- **ISR（Incremental Static Regeneration）** による高速表示と頻繁な更新の両立\n- **プッシュ通知**: 重要な速報をブラウザ通知で配信\n- **ユーザー投票企画**: 「今年の界隈十大ニュース」など\n\n## 技術スタック\n\n- Vite（フロントエンド）\n- 自前CMS管理画面（協力者が同時編集可能）\n- OGP完全対応（最近追加）\n- プッシュ通知、ブラウザ通知",
    "tags": [
      "ニュース",
      "メディア",
      "情報",
      "コミュニティ"
    ],
    "launchedAt": "2022"
  },
  {
    "slug": "hikamerssukikirai",
    "name": "hikamerssukikirai",
    "fqdn": "https://hikamer-suki-kira.hikamer.f5.si",
    "shortDescription": "ヒカマー界隈の好き嫌い投票・集計サービス。コミュニティメンバーへの投票、コメント、ランキング表示。Supabaseバックエンドでリアルタイム集計。",
    "longDescription": "# hikamerssukikirai — ヒカマーズ好き嫌い.com\n\nhikamerssukikiraiは、ヒカマー界隈の人物に対して「好き」「嫌い」を投票し、その結果を可視化する投票サービスです。コメント機能やランキング表示も備えています。\n\n## 主な機能\n\n- **好き/嫌い投票**: コミュニティの人物に対して投票（Supabaseバックエンド）\n- **コメントシステム**: 入れ子返信対応（parent_comment_id）、非表示コメント、コメントリアクション\n- **ランキング表示**: 人気順、不人気順、トレンド順の3種類\n- **投票機能**: ユーザー作成の投票を作成・回答可能\n- **検索**: ページネーション付き人物検索\n- **管理者パネル**: 同意管理、分析、コンテンツモデレーション\n- **ISR（10秒間隔）**: ほぼリアルタイムのデータ表示\n\n## 技術スタック\n\n- Next.js 15.5.6、React 19.1、TypeScript、Tailwind CSS 4\n- Supabase (PostgreSQL) バックエンド\n- date-fns + date-fns-tz（日付処理）\n- js-cookie、Lucide React\n- DNS prefetch/preconnectでSupabase通信を最適化",
    "tags": [
      "投票",
      "ランキング",
      "エンタメ",
      "Supabase"
    ],
    "launchedAt": "2022"
  },
  {
    "slug": "illustsagasitter",
    "name": "illustsagasitter",
    "fqdn": "https://illustsagasitter.hikamer.f5.si",
    "shortDescription": "Twitterイラスト検索エンジン。キーワードからTwitter上のイラストを検索。ギャラリー表示、フルスクリーンビューア、イラストレーターフィルター、R18/AI画像フィルター対応。",
    "longDescription": "# illustsagasitter — Twitterイラスト検索\n\nillustsagasitterは、Twitter上のイラストをキーワード検索できる専用検索エンジンです。Yahooリアルタイム検索APIをデータソースとし、見つけた画像をギャラリー表示やフルスクリーンで閲覧できます。\n\n## 主な機能\n\n- **リアルタイム検索**: Yahooリアルタイム検索API + fxtwitter/vxtwitterAPIでツイート情報を補完\n- **SSEストリーミング検索結果**: サーバー送信イベントで検索結果を逐次表示\n- **フルスクリーンビューア**: ピンチズーム、マウスホイールズーム、ドラッグ操作、スライドナビゲーション\n- **動画再生**: HLS動画再生対応\n- **フィルター**: イラストレーター検出（isIllustrator関数）、R18フィルター、AI画像フィルター、メディアタイプフィルター\n- **ソート**: 人気順/最新順/古い順\n- **パニックボタン**: Escキーで画面を真っ白にする緊急機能\n- **ダウンロード**: 画像のダウンロード（プロキシ経由）\n\n## 技術スタック\n\n- Next.js 16.1.6、React 19.2、TypeScript、Tailwind CSS 4\n- hls.js 1.6.15（動画再生）\n- Yahooリアルタイム検索API → fxtwitter API → vxtwitter API フォールバック\n- babel-plugin-react-compiler\n- OFUSE投げ銭連携（広告なし、完全無料）",
    "tags": [
      "イラスト",
      "検索",
      "Twitter",
      "SSE"
    ],
    "launchedAt": "2022"
  },
  {
    "slug": "maebahesioru-portfolio",
    "name": "maebahesioru-portfolio",
    "fqdn": "https://maebahesioru-portfolio.hikamer.f5.si",
    "shortDescription": "hikamer（maebahesioru）の個人ポートフォリオ。20以上のSNSリンクと開発プロジェクトを集約したリンクインバイオ。アニメーションとカスタムSVGアイコン。",
    "longDescription": "# maebahesioru-portfolio — 開発者ポートフォリオ\n\nmaebahesioru-portfolioは、運営者hikamerの個人ポートフォリオサイトです。20以上のSNSリンクと全開発プロジェクトを集約したリンクインバイオとして機能しています。\n\n## 主な機能\n\n- **SNSリンク集**: X、Bluesky、Discord、Twitch、YouTube、GitHub、Pixiv、Steam、Xbox、Threads、SoundCloudなど20以上のプラットフォームに対応（カスタムSVGアイコン）\n- **プロジェクト一覧**: 運営中の全サービスへのリンクを集約\n- **アニメーション演出**: fadeIn、fadeInUp、slideDown、bounceIn、glow-pulse、float、card-shineなど多彩なCSSアニメーション\n- **浮遊パーティクル**: 十字シンボルのアニメーション背景\n- **オーブグラデーション**: グロー効果のあるグラデーション背景\n- **スクロールスナップ**: アニメーションインジケーター付き\n\n## 技術スタック\n\n- Next.js 16.1.1、React 19.2、TypeScript、Tailwind CSS 4\n- Noto Sans JPフォント\n- カスタムCSSアニメーション（キーフレーム）\n- babel-plugin-react-compiler\n- 赤 (#c41e3a) アクセントカラーのダークテーマ",
    "tags": [
      "ポートフォリオ",
      "リンク集",
      "デザイン",
      "アニメーション"
    ],
    "launchedAt": "2021"
  },
  {
    "slug": "mani",
    "name": "mani",
    "fqdn": "https://mani.hikamer.f5.si",
    "shortDescription": "ヒカマニ（ヒカキンファン）向け翻訳・コンテンツプラットフォーム。多言語翻訳と界隈コンテンツの集約を提供。",
    "longDescription": "# mani — ヒカマニ翻訳・コンテンツプラットフォーム\n\nmaniは、ヒカキンファンコミュニティ（ヒカマニ）向けの翻訳・コンテンツ集約プラットフォームです。多言語翻訳機能を備え、界隈のコンテンツを整理して提供しています。\n\n## 主な機能\n\n- **多言語翻訳**: 日本語コンテンツの多言語対応\n- **コンテンツ集約**: 界隈の関連情報・コンテンツを一箇所に集約\n- **ファンコミュニティハブ**: ヒカマニ文化を楽しむためのプラットフォーム\n\n## 技術スタック\n\n- Next.js 16（App Router）、React、TypeScript、Tailwind CSS\n- OpenGraph画像生成（opengraph-image）\n- JSON-LD構造化データ\n- Coolifyデプロイ管理",
    "tags": [
      "翻訳",
      "ファン",
      "コンテンツ",
      "コミュニティ"
    ],
    "launchedAt": "2021"
  },
  {
    "slug": "nareaitter",
    "name": "nareaitter",
    "fqdn": "https://nareaitter.hikamer.f5.si",
    "shortDescription": "Twitterユーザーの交流関係を可視化するグラフサービス。ハンドルネームを入力するとフォースディレクテッドグラフでメンション関係を表示。家系図ビューやCSVエクスポート対応。",
    "longDescription": "# nareaitter — Twitter交流関係可視化\n\nnareaitterは、Twitterユーザーのメンション関係をフォースディレクテッドサークルグラフで可視化するツールです。Yahooリアルタイム検索APIを使ってメンションを収集し、Canvas上にインタラクティブなグラフを描画します。\n\n## 主な機能\n\n- **フォースディレクテッドグラフ**: Canvasベースの力学モデルでユーザー間のメンション関係を可視化（InteractionCircle）\n- **家系図ビュー**: FamilyTreeCanvasでツリー形式の関係表示\n- **CSVエクスポート**: サークルデータをCSVでダウンロード\n- **画像保存**: html-to-imageでグラフを画像として保存\n- **ダーク/ライトテーマ**: next-themesで切り替え\n- **日英i18n**: LocaleProviderで多言語対応\n- **投げ銭機能**: OFUSEポップアップ連携\n\n## 技術スタック\n\n- Next.js 16.2.2、React 19.2、TypeScript、Tailwind CSS 4\n- OpenNext + Cloudflare Workers デプロイ\n- Geist Mono + Noto Sans JP フォント\n- Yahooリアルタイム検索API（/api/yahoo-mentions）\n- Yahooプロフィール画像プロキシ（/api/image-proxy）\n- html-to-image、next-themes、wrangler",
    "tags": [
      "SNS",
      "可視化",
      "Twitter",
      "Cloudflare"
    ],
    "launchedAt": "2022"
  },
  {
    "slug": "narikitter",
    "name": "narikitter",
    "fqdn": "https://narikitter.hikamer.f5.si",
    "shortDescription": "AIがTwitterユーザーになりきって会話できるチャットサービス。Yahooリアルタイム検索で本人のツイートを分析し口調を再現。Google OAuthログイン、Stripe課金対応。",
    "longDescription": "# narikitter — AIなりきりチャット\n\nnarikitterは、任意のTwitterユーザーになりきったAIと会話できるチャットサービスです。Yahooリアルタイム検索APIで本人のツイートを分析し、口調や話し方を再現します。\n\n## 主な機能\n\n- **AIなりきりチャット**: Twitterユーザーの公開ツイートからAIが口調を学習し、その人物として会話\n- **バトルモード**: 2人のAIペルソナが会話するバトルモード\n- **グループチャット**: 複数のAIペルソナが参加するグループ会話\n- **Google OAuth認証**: NextAuth.js v5 betaでログイン\n- **Stripeサブスクリプション**: 月額課金でプレミアム機能（使用量制限あり）\n- **会話共有**: 短縮URL共有、スナップショット画像共有、会話パケット共有\n- **PWA対応**: @ducanh2912/next-pwaでオフラインキャッシュ\n- **動的OGP画像**: ユーザーごとのOGP画像を動的生成（/api/og）\n- **Markdownレンダリング**: react-markdown + remark-gfm + remark-breaksでチャット表示\n\n## 技術スタック\n\n- Next.js 16.1.6、React 19、TypeScript、Tailwind CSS 3.4\n- Prisma + PostgreSQL（サブスクリプション管理、月間使用量トラッキング）\n- NextAuth.js v5 beta（Google OAuth）\n- Stripe 20.4.1（課金）\n- react-markdown 9.0.1、Shinobi-s-tag（広告配信）\n\n## DBスキーマ\n\nSubscription（Stripe顧客/サブスクリプション管理）、ChatMonthlyUsage（無料枠追跡）",
    "tags": [
      "AI",
      "チャット",
      "SNS",
      "Stripe"
    ],
    "launchedAt": "2022"
  },
  {
    "slug": "retweet-clicker",
    "name": "retweet-clicker",
    "fqdn": "https://retweet-clicker.hikamer.f5.si",
    "shortDescription": "リツイートを題材にした放置系クリッカーゲーム。クリックでRTを稼ぎ、アップグレード購入、実績解除。タイピングミニゲームやコンボシステム搭載。",
    "longDescription": "# retweet-clicker — RTクリッカーゲーム\n\nretweet-clickerは、リツイートをテーマにした放置系クリッカーゲームです。クリックでRT数を増やし、アップグレードを購入しながらスコアを伸ばしていきます。\n\n## ゲームシステム\n\n- **基本メカニクス**: クリックパワー、自動RT、コンボ倍率、クリティカル、ジャックポット\n- **ショップ**: 認証バッジ、プレミアムバッジ、ガチャ運、フレイムガード、タイム延長などのアップグレード\n- **タイピングミニゲーム**: 日本のトレンドワードを入力してリプライを稼ぐ\n- **名言ミニゲーム**: 名言ワードを入力してボーナスRT\n- **実績システム**: 複数段階のアンロック実績\n- **セーブ/ロード**: localStorage永続化、インポート/エクスポート対応\n- **テーマシステム**: カスタムテーマ切り替え\n- **浮遊テキストエフェクト**: +RT、クリティカル、ジャックポットの視覚演出\n\n## 技術スタック\n\n- Next.js 16.1.1、React 19.2、TypeScript、Tailwind CSS 4\n- babel-plugin-react-compiler\n- Geist + Geist Mono フォント\n- 全ゲームロジックをuseGameStateフック（542行）に集約\n- タブナビゲーション（HomePage, ShopPage, AchievementsPage, SettingsPage）",
    "tags": [
      "ゲーム",
      "クリッカー",
      "エンタメ",
      "放置系"
    ],
    "launchedAt": "2022"
  },
  {
    "slug": "saenskinmaker",
    "name": "saenskinmaker",
    "fqdn": "https://saenskinmaker.hikamer.f5.si",
    "shortDescription": "オリジナルスキン作成・カスタマイズツール。ブラウザ上で直感的な操作でスキンをデザインし、PNGダウンロード可能。MinecraftやVRChatで使用可能。",
    "longDescription": "# saenskinmaker — サエンスキンメーカー\n\nsaenskinmakerは、ブラウザ上でオリジナルのキャラクタースキンを作成できるデザインツールです。レイヤー制エディタで直感的にデザインし、PNG形式でダウンロードできます。\n\n## 主な機能\n\n- **レイヤー制エディタ**: 髪型、服装、アクセサリー、表情パーツをドラッグ&ドロップで組み合わせ\n- **ベクター管理**: 拡大縮小しても劣化しないベクター形式\n- **カラーパレット**: 既存パーツの色調を自由に変更\n- **Minecraftスキン自動変換**: 64x64ピクセルのスキン形式に自動変換（前面/背面プレビュー付き）\n- **PNGダウンロード**: 作成したスキンをダウンロードして各種プラットフォームで使用\n- **クリエイターズマーケット**: ユーザー投稿のオリジナルパーツを共有・再利用可能\n\n## 技術スタック\n\n- Next.js、React、Canvas API\n- Web Worker（画像書き出し時のUIフリーズ防止）\n- サーバーサイドデータ保存（後から編集再開可能）\n- クレジット表示システム（素材の循環環境）",
    "tags": [
      "クリエイティブ",
      "スキン",
      "デザイン",
      "ツール"
    ],
    "launchedAt": "2022"
  },
  {
    "slug": "takuya-tts",
    "name": "takuya-tts",
    "fqdn": "https://takuya-tts.hikamer.f5.si",
    "shortDescription": "日本語テキスト読み上げ（TTS）サービス。Oddcast TTS APIを使用し、入力テキストを自然な音声で再生。MP3ダウンロード対応。",
    "longDescription": "# takuya-tts — 日本語テキスト読み上げ\n\ntakuya-ttsは、入力した日本語テキストを自然な音声で読み上げるシンプルなTTSサービスです。Oddcast TTS API（cache-a.oddcast.com）を利用して音声合成を行います。\n\n## 主な機能\n\n- **日本語テキスト読み上げ**: Oddcast TTS APIの日本語音声パラメータ（EID=3, LID=12, VID=2）を使用\n- **リアルタイム音声再生**: HTML5 Audio要素で即時再生\n- **MP3ダウンロード**: Blobフェッチでダウンロード機能\n- **動的タイトル更新**: 読み上げ中にページタイトルを更新\n- **SEO最適化**: schema.org WebApplication JSON-LD、日本語キーワード、OpenGraph、canonical設定\n- **アクセシビリティ**: aria-label、セマンティックHTML\n\n## 技術スタック\n\n- Next.js 16.1.6、React 19.2、TypeScript、Tailwind CSS 4\n- Geist + Geist Mono フォント\n- babel-plugin-react-compiler\n- Oddcast TTS API（ブラウザから直接API呼び出し）\n- 青/藍色グラデーションデザイン\n- PWAマニフェスト",
    "tags": [
      "TTS",
      "音声",
      "ツール",
      "日本語"
    ],
    "launchedAt": "2022"
  },
  {
    "slug": "twigacha",
    "name": "twigacha",
    "fqdn": "https://twigacha.hikamer.f5.si",
    "shortDescription": "Twitter/Bluesky/Misskey/MastodonのアカウントをTCGカード化するマルチプラットフォームガチャゲーム。8段階レアリティ、バトルシステム、オンライン対戦。",
    "longDescription": "# twigacha — マルチプラットフォームガチャTCG\n\ntwigachaは、Twitter、Bluesky、Misskey、MastodonのアカウントをTCGカードに変換するマルチプラットフォームガチャゲームです。デイリー5パックのカードを引き、コレクションし、バトルも楽しめます。\n\n## ガチャシステム\n\n- **マルチプラットフォーム対応**: Twitter（fxtwitter API）、Bluesky（AT Protocol）、Misskey API、Mastodon API（nodeinfo検出でインスタンス種別判定）\n- **8段階レアリティ**: C→N→R→SR→SSR→UR→LR。フォロワー数、ツイート数、アカウント年齢、認証状態などから計算\n- **天井システム**: 10パックSSRなしでUR以上確定\n- **ピックアップガチャ**: Yahooリアルタイム検索で特定ユーザーを検索\n- **HKM仮想通貨**: ヒカキンマニアコインでパック購入可能\n\n## バトルシステム\n\n- **6ステータス**: ATK/DEF/SPD/HP/INT/LUK、各ステータスからスキル派生、実ツイートからアルティメット効果\n- **PvEクエスト**: ステージ制\n- **オンラインPvP**: Webプッシュ通知で対戦通知\n- **チームバトル、レイドバトル**\n\n## その他機能\n\n- **デイリーミッション**: 5種類のデイリータスク\n- **シリアルコード**: コード交換システム\n- **カード署名**: HMACベースの改ざん防止\n- **コレクション**: 重複トラッキング、ガチャ統計ダッシュボード\n- **PWA**: マニフェスト対応\n\n## 技術スタック\n\n- Next.js 16.1.6、React 19.2、TypeScript、Tailwind CSS 4\n- Zustand 5.0.11（永続化状態管理）\n- Supabase（データベース）\n- Web Push API（プッシュ通知）\n- Lucide React、Vercel Analytics",
    "tags": [
      "ガチャ",
      "ゲーム",
      "TCG",
      "マルチプラットフォーム"
    ],
    "launchedAt": "2022"
  },
  {
    "slug": "uno",
    "name": "uno",
    "fqdn": "https://uno.hikamer.f5.si",
    "shortDescription": "ブラウザでAI対戦できるUNOゲーム。カスタムハウスルール、ワイルド+4チャレンジ、Swap/Shuffle/Customワイルドカード。日本語/国際スコアリング対応。",
    "longDescription": "# uno — ブラウザ版UNO\n\nunoは、ブラウザ上でAI相手にUNOをプレイできるカードゲームです。独自のハウスルールシステムと3種類のオプションワイルドカードを搭載しています。\n\n## ゲームシステム\n\n- **AI対戦**: 複数のAI相手と対戦（aiPlayer.ts）\n- **ハウスルール**: 山札重ね、ワイルド+4いつでも、複数枚同時出し、連番出し、アクションカード上がり禁止、ラストマンスタンディング\n- **オプションワイルドカード**: Swap（手札交換）、Shuffle（シャッフル）、Custom（カスタム）\n- **ワイルド+4チャレンジ**: 正式ルールのチャレンジ判定\n- **スコアリング**: 日本式/国際式切り替え\n- **グリーン/ピンクグラデーション**: ダークテーマUI\n\n## 技術スタック\n\n- Next.js 14.2、React 18.3、TypeScript、Tailwind CSS 3.4\n- GameSetup → GameBoard フロー（クライアントコンポーネント）\n- 純粋なフロントエンドゲーム（外部API・DBなし）\n- PostCSS",
    "tags": [
      "ゲーム",
      "カード",
      "AI",
      "マルチプレイ"
    ],
    "launchedAt": "2021"
  },
  {
    "slug": "searxng",
    "name": "searxng",
    "fqdn": "https://searxng.hikamer.f5.si",
    "shortDescription": "プライバシー重視のオープンソースメタ検索エンジン。Google、Bing、DuckDuckGoなどを横断検索。検索履歴を記録せず、自己完結型インフラで運用。",
    "longDescription": "# searxng — プライバシーメタ検索エンジン\n\nsearxngは、プライバシーを最重視したオープンソースのメタ検索エンジンです。複数の検索エンジンの結果を集約し、検索履歴や個人データを一切記録しません。\n\n## 主な機能\n\n- **メタ検索**: Google、Bing、DuckDuckGoなど複数エンジンを横断検索\n- **プライバシー保護**: 検索履歴・クッキー不要、ログなし\n- **フィルターバブル防止**: 個人の検索履歴に基づく結果の偏りがない\n- **垂直検索**: 画像検索、ニュース検索、ファイル検索に対応\n- **シンプルインターフェース**: 最小限のUIで高速表示\n\n## 技術スタック\n\n- SearXNG（オープンソース、Python）\n- Coolify上でDockerコンテナとして運用（サービス管理）\n- 非同期並行処理で複数検索エンジンにリクエスト\n- 外部サービスへの依存を極力排除",
    "tags": [
      "検索",
      "プライバシー",
      "オープンソース",
      "ツール"
    ],
    "launchedAt": "2021"
  }
];

export function getAppMeta(slug: string): AppMeta | undefined { return apps.find(a => a.slug === slug); }
export function getAllAppMetas(): AppMeta[] { return apps; }
export function getAppMetaByName(name: string): AppMeta | undefined { return apps.find(a => a.name === name); }
export function getDescriptions(): Record<string, string> { const m: Record<string,string>={}; apps.forEach(a=>m[a.name]=a.shortDescription); return m; }
export default apps;

const fs = require('fs');

const apps = [
  {
    slug: 'hikafuwa-box',
    name: 'hikafuwa-box',
    fqdn: 'https://hikafuwa-box.hikamer.f5.si',
    shortDescription: 'AIが画像から面白いツイートを生成するサービス。Google Gemini AIを利用し、画像の内容を解析してジョークツイートを自動生成。テンションスライダーで平和〜カオスまで調整可能。',
    longDescription: '# hikafuwa-box — AIで画像からネタツイートを生成\n\nhikafuwa-boxは、アップロードした画像をGoogle Gemini AIが解析し、その内容に合わせた面白いツイートを自動生成するサービスです。2022年頃から界隈で使われ始め、現在ではメンバーが日常的に画像ネタを作るための定番ツールになっています。\n\n## 開発の経緯\n\n界隈では画像に合わせたジョークツイートを手動で考える文化がありましたが、「面白いツイートが思いつかない」という声が多く、AIで自動生成できれば便利だと考えて開発しました。当初は手動テンプレートを使っていましたが、2024年にGoogle Gemini APIを導入し、大幅に品質が向上しました。\n\n## 主な機能\n\n- **画像アップロードとAI解析**: ドラッグ＆ドロップで画像をアップロードし、Gemini AIが画像の内容を解析\n- **テンションスライダー**: 10段階のテンション設定（「超和平的」から「カオス/狂気」まで）、各レベルに日本語プロンプトを個別設計\n- **ストリーミング応答**: AIの生成結果をリアルタイムで表示（SSE）\n- **マルチプラットフォーム共有**: X、Bluesky、LINE、クリップボードコピーに対応\n- **reCAPTCHA連携**: 悪用防止のためのレート制限とreCAPTCHA認証\n\n## 技術スタック\n\n- **フロントエンド**: Next.js 16.0.3、React 19.2、TypeScript、Tailwind CSS 4\n- **AIエンジン**: Google Generative AI (@google/generative-ai 0.24.1)\n- **デザイン**: グラスモーフィズムカード、パープル/ピンクのグラデーションテーマ\n- **デプロイ**: Nixpacks (Railway)、PWA対応 (@ducanh2912/next-pwa)\n- **データ処理**: PapaParse 5.5.3\n\n## 界隈での使われ方\n\nイベント時の盛り上げツールとして重宝されており、スクリーンショットを投げ込むだけで即座にネタツイートが生成されるため、リアルタイム性が高いのが特徴です。特にテンションスライダーを最大にした「カオスモード」での生成結果は予想外の面白さがあり、スクリーンショットがSNSで拡散されることもあります。',
    tags: ['AI', '画像解析', 'ツイート生成', 'Gemini'],
    launchedAt: '2022',
  },
  {
    slug: 'hikamerautowiki',
    name: 'hikamerautowiki',
    fqdn: 'https://hikamerautowiki.hikamer.f5.si',
    shortDescription: 'AIがMediaWikiの編集を自動化するアシスタント。指示を入力するだけでWikiページの作成・編集・ファクトチェックをAIが実行。Yahooリアルタイム検索と連携して最新情報を反映。',
    longDescription: '# hikamerautowiki — AIによるWiki自動編集アシスタント\n\nhikamerautowikiは、MediaWikiベースのWikiに対してAIが編集作業を自動化するアシスタントツールです。ユーザーが編集指示を入力するだけで、AIがWikitextを生成し、実際にWikiページを作成・編集します。ファクトチェックモードも搭載し、既存ページの正確性を検証できます。\n\n## 開発の経緯\n\n界隈のWikiは情報量が膨大で、手作業での更新に限界がありました。特に新しいミームや用語が発生した際の反映速度が課題でした。2023年に自然言語処理技術を活用した自動化システムの構築を開始し、Yahooリアルタイム検索と組み合わせることで最新情報を自動反映できる仕組みを実現しました。\n\n## 4つのツールモード\n\n- **ページ編集**: 既存のWikiページに対してAIが修正案を生成\n- **新規ページ作成**: 指示に基づいてAIがWikitextを一から生成\n- **ファクトチェック**: 既存ページの内容をYahooリアルタイム検索のツイートデータと照合し、正確性を検証（目次ナビゲーション付き）\n- **リダイレクト作成**: 別名・略称からのリダイレクトページを自動生成\n\n## 技術スタック\n\n- **フロントエンド**: Next.js 16.2.1、React 19.2、TypeScript、Tailwind CSS 4\n- **バックエンド**: Node.js API Routes、PostgreSQL (pg 8.20.0)\n- **AI連携**: ストリーミングAI応答（SSE）、推論過程の可視化\n- **データソース**: Yahooリアルタイム検索API、MediaWiki API\n- **バリデーション**: Zod 4.3.6\n- **画像処理**: Sharp 0.34.5（Wiki画像アップロード対応）\n- **テスト**: Vitest 4.1.2\n\n## 界隈での使われ方\n\n新しいハッシュタグやミームが発生した際、数時間以内にWiki記事を作成できるのが最大の強みです。2024年夏には突如流行したミームについて、他の情報サイトより早く解説記事を公開し多くの参照を集めました。編集履歴は自動保存され、過去の編集内容を振り返ることもできます。',
    tags: ['Wiki', 'AI', '自動化', '情報収集'],
    launchedAt: '2023',
  }
];

let content = 'export interface AppMeta {\n';
content += '  slug: string;\n';
content += '  name: string;\n';
content += '  fqdn: string;\n';
content += '  shortDescription: string;\n';
content += '  longDescription: string;\n';
content += '  tags: string[];\n';
content += '  launchedAt?: string;\n';
content += '}\n\n';
content += 'const apps: AppMeta[] = ' + JSON.stringify(apps, null, 2) + ';\n\n';
content += 'export function getAppMeta(slug: string): AppMeta | undefined {\n';
content += '  return apps.find((a) => a.slug === slug);\n';
content += '}\n\n';
content += 'export function getAllAppMetas(): AppMeta[] {\n';
content += '  return apps;\n';
content += '}\n\n';
content += 'export function getAppMetaByName(name: string): AppMeta | undefined {\n';
content += '  return apps.find((a) => a.name === name);\n';
content += '}\n\n';
content += 'export function getDescriptions(): Record<string, string> {\n';
content += '  const map = {};\n';
content += '  for (const app of apps) map[app.name] = app.shortDescription;\n';
content += '  return map;\n';
content += '}\n\n';
content += 'export default apps;\n';

fs.writeFileSync('app/app-descriptions.ts', content, 'utf8');
console.log('done, apps:', apps.length);

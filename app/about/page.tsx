export default function AboutPage() {
  return (
    <div className="min-h-screen" style={{ background: "var(--background)" }}>
      <div className="max-w-2xl mx-auto px-6 py-16">
        <a href="/" className="text-sm text-gray-500 hover:text-gray-300 transition-colors mb-8 inline-block">← ポータルに戻る</a>
        <h1 className="text-3xl font-bold text-white mb-10">このサイトについて</h1>
        <div className="flex flex-col gap-8 text-sm text-gray-400 leading-relaxed">
          <section>
            <h2 className="text-base font-semibold text-white mb-2">サイトの目的</h2>
            <p>hikamer&apos;s portalは、hikamerが開発・運営するWebサービス・ツール・ゲームを一箇所にまとめたポータルサイトです。ヒカマー界隈向けのコンテンツを中心に、誰でも気軽に使えるサービスを公開しています。</p>
          </section>
          <section>
            <h2 className="text-base font-semibold text-white mb-2">運営者プロフィール</h2>
            <div className="flex flex-col gap-2">
              <p>Webアプリケーション開発、インフラ構築（Docker/Coolify）を得意とするエンジニア <strong className="text-white">hikamer (maebahesioru)</strong> が個人で開発・運営しています。Next.js や TypeScript を用いたモダンなフロントエンド開発から、Supabase/PostgreSQL を用いたバックエンド構築、自宅サーバーでの OpenAI 互換 API 運用までフルスタックに行っています。</p>
              <p>これまでに20以上のWebサービスを立ち上げ、界隈向けのツール・ゲーム・検索エンジン・AIチャットなど多岐にわたるプロダクトを開発。すべてのコードはGitHubで公開しており、オープンソースでの知見共有も積極的に行っています。</p>
              <div className="flex gap-4 mt-1">
                <a href="https://x.com/maebahesioru2" target="_blank" rel="noopener noreferrer" className="text-violet-400 hover:text-violet-300 transition-colors">X (@maebahesioru2)</a>
                <a href="https://discord.com/invite/26U6r5xMBx" target="_blank" rel="noopener noreferrer" className="text-violet-400 hover:text-violet-300 transition-colors">Discord サーバー</a>
              </div>
            </div>
          </section>
          <section>
            <h2 className="text-base font-semibold text-white mb-2">技術スタック</h2>
            <p>Next.js / TypeScript / Tailwind CSS / Coolify でホスティング</p>
          </section>
          <section>
            <h2 className="text-base font-semibold text-white mb-2">お問い合わせ</h2>
            <p>バグ報告・ご意見・ご要望は<a href="/contact" className="text-violet-400 hover:text-violet-300 underline underline-offset-2">お問い合わせページ</a>からどうぞ。</p>
          </section>
        </div>
      </div>
    </div>
  );
}

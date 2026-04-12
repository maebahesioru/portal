export default function PrivacyPage() {
  return (
    <div className="min-h-screen" style={{ background: "var(--background)" }}>
      <div className="max-w-2xl mx-auto px-6 py-16">
        <a href="/" className="text-sm text-gray-500 hover:text-gray-300 transition-colors mb-8 inline-block">← ポータルに戻る</a>
        <h1 className="text-3xl font-bold text-white mb-2">プライバシーポリシー</h1>
        <p className="text-gray-500 text-sm mb-10">最終更新: 2026年4月</p>
        <div className="flex flex-col gap-8 text-gray-400 leading-relaxed text-sm">
          <section>
            <h2 className="text-base font-semibold text-white mb-2">広告の配信について</h2>
            <p>
              本サイトはGoogle AdSenseを利用しており、Googleおよびそのパートナーが広告を配信するためにCookieを使用することがあります。
              Cookieを使用することで、ユーザーが過去に本サイトや他のサイトを訪問した際の情報に基づいて広告が表示されます。
              Googleによる広告Cookieの使用は、<a href="https://policies.google.com/technologies/ads" target="_blank" rel="noopener noreferrer" className="text-violet-400 hover:text-violet-300 underline underline-offset-2">Googleの広告に関するポリシー</a>に従います。
              Cookieを無効にする場合は、ブラウザの設定から変更できます。
            </p>
          </section>
          <section>
            <h2 className="text-base font-semibold text-white mb-2">アクセス解析について</h2>
            <p>アクセス解析のためにアクセスログ（IPアドレス、ブラウザ情報等）がサーバーに記録される場合があります。取得した情報はサイト改善の目的にのみ使用し、第三者への提供は行いません。</p>
          </section>
          <section>
            <h2 className="text-base font-semibold text-white mb-2">収集する個人情報</h2>
            <p>本サイト自体は個人情報を収集しません。お問い合わせの際にご提供いただいた情報は、返信目的にのみ使用します。</p>
          </section>
          <section>
            <h2 className="text-base font-semibold text-white mb-2">外部サービス</h2>
            <p>本サイトに掲載されている各アプリは独立したサービスです。各アプリのプライバシーポリシーはそれぞれのサービスに準じます。</p>
          </section>
          <section>
            <h2 className="text-base font-semibold text-white mb-2">お問い合わせ</h2>
            <p>プライバシーに関するお問い合わせは<a href="/contact" className="text-violet-400 hover:text-violet-300 underline underline-offset-2">お問い合わせページ</a>からご連絡ください。</p>
          </section>
        </div>
      </div>
    </div>
  );
}

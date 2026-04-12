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
              Cookieを使用することで、ユーザーが過去に本サイトや他のサイトを訪問した際の情報に基づいてパーソナライズ広告が表示されます。
              Googleによる広告Cookieの使用は、<a href="https://policies.google.com/technologies/ads" target="_blank" rel="noopener noreferrer" className="text-violet-400 hover:text-violet-300 underline underline-offset-2">Googleの広告に関するポリシー</a>に従います。
            </p>
          </section>
          <section>
            <h2 className="text-base font-semibold text-white mb-2">パーソナライズ広告のオプトアウト</h2>
            <p>
              パーソナライズ広告用のCookieを無効にしたい場合は、以下のリンクからオプトアウトできます。
            </p>
            <ul className="mt-2 flex flex-col gap-1">
              <li>
                <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" className="text-violet-400 hover:text-violet-300 underline underline-offset-2">Googleの広告設定</a>
              </li>
              <li>
                <a href="https://optout.aboutads.info/" target="_blank" rel="noopener noreferrer" className="text-violet-400 hover:text-violet-300 underline underline-offset-2">aboutads.info（業界共通オプトアウト）</a>
              </li>
              <li>
                <a href="https://optout.networkadvertising.org/" target="_blank" rel="noopener noreferrer" className="text-violet-400 hover:text-violet-300 underline underline-offset-2">NAI オプトアウト</a>
              </li>
            </ul>
            <p className="mt-2">また、ブラウザの設定からCookieを無効にすることでも対応できます。</p>
          </section>
          <section>
            <h2 className="text-base font-semibold text-white mb-2">個人情報の販売・共有について（米国ユーザー向け）</h2>
            <p>
              カリフォルニア州その他の米国州のプライバシー法（CPRA等）に基づき、ユーザーは自身の個人情報の販売または共有（クロスコンテキスト行動ターゲティング広告を含む）をオプトアウトする権利を有します。
              オプトアウトを希望する場合は、上記の広告設定リンクからお手続きいただくか、<a href="/contact" className="text-violet-400 hover:text-violet-300 underline underline-offset-2">お問い合わせページ</a>よりご連絡ください。
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
            <p>本サイトに掲載されている各アプリは運営者が開発・運営しています。各サービスのプライバシーポリシーはそれぞれのサービスに準じます。</p>
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

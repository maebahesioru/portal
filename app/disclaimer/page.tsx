export default function DisclaimerPage() {
  return (
    <div className="min-h-screen" style={{ background: "var(--background)" }}>
      <div className="max-w-2xl mx-auto px-6 py-16">
        <a href="/" className="text-sm text-gray-500 hover:text-gray-300 transition-colors mb-8 inline-block">← ポータルに戻る</a>
        <h1 className="text-3xl font-bold text-white mb-2">免責事項</h1>
        <p className="text-gray-500 text-sm mb-10">最終更新: 2026年4月</p>
        <div className="flex flex-col gap-8 text-sm text-gray-400 leading-relaxed">
          <section>
            <h2 className="text-base font-semibold text-white mb-2">情報の正確性について</h2>
            <p>本サイトに掲載されている情報は可能な限り正確を期していますが、その内容の完全性・正確性・有用性を保証するものではありません。掲載情報は予告なく変更される場合があります。</p>
          </section>
          <section>
            <h2 className="text-base font-semibold text-white mb-2">損害について</h2>
            <p>本サイトおよびリンク先のサービスの利用によって生じたいかなる損害についても、運営者は一切の責任を負いません。利用は自己責任でお願いします。</p>
          </section>
          <section>
            <h2 className="text-base font-semibold text-white mb-2">外部リンクについて</h2>
            <p>本サイトに掲載されているサービスは運営者が開発・運営しています。ただし、各サービスは独立して動作しており、障害・メンテナンス等により一時的に利用できない場合があります。</p>
          </section>
          <section>
            <h2 className="text-base font-semibold text-white mb-2">著作権について</h2>
            <p>本サイトのソースコードは<a href="https://github.com/maebahesioru" target="_blank" rel="noopener noreferrer" className="text-violet-400 hover:text-violet-300 underline underline-offset-2">GitHub</a>で公開しており、フォーク・Star・プルリクエスト大歓迎です。コンテンツ（文章・画像等）の無断転載はお断りします。</p>
          </section>
        </div>
      </div>
    </div>
  );
}

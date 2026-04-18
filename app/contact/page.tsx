export default function ContactPage() {
  return (
    <div className="min-h-screen" style={{ background: "var(--background)" }}>
      <div className="max-w-2xl mx-auto px-6 py-16">
        <a href="/" className="text-sm text-gray-500 hover:text-gray-300 transition-colors mb-8 inline-block">← ポータルに戻る</a>
        <h1 className="text-3xl font-bold text-white mb-8">お問い合わせ</h1>
        <div className="flex flex-col gap-4">
          <a
            href="https://discord.com/invite/26U6r5xMBx"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-5 rounded-2xl border border-white/8 bg-white/3 hover:bg-indigo-500/10 hover:border-indigo-500/30 transition-all"
          >
            <div className="w-10 h-10 rounded-xl bg-indigo-500/20 flex items-center justify-center text-xl shrink-0">💬</div>
            <div>
              <div className="font-semibold text-white flex items-center gap-2">
                Discord サーバー
                <span className="text-xs bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 rounded-full px-2 py-0.5">反応早め</span>
              </div>
              <div className="text-sm text-gray-400 mt-0.5">discord.com/invite/26U6r5xMBx</div>
            </div>
          </a>
          <a
            href="https://github.com/maebahesioru"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-5 rounded-2xl border border-white/8 bg-white/3 hover:bg-white/6 hover:border-white/15 transition-all"
          >
            <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-xl shrink-0">🐙</div>
            <div>
              <div className="font-semibold text-white flex items-center gap-2">
                GitHub Issue
                <span className="text-xs bg-yellow-500/20 text-yellow-400 border border-yellow-500/30 rounded-full px-2 py-0.5">反応遅め</span>
              </div>
              <div className="text-sm text-gray-400 mt-0.5">github.com/maebahesioru</div>
            </div>
          </a>
          <a
            href="mailto:pikomaeba@gmail.com"
            className="flex items-center gap-4 p-5 rounded-2xl border border-white/8 bg-white/3 hover:bg-white/6 hover:border-white/15 transition-all"
          >
            <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-xl shrink-0">✉️</div>
            <div>
              <div className="font-semibold text-white flex items-center gap-2">
                メール
                <span className="text-xs bg-yellow-500/20 text-yellow-400 border border-yellow-500/30 rounded-full px-2 py-0.5">反応遅め</span>
              </div>
              <div className="text-sm text-gray-400 mt-0.5">pikomaeba@gmail.com</div>
            </div>
          </a>
          <a
            href="https://x.com/maebahesioru2"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-5 rounded-2xl border border-white/8 bg-white/3 hover:bg-white/6 hover:border-white/15 transition-all"
          >
            <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-xl shrink-0">𝕏</div>
            <div>
              <div className="font-semibold text-white">X (Twitter) リプ / DM</div>
              <div className="text-sm text-gray-400 mt-0.5">@maebahesioru2</div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

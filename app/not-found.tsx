import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center" style={{ background: "var(--background)" }}>
      <div className="text-center px-6">
        <div className="text-8xl font-bold text-white mb-4">404</div>
        <h1 className="text-2xl font-semibold text-white mb-3">ページが見つかりませんでした</h1>
        <p className="text-gray-400 mb-8 max-w-md mx-auto">
          お探しのページは削除されたか、URLが変更された可能性があります。
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 bg-violet-600 hover:bg-violet-500 text-white font-semibold rounded-xl px-6 py-3 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            ホームに戻る
          </Link>
          <Link
            href="/blog"
            className="inline-flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 text-gray-300 font-medium rounded-xl px-6 py-3 border border-white/10 transition-colors"
          >
            ブログを見る
          </Link>
        </div>
      </div>
    </div>
  );
}

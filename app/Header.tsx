export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/5 backdrop-blur-md bg-black/30">
      <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
        <a href="/" className="font-bold text-white hover:text-gray-300 transition-colors">
          hikamer&apos;s portal
        </a>
        <nav className="flex items-center gap-6 text-sm text-gray-400">
          <a href="/" className="hover:text-white transition-colors">ホーム</a>
          <a href="/about" className="hover:text-white transition-colors">About</a>
          <a href="/contact" className="hover:text-white transition-colors">お問い合わせ</a>
        </nav>
      </div>
    </header>
  );
}

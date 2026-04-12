export default function Footer() {
  return (
    <footer className="border-t border-white/5 mt-16">
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-500">
        <span>© 2026 hikamer</span>
        <div className="flex items-center gap-6">
          <a href="/about" className="hover:text-gray-300 transition-colors">About</a>
          <a href="/disclaimer" className="hover:text-gray-300 transition-colors">免責事項</a>
          <a href="/privacy" className="hover:text-gray-300 transition-colors">プライバシーポリシー</a>
          <a href="/contact" className="hover:text-gray-300 transition-colors">お問い合わせ</a>
        </div>
      </div>
    </footer>
  );
}

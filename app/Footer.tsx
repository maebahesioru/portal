export default function Footer() {
  return (
    <footer className="border-t border-white/5 mt-16">
      <div className="max-w-6xl mx-auto px-6 py-8 text-sm text-gray-400">
        <div className="flex flex-wrap justify-center sm:justify-start gap-x-6 gap-y-2 mb-4">
          <a href="/about" className="hover:text-gray-300 transition-colors">About</a>
          <a href="/disclaimer" className="hover:text-gray-300 transition-colors">免責事項</a>
          <a href="/privacy" className="hover:text-gray-300 transition-colors">プライバシーポリシー</a>
          <a href="/contact" className="hover:text-gray-300 transition-colors">お問い合わせ</a>
          <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition-colors">広告オプトアウト</a>
        </div>
        <span className="block text-center sm:text-left text-gray-500">© 2026 hikamer</span>
      </div>
    </footer>
  );
}

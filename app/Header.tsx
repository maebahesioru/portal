"use client";

import { useState } from "react";
import Image from "next/image";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/5 backdrop-blur-md bg-black/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
        <a href="/" className="font-bold text-white hover:text-gray-300 transition-colors flex items-center gap-2">
          <Image src="/icon" alt="hikamer's portal" width={20} height={20} className="rounded-sm" />
          hikamer&apos;s portal
        </a>

        {/* Desktop nav */}
        <nav className="hidden sm:flex items-center gap-6 text-sm text-gray-400">
          <a href="/" className="hover:text-white transition-colors">ホーム</a>
          <a href="/blog" className="hover:text-white transition-colors">ブログ</a>
          <a href="/about" className="hover:text-white transition-colors">About</a>
          <a href="/contact" className="hover:text-white transition-colors">お問い合わせ</a>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="sm:hidden p-2 text-gray-400 hover:text-white transition-colors"
          onClick={() => setOpen((v) => !v)}
          aria-label="メニュー"
        >
          {open ? (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

        {/* Mobile menu */}
        {open && (
          <nav className="sm:hidden border-t border-white/5 bg-black/50 backdrop-blur-md px-4 py-3 flex flex-col gap-3 text-sm text-gray-400">
            <a href="/" className="hover:text-white transition-colors py-1" onClick={() => setOpen(false)}>ホーム</a>
            <a href="/blog" className="hover:text-white transition-colors py-1" onClick={() => setOpen(false)}>ブログ</a>
            <a href="/about" className="hover:text-white transition-colors py-1" onClick={() => setOpen(false)}>About</a>
            <a href="/contact" className="hover:text-white transition-colors py-1" onClick={() => setOpen(false)}>お問い合わせ</a>
          </nav>
        )}
    </header>
  );
}

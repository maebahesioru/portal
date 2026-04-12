"use client";

import { useEffect, useState } from "react";

export default function CookieBanner() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem("cookie_consent")) setShow(true);
  }, []);

  const accept = () => {
    localStorage.setItem("cookie_consent", "accepted");
    setShow(false);
  };

  const decline = () => {
    localStorage.setItem("cookie_consent", "declined");
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 sm:p-6">
      <div className="max-w-2xl mx-auto bg-gray-900 border border-white/10 rounded-2xl p-5 shadow-2xl flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <p className="text-sm text-gray-300 flex-1">
          本サイトはGoogle AdSenseによる広告配信のためCookieを使用しています。
          詳細は<a href="/privacy" className="text-violet-400 hover:text-violet-300 underline underline-offset-2">プライバシーポリシー</a>をご覧ください。
        </p>
        <div className="flex gap-2 shrink-0">
          <button
            onClick={decline}
            className="px-4 py-2 text-sm text-gray-400 hover:text-white border border-white/10 rounded-xl transition-colors"
          >
            拒否
          </button>
          <button
            onClick={accept}
            className="px-4 py-2 text-sm text-white bg-violet-600 hover:bg-violet-500 rounded-xl transition-colors"
          >
            同意する
          </button>
        </div>
      </div>
    </div>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "ブログ - hikamer's portal",
  description: "hikamer's portalの運営者によるブログ。Web開発、個人開発サービスの運用、コミュニティ管理、Next.jsやCoolifyの実践ノウハウを発信しています。",
  openGraph: {
    title: "ブログ - hikamer's portal",
    description: "hikamer's portalの運営者によるブログ。Web開発、個人開発サービスの運用、コミュニティ管理、Next.jsやCoolifyの実践ノウハウを発信しています。",
    url: "https://hikamer.f5.si/blog",
    siteName: "hikamer's portal",
    type: "website",
  },
};

export default function BlogIndexPage() {
  const posts = getAllPosts();

  return (
    <div className="min-h-screen" style={{ background: "var(--background)" }}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10">
        <nav className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:text-white transition-colors">ホーム</Link>
          <span className="mx-2">/</span>
          <span className="text-white">ブログ</span>
        </nav>

        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">ブログ</h1>
        <p className="text-gray-400 mb-10">
          hikamer&apos;s portalの運営者によるブログです。Web開発のノウハウ、個人開発サービスの運用、コミュニティ管理の心得などを発信しています。
        </p>

        <div className="space-y-6">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="rounded-2xl border border-white/8 bg-white/3 hover:bg-white/6 hover:border-white/15 transition-all p-6"
            >
              <Link href={`/blog/${post.slug}`} className="block group">
                <time className="text-xs text-gray-500 mb-2 block">{post.date}</time>
                <h2 className="text-xl font-bold text-white group-hover:text-violet-300 transition-colors mb-2">
                  {post.title}
                </h2>
                <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">{post.excerpt}</p>
                <span className="inline-flex items-center gap-1 mt-4 text-sm text-violet-400 group-hover:text-violet-300 transition-colors">
                  続きを読む
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

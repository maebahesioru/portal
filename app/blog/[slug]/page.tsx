import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { marked } from "marked";
import { getAllPosts, getPostBySlug } from "@/lib/posts";

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: `${post.title} - hikamer's portal`,
    description: post.excerpt,
    openGraph: {
      title: `${post.title} - hikamer's portal`,
      description: post.excerpt,
      url: `https://hikamer.f5.si/blog/${post.slug}`,
      siteName: "hikamer's portal",
      type: "article",
      publishedTime: post.date,
    },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const rawHtml = await marked(post.content);
  // remove duplicative first h1 since page template already shows title
  const html = rawHtml.replace(/^<h1[^>]*>.*?<\/h1>\s*/, "");
  const allPosts = getAllPosts();
  const currentIndex = allPosts.findIndex((p) => p.slug === slug);
  const prevPost = currentIndex < allPosts.length - 1 ? allPosts[currentIndex + 1] : null;
  const nextPost = currentIndex > 0 ? allPosts[currentIndex - 1] : null;

  return (
    <div className="min-h-screen" style={{ background: "var(--background)" }}>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10">
        <nav className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:text-white transition-colors">ホーム</Link>
          <span className="mx-2">/</span>
          <Link href="/blog" className="hover:text-white transition-colors">ブログ</Link>
          <span className="mx-2">/</span>
          <span className="text-white">{post.title}</span>
        </nav>

        <article>
          <header className="mb-8">
            <time className="text-sm text-gray-500 mb-2 block">{post.date}</time>
            <h1 className="text-3xl sm:text-4xl font-bold text-white leading-tight">{post.title}</h1>
          </header>

          <div
            className="prose prose-invert max-w-none"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </article>

        <div className="border-t border-white/8 mt-10 pt-8 flex flex-col sm:flex-row justify-between gap-4">
          {prevPost ? (
            <Link href={`/blog/${prevPost.slug}`} className="group text-left">
              <span className="text-xs text-gray-500 block mb-1">← 前の記事</span>
              <span className="text-sm text-white group-hover:text-violet-300 transition-colors font-medium">
                {prevPost.title}
              </span>
            </Link>
          ) : (
            <div />
          )}
          {nextPost ? (
            <Link href={`/blog/${nextPost.slug}`} className="group text-right">
              <span className="text-xs text-gray-500 block mb-1">次の記事 →</span>
              <span className="text-sm text-white group-hover:text-violet-300 transition-colors font-medium">
                {nextPost.title}
              </span>
            </Link>
          ) : (
            <div />
          )}
        </div>

        <div className="mt-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 text-gray-300 font-medium rounded-xl px-5 py-2.5 border border-white/10 transition-colors text-sm"
          >
            ← ブログ一覧に戻る
          </Link>
        </div>
      </div>
    </div>
  );
}

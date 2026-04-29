import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { marked } from "marked";
import { getAppMeta, getAllAppMetas } from "@/lib/apps";
import PlaceholderImage from "../../PlaceholderImage";

function stripPort(url: string) {
  try { const u = new URL(url); u.port = ""; return u.toString(); } catch { return url; }
}

async function fetchMeta(fqdn: string) {
  try {
    const res = await fetch(
      `https://hikamer.f5.si/api/meta?url=${encodeURIComponent(stripPort(fqdn))}`,
      { next: { revalidate: 3600 } }
    );
    if (!res.ok) return null;
    return res.json() as Promise<{ title?: string | null; description?: string | null; ogImage?: string | null; favicon?: string | null }>;
  } catch {
    return null;
  }
}

export async function generateStaticParams() {
  const apps = getAllAppMetas();
  return apps.map((app) => ({ slug: app.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const app = getAppMeta(slug);
  if (!app) return {};
  const meta = await fetchMeta(app.fqdn);
  const title = meta?.title ?? app.name;
  return {
    title: `${title} - hikamer's portal`,
    description: meta?.description ?? app.shortDescription,
    openGraph: {
      title: `${title} - hikamer's portal`,
      description: meta?.description ?? app.shortDescription,
      url: `https://hikamer.f5.si/apps/${app.slug}`,
      siteName: "hikamer's portal",
      type: "article",
    },
  };
}

export default async function AppDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const app = getAppMeta(slug);
  if (!app) notFound();

  const meta = await fetchMeta(app.fqdn);
  const html = marked(app.longDescription);

  // related apps by tag
  const allApps = getAllAppMetas();
  const related = allApps
    .filter((a) => a.slug !== app.slug && a.tags.some((t) => app.tags.includes(t)))
    .slice(0, 4);

  return (
    <div className="min-h-screen" style={{ background: "var(--background)" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "ホーム", "item": "https://hikamer.f5.si" },
                { "@type": "ListItem", "position": 2, "name": app.name, "item": `https://hikamer.f5.si/apps/${app.slug}` },
              ],
            },
            {
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": app.name,
              "applicationCategory": "WebApplication",
              "operatingSystem": "Web Browser",
              "description": app.shortDescription,
              "url": app.fqdn,
              "author": { "@type": "Person", "name": "hikamer" },
            },
          ]),
        }}
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:text-white transition-colors">ホーム</Link>
          <span className="mx-2">/</span>
          <span className="text-white">{app.name}</span>
        </nav>

        {/* OGP Image */}
        {meta?.ogImage ? (
          <div className="relative w-full h-56 sm:h-80 rounded-2xl overflow-hidden mb-8 border border-white/8">
            <Image
              src={`/api/img?url=${encodeURIComponent(meta.ogImage)}&w=800`}
              alt={app.name}
              fill
              sizes="(max-width: 768px) 100vw, 800px"
              className="object-cover"
              unoptimized
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </div>
        ) : (
          <div className="w-full h-56 sm:h-80 rounded-2xl overflow-hidden mb-8 border border-white/8">
            <PlaceholderImage name={app.name} />
          </div>
        )}

        {/* Title & Meta */}
        <div className="mb-8">
          <div className="flex flex-wrap items-center gap-3 mb-3">
            {meta?.favicon && (
              <img
                src={`/api/img?url=${encodeURIComponent(meta.favicon)}`}
                alt=""
                width={24}
                height={24}
                className="rounded-sm object-contain"
              />
            )}
            <h1 className="text-3xl sm:text-4xl font-bold text-white">{meta?.title ?? app.name}</h1>
          </div>
          <div className="flex flex-wrap gap-2 mb-3">
            {app.tags.map((tag) => (
              <span key={tag} className="text-xs bg-white/8 text-gray-300 border border-white/8 rounded-full px-3 py-1">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Long description */}
        <article
          className="prose prose-invert max-w-none mb-10"
          dangerouslySetInnerHTML={{ __html: html }}
        />

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-4 mb-12">
          <a
            href={stripPort(app.fqdn)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-violet-600 hover:bg-violet-500 text-white font-semibold rounded-xl px-6 py-3 transition-colors"
          >
            サービスを開く
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 text-gray-300 font-medium rounded-xl px-6 py-3 border border-white/10 transition-colors"
          >
            ← サービス一覧に戻る
          </Link>
        </div>

        {/* Related apps */}
        {related.length > 0 && (
          <div className="border-t border-white/8 pt-8">
            <h2 className="text-xl font-bold text-white mb-4">関連サービス</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {related.map((a) => (
                <Link
                  key={a.slug}
                  href={`/apps/${a.slug}`}
                  className="flex items-center gap-3 rounded-xl border border-white/8 bg-white/3 hover:bg-white/6 hover:border-white/15 transition-all p-4"
                >
                  <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-gray-400 text-xs font-bold shrink-0">
                    {a.name.slice(0, 2).toUpperCase()}
                  </div>
                  <div>
                    <p className="text-white font-medium text-sm">{a.name}</p>
                    <p className="text-gray-500 text-xs line-clamp-1">{a.shortDescription}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

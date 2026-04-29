import AppGrid from "./AppGrid";
import Footer from "./Footer";
import HikamaniClock from "./HikamaniClock";
import Image from "next/image";
import Link from "next/link";
import { getAllPosts } from "@/lib/posts";
import { getAllAppMetas, AppMeta } from "@/lib/apps";

type CoolifyApp = { name: string; fqdn: string | null };
type Sponsor = { userId: string; displayName: string; avatar: string | null; slug: string; big: boolean; expiresAt: string | null };

async function getApps(): Promise<CoolifyApp[]> {
  const headers = { Authorization: `Bearer ${process.env.COOLIFY_TOKEN}` };
  const opts = { headers, next: { revalidate: 60 } };

  const [appsRes, servicesRes] = await Promise.all([
    fetch(`${process.env.COOLIFY_URL}/api/v1/applications`, opts),
    fetch(`${process.env.COOLIFY_URL}/api/v1/services`, opts),
  ]);

  const apps: CoolifyApp[] = await appsRes.json();

  type Service = { name: string; applications: CoolifyApp[] };
  const services: Service[] = await servicesRes.json();
  const serviceApps = services.flatMap((s) =>
    s.applications.filter((a) => a.fqdn).map((a) => ({ name: a.name, fqdn: a.fqdn }))
  );

const EXCLUDED = ["discord-auth-bot", "discordauth"];

  return [...apps, ...serviceApps].filter((a) => a.fqdn && !EXCLUDED.includes(a.name));
}

async function getSponsors(): Promise<Sponsor[]> {
  try {
    const res = await fetch(
      `${process.env.HKM_API_URL || "https://hikakinmaniacoin.hikamer.f5.si"}/api/sponsors`,
      { next: { revalidate: 60 } }
    );
    if (!res.ok) return [];
    return res.json();
  } catch {
    return [];
  }
}

export default async function Home() {
  const [apps, sponsors] = await Promise.all([getApps(), getSponsors()]);
  const bigSponsors = sponsors.filter((s) => s.big);
  const normalSponsors = sponsors.filter((s) => !s.big);
  const recentPosts = getAllPosts().slice(0, 3);
  const allMetas = getAllAppMetas();

  return (
    <div className="min-h-screen" style={{ background: "var(--background)" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "hikamer's portal",
            url: "https://hikamer.f5.si",
            description: "ヒカマー界隈のWebサービス・ツール・ゲーム集ポータルサイト",
            author: { "@type": "Person", name: "hikamer", url: "https://x.com/maebahesioru2" },
          }),
        }}
      />
      {/* Hero */}
      <div className="relative overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-950/40 via-transparent to-cyan-950/30 pointer-events-none" />
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-violet-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -top-16 right-0 w-80 h-80 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative max-w-6xl mx-auto px-6 py-16">
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-3 py-1 text-xs text-gray-400 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            {apps.length} apps running
          </div>
          <h1 className="text-5xl font-bold tracking-tight bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent mb-3">
            hikamer&apos;s portal
          </h1>
          <p className="text-gray-400 text-lg">Webサービス・ツール・ゲーム集</p>
        </div>
      </div>

      {/* Grid */}
      <main>
        <AppGrid apps={apps.map((a) => ({ name: a.name, fqdn: a.fqdn! }))} allMetas={allMetas} />

        {/* Sponsors */}
        {sponsors.length > 0 && (
          <div className="max-w-6xl mx-auto px-6 pb-10">
            <div className="rounded-2xl border border-yellow-500/20 bg-yellow-500/5 p-8">
              <div className="flex items-center gap-2 mb-6">
                <h2 className="text-xl font-bold text-yellow-400">スポンサー</h2>
                <a href="https://hikakinmaniacoin.hikamer.f5.si/shop" target="_blank" rel="noopener noreferrer" className="text-xs text-yellow-600 hover:text-yellow-400 ml-auto">HKMで掲載する →</a>
              </div>
              {bigSponsors.length > 0 && (
                <div className="flex flex-wrap gap-4 mb-6">
                  {bigSponsors.map((s) => (
                    <div key={s.userId} className="flex items-center gap-3 bg-yellow-500/10 border border-yellow-500/30 rounded-xl px-5 py-3">
                      {s.avatar && <Image src={s.avatar} alt={s.displayName} width={48} height={48} className="rounded-full" />}
                      <span className="text-lg font-bold text-yellow-300">{s.displayName}</span>
                    </div>
                  ))}
                </div>
              )}
              {normalSponsors.length > 0 && (
                <div className="flex flex-wrap gap-3">
                  {normalSponsors.map((s) => (
                    <div key={s.userId} className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-lg px-3 py-2">
                      {s.avatar && <Image src={s.avatar} alt={s.displayName} width={28} height={28} className="rounded-full" />}
                      <span className="text-sm text-gray-300">{s.displayName}</span>
                      {s.expiresAt && <span className="text-xs text-gray-500">{new Date(s.expiresAt).toLocaleDateString("ja-JP")}まで</span>}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

        {/* Blog */}
        <div className="max-w-6xl mx-auto px-6 pb-10">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-white">開発ブログ</h2>
            <Link href="/blog" className="text-sm text-violet-400 hover:text-violet-300 transition-colors">すべて見る →</Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {recentPosts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="block p-5 rounded-2xl border border-white/8 bg-white/3 hover:bg-white/6 hover:border-white/15 transition-all">
                <time className="text-xs text-gray-500 mb-2 block">{post.date}</time>
                <h3 className="text-lg font-bold text-white mb-2 line-clamp-2">{post.title}</h3>
                <p className="text-sm text-gray-400 line-clamp-2">{post.excerpt}</p>
              </Link>
            ))}
          </div>
        </div>

        {/* About */}
        <div className="max-w-6xl mx-auto px-6 pb-10">
        <div className="rounded-2xl border border-white/8 bg-white/3 p-8">
          <h2 className="text-xl font-bold text-white mb-4">ヒカマーとは？</h2>
          <div className="text-gray-400 leading-relaxed space-y-3 text-sm">
            <p>
              <span className="text-white font-medium">ヒカマー</span>とは、ヒカキン（ヒカマニ）とネットミーム文化を組み合わせたコンテンツを好む人々、およびX上に形成されたその界隈のこと。名付け親はうきうさとされている。
            </p>
            <p>
              ヒカマー界隈は界隈独自の動画文化を容認する派が多く、ヒカマニ・ミーム文化にとどまらず政治的発言も目立つ独自のコミュニティ。垢名に「〇〇_mania」を付けたり、ヒカマー語録・独自ハッシュタグ文化（ヒカマーズアルカイダ、ヒカマーズ情報開示など）を持つ。
            </p>
            <p>
              一方、音MAD界隈では賛否の分かれる投稿文化として扱われることもある。
            </p>
          </div>
          <a
            href="https://hikamers.net/wiki/%E3%83%A1%E3%82%A4%E3%83%B3%E3%83%9A%E3%83%BC%E3%82%B8"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 mt-5 text-sm text-violet-400 hover:text-violet-300 transition-colors"
          >
            詳しくはヒカマーズWikiへ →
          </a>
        </div>
        </div>

        {/* ヒカマニ暦 */}
        <div className="max-w-6xl mx-auto px-6 pb-10">
        <div className="rounded-2xl border border-white/8 bg-white/3 p-8">
          <h2 className="text-xl font-bold text-white mb-4">ヒカマニ暦</h2>
          <div className="text-gray-400 leading-relaxed space-y-3 text-sm">
            <p>
              <span className="text-white font-medium">ヒカマニ暦</span>とは、ヒカマニ（ヒカキン）が動画投稿を開始した<span className="text-white font-medium">2017年を元年</span>とする独自の暦。西暦・仏暦・皇暦・和暦に代わる新たな時間軸として提唱されている。
            </p>
            <p>
              ヒカマニ暦以前の年代は <span className="text-white font-medium">B.H.（Before Hikamani）</span> で表記する。例：ヒカキン誕生は B.H.28（西暦1989年）、セイキン誕生は B.H.30（西暦1987年）。
            </p>
            <p>
              ヒカマーは<span className="text-white font-medium">ヒカマニ暦3年（西暦2019年・令和元年）</span>に誕生した。令和の幕開けと同年であり、ヒカマー紀元年とも呼ばれる。
            </p>
            <div className="space-y-2 text-xs text-gray-500 border-t border-white/8 pt-3 mt-1">
              <p><span className="text-gray-400">元日（1月28日）</span>：マニアさんの初投稿日</p>
              <p><span className="text-gray-400">元素マニアの日（2月10日）</span>：ヒカキンが元素マニアと自称した日</p>
              <p><span className="text-gray-400">ヒカマーサーフィンの日（3月11日）</span>：特定の投稿者が話題のツイートをしたのが元ネタ</p>
              <p><span className="text-gray-400">光誕祭（4月21日）</span>：ヒカキンの誕生日</p>
              <p><span className="text-gray-400">凍結の日（5月11日）</span>：2025年に起こったヒカマー一斉凍結が元ネタ</p>
              <p><span className="text-gray-400">聖誕祭（7月30日）</span>：セイキンの誕生日</p>
              <p><span className="text-gray-400">夏の記念日（8月10日）</span>：やじゅう＝810</p>
              <p><span className="text-gray-400">ヒカマー記念日（10月26日）</span>：界隈の有名投稿者が「人気コンテンツ『hikakin_mania』」を投稿した日。現時点で確認できる最古のヒカマー関連資料であり、ヒカマーの起点と位置付けられている。</p>
              <p><span className="text-gray-400">ヒカニチ記念日（11月9日）</span>：2022年、TikTokで活動するヒカマー（@hikashin_mania氏）が区別を付けようと思いヒカニチと名付けた日。その後ヒカニチ動画はYouTubeにも進出し、ヒカマニ界隈に広く認知されていった。</p>
              <p><span className="text-gray-400">日魚終日（12月3日）</span>：ヒカキンが「日本産の魚介類は終わってます」と発言した日</p>
            </div>
          </div>
          <HikamaniClock />
        </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

import AppGrid from "./AppGrid";
import Footer from "./Footer";
import HikamaniClock from "./HikamaniClock";

type CoolifyApp = { name: string; fqdn: string | null };

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

export default async function Home() {
  const apps = await getApps();

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
        <AppGrid apps={apps.map((a) => ({ name: a.name, fqdn: a.fqdn! }))} />

        {/* About */}
        <div className="max-w-6xl mx-auto px-6 pb-10">
        <div className="rounded-2xl border border-white/8 bg-white/3 p-8">
          <h2 className="text-xl font-bold text-white mb-4">ヒカマーとは？</h2>
          <div className="text-gray-400 leading-relaxed space-y-3 text-sm">
            <p>
              <span className="text-white font-medium">ヒカマー</span>とは、ヒカキン（ヒカマニ）と淫夢を組み合わせたコンテンツ（ヒカ淫）を好む人々、およびX上に形成されたその界隈のこと。名前の由来は「ヒカキン＋インマー」で、名付け親はうきうさとされている。
            </p>
            <p>
              ヒカマー界隈はヒカ淫容認派が多く、ヒカマニ・淫夢文化にとどまらず政治的発言も目立つ独自のコミュニティ。垢名に「〇〇_mania」を付けたり、ヒカマー語録・独自ハッシュタグ文化（ヒカマーズアルカイダ、ヒカマーズ情報開示など）を持つ。
            </p>
            <p>
              一方、音MAD界隈では荒らし行為や不謹慎ネタへの反発から禁忌の存在として扱われることも多い。
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
            <p className="text-xs text-gray-500">元日：1月28日　／　光誕祭：4月21日（ヒカキン誕生日）　／　凍結の日：5月11日　／　聖誕祭：7月30日（セイキン誕生日）　／　野獣の日：8月10日</p>
          </div>
          <HikamaniClock />
        </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

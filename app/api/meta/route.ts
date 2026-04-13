import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const url = req.nextUrl.searchParams.get("url");
  if (!url) return NextResponse.json({}, { status: 400 });

  try {
    const res = await fetch(url, { signal: AbortSignal.timeout(5000) });
    const html = await res.text();

    const getMeta = (attr: string, value: string) => {
      const patterns = [
        new RegExp(`<meta[^>]+${attr}=["']${value}["'][^>]+content=["']([^"']+)["']`, "i"),
        new RegExp(`<meta[^>]+content=["']([^"']+)["'][^>]+${attr}=["']${value}["']`, "i"),
      ];
      for (const p of patterns) {
        const m = html.match(p);
        if (m) return m[1];
      }
      return null;
    };

    const title =
      getMeta("property", "og:title") ??
      html.match(/<title[^>]*>([^<]+)<\/title>/i)?.[1] ?? null;

    const description =
      getMeta("property", "og:description") ??
      getMeta("name", "description");

    const ogImageRaw = getMeta("property", "og:image");
    const base = new URL(url);
    const toHttps = (u: string | null) => u ? u.replace(/^http:\/\//i, "https://") : null;
    const toAbsolute = (u: string | null) => u
      ? (u.startsWith("http") ? u : `${base.origin}${u.startsWith("/") ? "" : "/"}${u}`)
      : null;

    // <link rel="icon"> or <link rel="shortcut icon"> を優先、なければ /favicon.ico
    const faviconPath =
      html.match(/<link[^>]+rel=["'][^"']*icon[^"']*["'][^>]+href=["']([^"']+)["']/i)?.[1] ??
      html.match(/<link[^>]+href=["']([^"']+)["'][^>]+rel=["'][^"']*icon[^"']*["']/i)?.[1] ??
      "/favicon.ico";

    const favicon = toAbsolute(faviconPath.split("?")[0]);
    const ogImage = toAbsolute(ogImageRaw);

    return NextResponse.json({ title, description, ogImage: toHttps(ogImage), favicon: toHttps(favicon) });
  } catch {
    return NextResponse.json({});
  }
}

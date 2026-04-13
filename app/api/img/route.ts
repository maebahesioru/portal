import { NextRequest, NextResponse } from "next/server";
import sharp from "sharp";

export async function GET(req: NextRequest) {
  const url = req.nextUrl.searchParams.get("url");
  const w = parseInt(req.nextUrl.searchParams.get("w") ?? "32");
  if (!url) return new NextResponse(null, { status: 400 });

  try {
    const res = await fetch(url, { signal: AbortSignal.timeout(5000) });
    if (!res.ok) return new NextResponse(null, { status: 404 });

    const buf = Buffer.from(await res.arrayBuffer());

    // ICOはsharpが不安定なのでそのまま返す
    const isIco = url.toLowerCase().includes(".ico");
    if (isIco) {
      return new NextResponse(buf as unknown as BodyInit, {
        headers: {
          "Content-Type": "image/x-icon",
          "Cache-Control": "public, max-age=86400",
        },
      });
    }

    const webp = await sharp(buf)
      .resize(w, null, { withoutEnlargement: true })
      .webp({ quality: 80 })
      .toBuffer();

    return new NextResponse(webp as unknown as BodyInit, {
      headers: {
        "Content-Type": "image/webp",
        "Cache-Control": "public, max-age=86400",
      },
    });
  } catch {
    return new NextResponse(null, { status: 500 });
  }
}

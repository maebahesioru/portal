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

    // ICO/SVGはsharpが不安定なのでそのまま返す
    const ext = url.toLowerCase().split("?")[0].split(".").pop() ?? "";
    if (["ico", "svg"].includes(ext)) {
      const ct = ext === "svg" ? "image/svg+xml" : "image/x-icon";
      return new NextResponse(buf as unknown as BodyInit, {
        headers: { "Content-Type": ct, "Cache-Control": "public, max-age=86400" },
      });
    }

    try {
      const webp = await sharp(buf)
        .resize(w, null, { withoutEnlargement: true })
        .webp({ quality: 80 })
        .toBuffer();
      return new NextResponse(webp as unknown as BodyInit, {
        headers: { "Content-Type": "image/webp", "Cache-Control": "public, max-age=86400" },
      });
    } catch {
      // sharpが失敗したらそのまま返す
      return new NextResponse(buf as unknown as BodyInit, {
        headers: { "Cache-Control": "public, max-age=86400" },
      });
    }
  } catch {
    return new NextResponse(null, { status: 500 });
  }
}

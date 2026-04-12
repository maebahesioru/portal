import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 1200,
          height: 630,
          background: "#0d0d14",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* Background glow */}
        <div
          style={{
            position: "absolute",
            top: -100,
            left: -100,
            width: 500,
            height: 500,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(139,92,246,0.15) 0%, transparent 70%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -50,
            right: 0,
            width: 400,
            height: 400,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(6,182,212,0.1) 0%, transparent 70%)",
          }}
        />
        {/* Badge */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            background: "rgba(255,255,255,0.05)",
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: 999,
            padding: "6px 16px",
            width: "fit-content",
            marginBottom: 32,
          }}
        >
          <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#34d399" }} />
          <span style={{ color: "#9ca3af", fontSize: 18 }}>Webサービス・ツール・ゲーム集</span>
        </div>
        {/* Title */}
        <div
          style={{
            fontSize: 80,
            fontWeight: 700,
            color: "white",
            lineHeight: 1.1,
            marginBottom: 24,
          }}
        >
          hikamer&apos;s portal
        </div>
        {/* Description */}
        <div style={{ fontSize: 28, color: "#6b7280" }}>
          ヒカマー界隈のWebサービスをまとめたポータルサイト
        </div>
      </div>
    ),
    size
  );
}

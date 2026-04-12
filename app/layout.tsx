import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./Header";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin", "latin-ext"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

const SITE_URL = "https://portal.hikamer.f5.si";
const SITE_NAME = "hikamer's portal";
const DESCRIPTION = "ヒカマー界隈のWebサービス・ツール・ゲーム集ポータルサイト。SearXNG、UNO、ヒカマーズライブラリなど多数のサービスを公開中。";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`,
  },
  description: DESCRIPTION,
  keywords: ["ヒカマー", "ヒカマニ", "ヒカ淫", "hikamer", "ポータル", "Webサービス", "ツール", "ゲーム", "SearXNG", "UNO"],
  authors: [{ name: "hikamer", url: "https://x.com/maebahesioru2" }],
  creator: "hikamer",
  publisher: "hikamer",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: SITE_NAME,
    description: DESCRIPTION,
  },
  twitter: {
    card: "summary",
    title: SITE_NAME,
    description: DESCRIPTION,
    creator: "@maebahesioru2",
  },
  alternates: {
    canonical: SITE_URL,
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ja" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <Header />
        {children}
      </body>
    </html>
  );
}

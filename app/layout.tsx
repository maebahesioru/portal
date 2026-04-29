import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./Header";
import Footer from "./Footer";
import CookieBanner from "./CookieBanner";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin", "latin-ext"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

const SITE_URL = "https://hikamer.f5.si";
const SITE_NAME = "hikamer's portal";
const DESCRIPTION = "個人開発者十字架_maniaが開発・運営するWebサービス・ツール・ゲームのポータルサイト。Next.js、TypeScript、Coolifyを使った開発ノウハウや運用事例を発信しています。";

// rebuild trigger
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`,
  },
  description: DESCRIPTION,
  keywords: ["ヒカマー", "ヒカマニ", "hikamer", "ポータル", "Webサービス", "ツール", "ゲーム", "SearXNG", "UNO"],
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
  other: {
    "google-adsense-account": "ca-pub-9868361167191737",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ja" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`} suppressHydrationWarning>
      <head suppressHydrationWarning>
        <link rel="preconnect" href="https://pagead2.googlesyndication.com" />
        <link rel="preconnect" href="https://fundingchoicesmessages.google.com" />
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9868361167191737" crossOrigin="anonymous"></script>
      </head>
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}

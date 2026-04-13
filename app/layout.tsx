import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./Header";
import CookieBanner from "./CookieBanner";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin", "latin-ext"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

const SITE_URL = "https://hikamer.f5.si";
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
  other: {
    "google-adsense-account": "ca-pub-9868361167191737",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ja" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`} suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://pagead2.googlesyndication.com" />
        <link rel="preconnect" href="https://fundingchoicesmessages.google.com" />
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9868361167191737" crossOrigin="anonymous"></script>
        {/* InMobi Choice CMP for TCF 2.3 */}
        <script dangerouslySetInnerHTML={{ __html: `(function() {
  var host = "www.themoneytizer.com";
  var element = document.createElement('script');
  var firstScript = document.getElementsByTagName('script')[0];
  var url = 'https://cmp.inmobi.com'.concat('/choice/', '6Fv0cGNfc_bw8', '/', host, '/choice.js?tag_version=V3');
  var uspTries = 0;
  var uspTriesLimit = 3;
  element.async = true;
  element.type = 'text/javascript';
  element.src = url;
  firstScript.parentNode.insertBefore(element, firstScript);
  function makeStub() {
    var TCF_LOCATOR_NAME = '__tcfapiLocator';
    var queue = [];
    var win = window;
    var cmpFrame;
    function addFrame() {
      var doc = win.document;
      var otherCMP = !!(win.frames[TCF_LOCATOR_NAME]);
      if (!otherCMP) {
        if (doc.body) {
          var iframe = doc.createElement('iframe');
          iframe.style.cssText = 'display:none';
          iframe.name = TCF_LOCATOR_NAME;
          doc.body.appendChild(iframe);
        } else { setTimeout(addFrame, 5); }
      }
      return !otherCMP;
    }
    function tcfAPIHandler() {
      var gdprApplies;
      var args = arguments;
      if (!args.length) { return queue; }
      else if (args[0] === 'setGdprApplies') {
        if (args.length > 3 && args[2] === 2 && typeof args[3] === 'boolean') {
          gdprApplies = args[3];
          if (typeof args[2] === 'function') { args[2]('set', true); }
        }
      } else if (args[0] === 'ping') {
        var retr = { gdprApplies: gdprApplies, cmpLoaded: false, cmpStatus: 'stub' };
        if (typeof args[2] === 'function') { args[2](retr); }
      } else {
        if (args[0] === 'init' && typeof args[3] === 'object') { args[3] = Object.assign(args[3], { tag_version: 'V3' }); }
        queue.push(args);
      }
    }
    function postMessageEventHandler(event) {
      var msgIsString = typeof event.data === 'string';
      var json = {};
      try { json = msgIsString ? JSON.parse(event.data) : event.data; } catch (ignore) {}
      var payload = json.__tcfapiCall;
      if (payload) {
        window.__tcfapi(payload.command, payload.version, function(retValue, success) {
          var returnMsg = { __tcfapiReturn: { returnValue: retValue, success: success, callId: payload.callId } };
          if (msgIsString) { returnMsg = JSON.stringify(returnMsg); }
          if (event && event.source && event.source.postMessage) { event.source.postMessage(returnMsg, '*'); }
        }, payload.parameter);
      }
    }
    while (win) {
      try { if (win.frames[TCF_LOCATOR_NAME]) { cmpFrame = win; break; } } catch (ignore) {}
      if (win === window.top) { break; }
      win = win.parent;
    }
    if (!cmpFrame) { addFrame(); win.__tcfapi = tcfAPIHandler; win.addEventListener('message', postMessageEventHandler, false); }
  };
  makeStub();
  var uspStubFunction = function() {
    var arg = arguments;
    if (typeof window.__uspapi !== uspStubFunction) {
      setTimeout(function() { if (typeof window.__uspapi !== 'undefined') { window.__uspapi.apply(window.__uspapi, arg); } }, 500);
    }
  };
  var checkIfUspIsReady = function() {
    uspTries++;
    if (window.__uspapi === uspStubFunction && uspTries < uspTriesLimit) { console.warn('USP is not accessible'); }
    else { clearInterval(uspInterval); }
  };
  if (typeof window.__uspapi === 'undefined') { window.__uspapi = uspStubFunction; var uspInterval = setInterval(checkIfUspIsReady, 6000); }
})();` }} />
      </head>
      <body className="min-h-full flex flex-col">
        <Header />
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}

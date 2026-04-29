"use client";

import { useState } from "react";
import AppCard from "./AppCard";
import { AppMeta } from "@/lib/apps";

function slugFromFqdn(fqdn: string): string | null {
  try {
    const u = new URL(fqdn);
    const host = u.hostname.split(".")[0];
    return host || null;
  } catch {
    return null;
  }
}

type App = { name: string; fqdn: string };

export default function AppGrid({ apps, allMetas }: { apps: App[]; allMetas: AppMeta[] }) {
  const [query, setQuery] = useState("");
  const filtered = apps.filter((a) => {
    const meta = allMetas.find((m) => m.name === a.name);
    return (
      a.name.toLowerCase().includes(query.toLowerCase()) ||
      (meta?.shortDescription ?? "").toLowerCase().includes(query.toLowerCase()) ||
      (meta?.tags ?? []).some((t) => t.toLowerCase().includes(query.toLowerCase()))
    );
  });

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
      {/* Search */}
      <div className="relative mb-6">
        <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" />
        </svg>
        <input
          type="search"
          placeholder="サービスを検索..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full sm:w-72 bg-white/5 border border-white/10 rounded-xl pl-9 pr-4 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-violet-500/50 focus:bg-white/8 transition-all"
        />
      </div>

      {filtered.length === 0 ? (
        <p className="text-gray-500 text-sm py-10 text-center">「{query}」に一致するサービスが見つかりませんでした</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filtered.map((app) => {
            const meta = allMetas.find((m) => m.name === app.name);
            const slug = meta?.slug ?? slugFromFqdn(app.fqdn) ?? app.name;
            return (
              <AppCard
                key={app.name}
                slug={slug}
                name={app.name}
                fqdn={app.fqdn}
                staticDescription={meta?.shortDescription}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}

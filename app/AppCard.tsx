"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import PlaceholderImage from "./PlaceholderImage";

type Meta = {
  title: string | null;
  description: string | null;
  ogImage: string | null;
  favicon: string | null;
};

export default function AppCard({ name, fqdn, staticDescription }: { name: string; fqdn: string; staticDescription?: string }) {
  const [meta, setMeta] = useState<Meta | null>(null);
  const [imgError, setImgError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`/api/meta?url=${encodeURIComponent(fqdn)}`)
      .then((r) => r.json())
      .then((d) => { setMeta(d); setLoading(false); })
      .catch(() => { setMeta({} as Meta); setLoading(false); });
  }, [fqdn]);

  const showOgImage = meta?.ogImage && !imgError;

  return (
    <a
      href={fqdn}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col rounded-2xl overflow-hidden border border-white/8 bg-white/3 hover:bg-white/6 hover:border-white/15 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-black/40"
    >
      {/* Thumbnail */}
      <div className="relative w-full h-40 bg-white/3 overflow-hidden">
        {loading ? (
          <div className="w-full h-full animate-pulse bg-white/5" />
        ) : showOgImage ? (
          <Image
            src={meta!.ogImage!}
            alt={name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            onError={() => setImgError(true)}
          />
        ) : (
          <PlaceholderImage name={name} />
        )}
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
      </div>

      {/* Info */}
      <div className="p-4 flex flex-col gap-1.5">
        <div className="flex items-center gap-2">
          {meta?.favicon && (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={meta.favicon}
              alt=""
              className="w-4 h-4 shrink-0 rounded-sm"
              onError={(e) => (e.currentTarget.style.display = "none")}
            />
          )}
          <span className="font-semibold text-sm text-white/90 truncate">
            {loading ? (
              <span className="inline-block w-24 h-3.5 rounded bg-white/10 animate-pulse" />
            ) : (
              meta?.title ?? name
            )}
          </span>
        </div>
        {!loading && (meta?.description || staticDescription) && (
          <p className="text-xs text-gray-400 line-clamp-2 leading-relaxed">{meta?.description ?? staticDescription}</p>
        )}
        {loading && (
          <span className="inline-block w-full h-3 rounded bg-white/5 animate-pulse" />
        )}
        <span className="text-xs text-gray-400 truncate mt-0.5">{fqdn}</span>
      </div>
    </a>
  );
}

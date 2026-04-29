"use client";

import { useState } from "react";
import Image from "next/image";
import PlaceholderImage from "../../PlaceholderImage";

export default function OgpImage({ src, name, displayName }: { src: string; name: string; displayName?: string }) {
  const [error, setError] = useState(false);

  if (error) {
    return (
      <div className="w-full h-56 sm:h-80 rounded-2xl overflow-hidden mb-8 border border-white/8">
        <PlaceholderImage name={name} displayName={displayName} />
      </div>
    );
  }

  return (
    <div className="relative w-full h-56 sm:h-80 rounded-2xl overflow-hidden mb-8 border border-white/8">
      <Image
        src={`/api/img?url=${encodeURIComponent(src)}&w=800`}
        alt={name}
        fill
        sizes="(max-width: 768px) 100vw, 800px"
        className="object-cover"
        unoptimized
        priority
        onError={() => setError(true)}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
    </div>
  );
}

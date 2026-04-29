export default function PlaceholderImage({ name, displayName }: { name: string; displayName?: string }) {
  const hue = [...name].reduce((acc, c) => acc + c.charCodeAt(0), 0) % 360;
  const hue2 = (hue + 60) % 360;
  const initials = (displayName ?? name).slice(0, 2).toUpperCase();

  return (
    <div
      className="w-full h-full relative overflow-hidden flex items-center justify-center select-none"
      style={{ background: `linear-gradient(135deg, hsl(${hue},60%,15%) 0%, hsl(${hue2},60%,10%) 100%)` }}
    >
      {/* Grid pattern */}
      <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id={`grid-${hue}`} width="24" height="24" patternUnits="userSpaceOnUse">
            <path d="M 24 0 L 0 0 0 24" fill="none" stroke="white" strokeWidth="0.5"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#grid-${hue})`}/>
      </svg>
      {/* Glow */}
      <div
        className="absolute w-32 h-32 rounded-full blur-3xl opacity-30"
        style={{ background: `hsl(${hue},80%,60%)` }}
      />
      {/* Initials */}
      <div className="relative flex flex-col items-center gap-1">
        <span
          className="text-4xl font-bold tracking-widest"
          style={{ color: `hsl(${hue},80%,80%)`, textShadow: `0 0 20px hsl(${hue},80%,60%)` }}
        >
          {initials}
        </span>
        <span className="text-xs text-white/40 tracking-widest uppercase">{displayName ?? name}</span>
      </div>
    </div>
  );
}

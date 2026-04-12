export default function PlaceholderImage({ name }: { name: string }) {
  const initials = name.slice(0, 2).toUpperCase();
  const hue = [...name].reduce((acc, c) => acc + c.charCodeAt(0), 0) % 360;

  return (
    <div
      className="w-full h-48 flex items-center justify-center text-white text-3xl font-bold select-none"
      style={{ background: `hsl(${hue},50%,30%)` }}
    >
      {initials}
    </div>
  );
}

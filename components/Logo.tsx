export function Logo({ size = 28 }: { size?: number }) {
  return (
    <span className="inline-flex items-center gap-2 font-extrabold tracking-tight">
      <span
        aria-hidden
        style={{ fontSize: size }}
        className="leading-none drop-shadow-[0_0_12px_rgba(255,59,59,0.6)]"
      >
        🌶️
      </span>
      <span style={{ fontSize: size * 0.78 }} className="gradient-text">
        SpicyPick
      </span>
    </span>
  );
}

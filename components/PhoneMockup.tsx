export function PhoneMockup() {
  return (
    <div className="relative mx-auto w-full max-w-[300px] animate-float">
      <div className="absolute -inset-6 -z-10 rounded-[60px] bg-gradient-to-br from-spicy-500/30 via-neon-pink/20 to-neon-purple/30 blur-3xl" />
      <div className="rounded-[44px] border border-white/10 bg-gradient-to-b from-[#1a1a2e] to-[#0a0a14] p-3 shadow-2xl shadow-spicy-500/20">
        <div className="overflow-hidden rounded-[34px] bg-[#0d0d1f]">
          {/* status bar */}
          <div className="flex items-center justify-between px-6 pt-4 text-[10px] text-white/60">
            <span>9:41</span>
            <span className="h-2 w-16 rounded-full bg-black" />
            <span>100%</span>
          </div>

          {/* header */}
          <div className="px-5 pt-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-xl">🌶️</span>
                <span className="text-sm font-bold text-white">Today&apos;s pick</span>
              </div>
              <span className="text-[10px] uppercase tracking-widest text-spicy-400">
                Day 47
              </span>
            </div>
          </div>

          {/* scenario card */}
          <div className="m-5 rounded-3xl border border-white/10 bg-gradient-to-br from-spicy-500/20 to-neon-pink/10 p-5">
            <p className="text-xs font-semibold uppercase tracking-widest text-spicy-300">
              Scenario
            </p>
            <p className="mt-2 text-[15px] font-medium leading-snug text-white">
              Your best friend asks you to lie to their partner about where they
              were last night. Do you cover for them?
            </p>
          </div>

          {/* verdict buttons */}
          <div className="space-y-2 px-5 pb-5">
            <Verdict label="🛡️  Always cover" pct={28} />
            <Verdict label="🤐  Stay out of it" pct={41} highlight />
            <Verdict label="💬  Tell the truth" pct={24} />
            <Verdict label="🔥  Expose them" pct={7} />
          </div>

          {/* streak */}
          <div className="mx-5 mb-5 flex items-center justify-between rounded-2xl border border-white/5 bg-black/30 px-4 py-3">
            <span className="text-xs text-white/60">Streak</span>
            <span className="text-sm font-bold text-spicy-400">🔥 47 days</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function Verdict({
  label,
  pct,
  highlight = false,
}: {
  label: string;
  pct: number;
  highlight?: boolean;
}) {
  return (
    <div
      className={`relative overflow-hidden rounded-xl border px-3 py-2 text-xs ${
        highlight
          ? "border-spicy-400/60 bg-spicy-500/10 text-white"
          : "border-white/10 bg-white/[0.03] text-white/80"
      }`}
    >
      <div
        aria-hidden
        className={`absolute inset-y-0 left-0 ${
          highlight ? "bg-spicy-500/30" : "bg-white/[0.06]"
        }`}
        style={{ width: `${pct}%` }}
      />
      <div className="relative flex items-center justify-between">
        <span>{label}</span>
        <span className="font-bold">{pct}%</span>
      </div>
    </div>
  );
}

import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { StoreButtons } from "@/components/StoreButtons";
import { PhoneMockup } from "@/components/PhoneMockup";

export default function HomePage() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Stats />
        <Features />
        <HowItWorks />
        <Pricing />
        <Reviews />
        <Download />
      </main>
      <Footer />
    </>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 sm:px-8 md:grid-cols-2 md:py-24">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-spicy-500/30 bg-spicy-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-spicy-300">
            🌶️ New daily drop · 9 AM
          </span>
          <h1 className="mt-5 text-balance text-4xl font-extrabold leading-[1.05] sm:text-5xl md:text-6xl">
            Daily social dilemmas. <br />
            <span className="gradient-text">Vote, debate, judge.</span>
          </h1>
          <p className="mt-5 max-w-xl text-lg text-white/70">
            One real-life moral dilemma every single day. Cast your verdict,
            watch the world reveal its opinion, climb the leaderboard and
            challenge your friends.
          </p>
          <div className="mt-8">
            <StoreButtons />
          </div>
          <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/60">
            <li>✓ Free to play</li>
            <li>✓ No account required to vote</li>
            <li>✓ 7 languages</li>
          </ul>
        </div>
        <div className="flex justify-center">
          <PhoneMockup />
        </div>
      </div>
    </section>
  );
}

function Stats() {
  const items = [
    { value: "1", label: "Spicy dilemma every day" },
    { value: "4", label: "Verdicts to pick from" },
    { value: "10", label: "League tiers to climb" },
    { value: "7", label: "Languages supported" },
  ];
  return (
    <section className="border-y border-white/5 bg-black/20">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-5 py-10 sm:px-8 md:grid-cols-4">
        {items.map((s) => (
          <div key={s.label} className="text-center">
            <div className="gradient-text text-3xl font-extrabold sm:text-4xl">
              {s.value}
            </div>
            <div className="mt-1 text-xs uppercase tracking-widest text-white/50">
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

const FEATURES = [
  {
    emoji: "🔥",
    title: "Daily streaks",
    body: "Show up every day, keep your streak alive. Premium users get streak-freeze protection.",
  },
  {
    emoji: "🏆",
    title: "Weekly leagues",
    body: "10 tiers, 30 players each. Earn XP from votes, climb up, get demoted if you slack.",
  },
  {
    emoji: "🎭",
    title: "Friend challenges",
    body: "Send a dilemma to a friend, see who agrees with the crowd. Wordle-style emoji share.",
  },
  {
    emoji: "🧠",
    title: "Expert analysis",
    body: "Premium AI-powered breakdown of every dilemma — why people voted the way they did.",
  },
  {
    emoji: "🌍",
    title: "Global by default",
    body: "Available in EN, CS, DE, ES, PT, FR & JA — every dilemma localised, never auto-translated.",
  },
  {
    emoji: "🎯",
    title: "Themed packs",
    body: "Workplace, relationships, family drama, money — pick the categories that hit different.",
  },
];

function Features() {
  return (
    <section id="features" className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
      <SectionHeading
        kicker="Features"
        title="Tiny ritual. Big opinions."
        subtitle="Built for the 30 seconds between checking your phone and starting your day."
      />
      <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {FEATURES.map((f) => (
          <div
            key={f.title}
            className="glass rounded-2xl p-6 transition hover:border-spicy-500/30 hover:bg-spicy-500/5"
          >
            <div className="text-3xl">{f.emoji}</div>
            <h3 className="mt-3 text-lg font-bold text-white">{f.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-white/65">{f.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

const STEPS = [
  {
    n: "01",
    title: "Read today's dilemma",
    body: "A new social scenario drops every morning. No skim — read it, picture yourself in it.",
  },
  {
    n: "02",
    title: "Cast your verdict",
    body: "Pick one of four reactions. Your choice locks in until tomorrow.",
  },
  {
    n: "03",
    title: "See how the world voted",
    body: "Watch the live reveal, compare yourself to the crowd, share your verdict card.",
  },
];

function HowItWorks() {
  return (
    <section id="how" className="bg-black/20 py-20">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          kicker="How it works"
          title="Three taps. One verdict."
          subtitle="That's the whole loop. Show up, judge, see how you stack up."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {STEPS.map((s) => (
            <div
              key={s.n}
              className="relative overflow-hidden rounded-2xl border border-white/10 bg-surface/60 p-6"
            >
              <div className="gradient-text text-5xl font-black tracking-tight">
                {s.n}
              </div>
              <h3 className="mt-2 text-lg font-bold text-white">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/65">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const TIERS = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Everything you need to play the daily ritual.",
    features: [
      "Daily dilemma & verdict",
      "Streaks & XP",
      "Weekly leagues",
      "Friend challenges (3 / week)",
      "2 languages",
    ],
    cta: "Get started",
    highlight: false,
  },
  {
    name: "Premium",
    price: "$3.99",
    period: "/ month",
    description: "Spicy upgrades for the daily judges.",
    features: [
      "Everything in Free",
      "Full dilemma archive (1500+)",
      "AI expert analysis",
      "Streak-freeze protection",
      "Unlimited friend challenges",
      "All 7 languages",
      "Ad-free experience",
    ],
    cta: "Start free trial",
    highlight: true,
  },
  {
    name: "Premium Annual",
    price: "$29.99",
    period: "/ year",
    description: "Save 38% — for the truly committed.",
    features: [
      "All Premium features",
      "Themed packs (early access)",
      "Custom verdict cards",
      "Priority support",
    ],
    cta: "Save 38%",
    highlight: false,
  },
];

function Pricing() {
  return (
    <section id="pricing" className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
      <SectionHeading
        kicker="Pricing"
        title="Free to play. Spicy to upgrade."
        subtitle="Cancel anytime. No hidden charges. Premium pays for one new daily dilemma."
      />
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {TIERS.map((t) => (
          <div
            key={t.name}
            className={`relative rounded-3xl border p-8 transition ${
              t.highlight
                ? "border-spicy-500/40 bg-gradient-to-b from-spicy-500/10 to-transparent shadow-2xl shadow-spicy-500/10"
                : "border-white/10 bg-surface/40"
            }`}
          >
            {t.highlight && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-spicy-500 px-3 py-1 text-xs font-bold uppercase tracking-widest text-white">
                Most popular
              </span>
            )}
            <h3 className="text-xl font-bold text-white">{t.name}</h3>
            <p className="mt-1 text-sm text-white/55">{t.description}</p>
            <div className="mt-6 flex items-baseline gap-2">
              <span className="text-4xl font-extrabold text-white">{t.price}</span>
              <span className="text-sm text-white/55">{t.period}</span>
            </div>
            <ul className="mt-6 space-y-2.5 text-sm text-white/75">
              {t.features.map((f) => (
                <li key={f} className="flex items-start gap-2">
                  <span className="mt-0.5 text-spicy-400">✓</span>
                  <span>{f}</span>
                </li>
              ))}
            </ul>
            <a
              href="#download"
              className={`mt-8 block rounded-xl px-4 py-3 text-center text-sm font-semibold transition ${
                t.highlight
                  ? "bg-spicy-500 text-white hover:bg-spicy-400"
                  : "border border-white/15 text-white hover:bg-white/5"
              }`}
            >
              {t.cta}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

const REVIEWS = [
  {
    text: "Quickest 30 seconds of my day. I\u2019ve got my whole group chat hooked.",
    name: "Sara K.",
    role: "Designer \u00b7 London",
  },
  {
    text: "Wordle but spicier. The expert breakdown after voting is *chef\u2019s kiss*.",
    name: "Marco D.",
    role: "Software dev \u00b7 Berlin",
  },
  {
    text: "My morning coffee + SpicyPick + arguing with my partner over today\u2019s pick. 10/10.",
    name: "Jess T.",
    role: "Marketer \u00b7 NYC",
  },
];

function Reviews() {
  return (
    <section className="bg-black/20 py-20">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          kicker="Loved by judges worldwide"
          title="What players say"
          subtitle="Join thousands judging the world's hardest social calls every morning."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {REVIEWS.map((r) => (
            <figure key={r.name} className="glass rounded-2xl p-6">
              <div className="text-spicy-400 text-sm">
                {"\u2605\u2605\u2605\u2605\u2605"}
              </div>
              <blockquote className="mt-3 text-sm leading-relaxed text-white/85">
                {"\u201c"}
                {r.text}
                {"\u201d"}
              </blockquote>
              <figcaption className="mt-4 text-xs text-white/55">
                <span className="font-semibold text-white/80">{r.name}</span> ·{" "}
                {r.role}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function Download() {
  return (
    <section id="download" className="mx-auto max-w-5xl px-5 py-24 sm:px-8">
      <div className="relative overflow-hidden rounded-[40px] border border-spicy-500/20 bg-gradient-to-br from-spicy-500/20 via-neon-pink/10 to-neon-purple/20 px-8 py-16 text-center sm:px-16">
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-spicy-500/30 blur-3xl" />
          <div className="absolute -right-20 bottom-10 h-72 w-72 rounded-full bg-neon-pink/30 blur-3xl" />
        </div>
        <h2 className="text-balance text-3xl font-extrabold sm:text-5xl">
          Today&apos;s dilemma <span className="gradient-text">won&apos;t wait.</span>
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-white/75">
          Download SpicyPick, cast your first verdict in under 30 seconds, and
          see how spicy your moral compass really is.
        </p>
        <div className="mt-8 flex justify-center">
          <StoreButtons />
        </div>
      </div>
    </section>
  );
}

function SectionHeading({
  kicker,
  title,
  subtitle,
}: {
  kicker: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <span className="text-xs font-bold uppercase tracking-[0.25em] text-spicy-400">
        {kicker}
      </span>
      <h2 className="mt-3 text-balance text-3xl font-extrabold sm:text-4xl">
        {title}
      </h2>
      {subtitle && <p className="mt-4 text-white/65">{subtitle}</p>}
    </div>
  );
}

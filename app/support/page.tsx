import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { SupportForm } from "@/components/SupportForm";

export const metadata: Metadata = {
  title: "Support",
  description:
    "Need help with SpicyPick? Contact our team — we usually reply within 1 business day.",
};

export default function SupportPage() {
  return (
    <>
      <Nav />
      <main className="mx-auto max-w-3xl px-5 py-16 sm:px-8 md:py-24">
        <p className="text-xs uppercase tracking-widest text-spicy-400">
          Support
        </p>
        <h1 className="mt-3 text-4xl font-extrabold sm:text-5xl">
          We&apos;re here to help.
        </h1>
        <p className="mt-4 max-w-xl text-white/65">
          Got stuck on today&apos;s pick? Lost your streak? Want to suggest a
          dilemma? Drop us a line and we&apos;ll reply within 1 business day.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <ContactCard
            title="General"
            email="support@spicypick.com"
            label="Account, billing, gameplay"
          />
          <ContactCard
            title="Privacy"
            email="privacy@spicypick.com"
            label="GDPR, data exports, deletion"
          />
          <ContactCard
            title="Press"
            email="press@spicypick.com"
            label="Media kit & partnerships"
          />
        </div>

        <div className="mt-12 rounded-3xl border border-white/10 bg-surface/50 p-8">
          <h2 className="text-2xl font-bold">Send us a message</h2>
          <p className="mt-1 text-sm text-white/55">
            We&apos;ll reply to the email you provide. Please don&apos;t include
            passwords.
          </p>
          <div className="mt-6">
            <SupportForm />
          </div>
        </div>

        <Faq />
      </main>
      <Footer />
    </>
  );
}

function ContactCard({
  title,
  email,
  label,
}: {
  title: string;
  email: string;
  label: string;
}) {
  return (
    <a
      href={`mailto:${email}`}
      className="glass block rounded-2xl p-5 transition hover:border-spicy-500/30 hover:bg-spicy-500/5"
    >
      <div className="text-xs uppercase tracking-widest text-spicy-400">
        {title}
      </div>
      <div className="mt-2 text-base font-semibold text-white">{email}</div>
      <div className="mt-1 text-xs text-white/55">{label}</div>
    </a>
  );
}

const FAQ = [
  {
    q: "I lost my streak. Can I get it back?",
    a: "Premium users get one streak-freeze per week automatically. If you have proof that the app was down on the day you missed, drop us an email and we'll restore manually.",
  },
  {
    q: "How do I delete my account?",
    a: "In the app, go to Settings → Account → Delete account. Your data will be permanently removed within 30 days.",
  },
  {
    q: "Can I propose a dilemma?",
    a: "Yes — every logged-in user can submit scenarios. They go through moderation and the best ones are published.",
  },
  {
    q: "How do I cancel my subscription?",
    a: "Via your App Store or Google Play subscription settings. We can't cancel store-managed subscriptions from our side.",
  },
];

function Faq() {
  return (
    <section className="mt-16">
      <h2 className="text-2xl font-bold">Frequently asked</h2>
      <div className="mt-6 divide-y divide-white/10 rounded-2xl border border-white/10 bg-surface/40">
        {FAQ.map((item) => (
          <details key={item.q} className="group p-5">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-semibold text-white">
              {item.q}
              <span className="text-spicy-400 transition group-open:rotate-45">
                +
              </span>
            </summary>
            <p className="mt-3 text-sm leading-relaxed text-white/70">
              {item.a}
            </p>
          </details>
        ))}
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";

type Status = "idle" | "submitting" | "sent" | "error";

const SUPPORT_EMAIL = "support@spicypick.com";

export function SupportForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setError(null);

    const formData = new FormData(e.currentTarget);
    const payload = {
      name: (formData.get("name") || "").toString().trim(),
      email: (formData.get("email") || "").toString().trim(),
      subject: (formData.get("subject") || "").toString().trim(),
      message: (formData.get("message") || "").toString().trim(),
      // honeypot — bots fill this; humans don't see it
      website: (formData.get("website") || "").toString(),
    };

    if (payload.website) {
      // silently accept to avoid telling bots they were caught
      setStatus("sent");
      return;
    }
    if (!payload.email || !payload.message) {
      setError("Please fill in your email and a message.");
      setStatus("error");
      return;
    }

    try {
      const res = await fetch("/api/support", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        setStatus("sent");
        return;
      }

      // Fallback: if server is not configured, hand off to mailto.
      openMailto(payload);
      setStatus("sent");
    } catch {
      openMailto(payload);
      setStatus("sent");
    }
  }

  if (status === "sent") {
    return (
      <div className="rounded-2xl border border-spicy-500/30 bg-spicy-500/10 p-6 text-center">
        <div className="text-3xl">🌶️</div>
        <p className="mt-3 text-lg font-semibold text-white">Message received.</p>
        <p className="mt-1 text-sm text-white/70">
          We&apos;ll reply within 1 business day. If you don&apos;t hear back,
          email us directly at{" "}
          <a className="text-spicy-400 underline" href={`mailto:${SUPPORT_EMAIL}`}>
            {SUPPORT_EMAIL}
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Your name">
          <input
            name="name"
            type="text"
            autoComplete="name"
            className={inputCls}
            placeholder="Jamie"
          />
        </Field>
        <Field label="Email *" required>
          <input
            name="email"
            type="email"
            required
            autoComplete="email"
            className={inputCls}
            placeholder="jamie@example.com"
          />
        </Field>
      </div>
      <Field label="Subject">
        <input
          name="subject"
          type="text"
          className={inputCls}
          placeholder="Can't log in / billing question / feedback"
        />
      </Field>
      <Field label="Message *" required>
        <textarea
          name="message"
          required
          rows={6}
          className={`${inputCls} resize-y`}
          placeholder="Tell us what's up. The more detail, the faster we can help."
        />
      </Field>

      {/* honeypot */}
      <div className="hidden" aria-hidden>
        <label>
          Website
          <input name="website" type="text" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      {error && (
        <p className="text-sm text-spicy-300" role="alert">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex w-full items-center justify-center rounded-xl bg-spicy-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-spicy-500/30 transition hover:bg-spicy-400 disabled:opacity-60 sm:w-auto"
      >
        {status === "submitting" ? "Sending…" : "Send message"}
      </button>
      <p className="text-xs text-white/45">
        By sending you agree to our{" "}
        <a href="/privacy" className="underline hover:text-white/70">
          Privacy Policy
        </a>
        .
      </p>
    </form>
  );
}

function openMailto(p: {
  name: string;
  email: string;
  subject: string;
  message: string;
}) {
  const subject = p.subject || "SpicyPick support request";
  const body =
    `From: ${p.name || "(no name)"} <${p.email}>\n\n` + p.message;
  const url = `mailto:${SUPPORT_EMAIL}?subject=${encodeURIComponent(
    subject,
  )}&body=${encodeURIComponent(body)}`;
  if (typeof window !== "undefined") {
    window.location.href = url;
  }
}

const inputCls =
  "w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white placeholder-white/35 outline-none transition focus:border-spicy-500/60 focus:bg-black/50";

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-semibold uppercase tracking-widest text-white/55">
        {label}
        {required ? <span className="text-spicy-400"> *</span> : null}
      </span>
      {children}
    </label>
  );
}

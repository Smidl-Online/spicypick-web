import type { Metadata } from "next";
import { LegalLayout } from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How SpicyPick collects, uses and protects your personal data. GDPR compliant.",
};

export default function PrivacyPage() {
  return (
    <LegalLayout title="Privacy Policy" updated="May 29, 2026">
      <p>
        SpicyPick (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;) is
        operated by Šmídl Online. We respect your privacy and are committed to
        protecting your personal data. This Privacy Policy explains how we
        collect, use, and share information about you when you use the
        SpicyPick mobile applications and the website at spicypick.app
        (collectively, the &ldquo;Service&rdquo;). It complies with the EU
        General Data Protection Regulation (GDPR), the California Consumer
        Privacy Act (CCPA), and equivalent local laws.
      </p>

      <Section h="1. Data controller">
        The data controller is Šmídl Online, contact:{" "}
        <a href="mailto:privacy@spicypick.com" className="text-spicy-400 underline">
          privacy@spicypick.com
        </a>
        .
      </Section>

      <Section h="2. What we collect">
        <ul className="list-disc pl-6 space-y-1">
          <li>
            <strong>Account data:</strong> email, display name, password hash,
            authentication tokens.
          </li>
          <li>
            <strong>Gameplay data:</strong> verdicts, streaks, XP, league
            placement, friend challenges, submitted scenarios, in-app actions.
          </li>
          <li>
            <strong>Device data:</strong> device model, OS version, app version,
            language, time zone, anonymised IP.
          </li>
          <li>
            <strong>Diagnostics:</strong> crash reports and performance traces
            via Sentry. No personally identifying content of dilemmas is
            captured.
          </li>
          <li>
            <strong>Payment data:</strong> processed exclusively by Apple App
            Store, Google Play, and RevenueCat. We never receive your card
            details.
          </li>
        </ul>
      </Section>

      <Section h="3. Legal basis (GDPR)">
        We process your data under one of the following legal bases:
        performance of the contract (to provide the Service), legitimate
        interest (to improve and secure the Service), legal obligation (tax,
        accounting), and consent (for marketing communications and optional
        analytics).
      </Section>

      <Section h="4. How we use your data">
        <ul className="list-disc pl-6 space-y-1">
          <li>To deliver the daily dilemma, leagues, streaks and challenges.</li>
          <li>To moderate user-submitted scenarios.</li>
          <li>To prevent fraud, abuse and spam.</li>
          <li>To send transactional notifications (streak warnings, league results).</li>
          <li>To improve gameplay through anonymised analytics.</li>
        </ul>
      </Section>

      <Section h="5. Sharing">
        We share data only with: (a) sub-processors that make the Service work —
        hosting (Coolify/Hetzner, EU), database (PostgreSQL, EU), error tracking
        (Sentry), analytics (PostHog), push notifications (Expo), email (Resend),
        payments (RevenueCat, App Store, Google Play), AI analysis (Anthropic
        Claude); (b) authorities when required by law. We never sell your
        personal data.
      </Section>

      <Section h="6. Retention">
        Account data is kept while your account is active. After deletion, we
        remove or anonymise personal data within 30 days, except where retention
        is required by law (e.g. tax records for up to 10 years).
      </Section>

      <Section h="7. Your rights">
        You have the right to access, correct, delete, restrict or export your
        personal data, to object to processing, and to withdraw consent at any
        time. To exercise any right, email{" "}
        <a href="mailto:privacy@spicypick.com" className="text-spicy-400 underline">
          privacy@spicypick.com
        </a>
        . You can export or delete your data directly from the app under{" "}
        <em>Settings → Account</em>. You may also lodge a complaint with your
        local supervisory authority.
      </Section>

      <Section h="8. Children">
        SpicyPick is not directed at children under 13 (or 16 in the EEA). We do
        not knowingly collect data from minors. If you believe a child has
        provided personal data, contact us and we will remove it.
      </Section>

      <Section h="9. International transfers">
        Our primary hosting is in the EU. Some sub-processors (e.g. RevenueCat,
        Sentry) may process data in the US under Standard Contractual Clauses or
        the EU-US Data Privacy Framework.
      </Section>

      <Section h="10. Security">
        We use TLS encryption in transit, encrypted backups, hashed passwords
        (Argon2), short-lived JWT tokens and SHA-256 hashed refresh tokens.
      </Section>

      <Section h="11. Cookies (website)">
        spicypick.app uses only strictly necessary cookies and a privacy-friendly
        analytics tag that does not set persistent cookies. No marketing
        trackers.
      </Section>

      <Section h="12. Changes">
        We may update this Privacy Policy. Material changes will be notified in
        the app and on this page.
      </Section>

      <Section h="13. Contact">
        Questions, requests, complaints:{" "}
        <a href="mailto:privacy@spicypick.com" className="text-spicy-400 underline">
          privacy@spicypick.com
        </a>
        .
      </Section>
    </LegalLayout>
  );
}

function Section({ h, children }: { h: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="mb-2 text-xl font-bold text-white">{h}</h2>
      <div className="text-white/75">{children}</div>
    </section>
  );
}

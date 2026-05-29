import type { Metadata } from "next";
import { LegalLayout } from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "The terms governing your use of the SpicyPick app and spicypick.app website.",
};

export default function TermsPage() {
  return (
    <LegalLayout title="Terms of Service" updated="May 29, 2026">
      <p>
        These Terms of Service (&ldquo;Terms&rdquo;) govern your access to and
        use of the SpicyPick mobile applications and website (collectively, the
        &ldquo;Service&rdquo;), operated by Šmídl Online. By using the Service
        you agree to these Terms. If you do not agree, do not use the Service.
      </p>

      <Section h="1. Eligibility">
        You must be at least 13 years old (16 in the EEA) to use SpicyPick. By
        using the Service you represent that you meet this requirement.
      </Section>

      <Section h="2. Account">
        You are responsible for keeping your credentials secure and for all
        activity under your account. Notify us immediately of any unauthorised
        use at{" "}
        <a href="mailto:support@spicypick.com" className="text-spicy-400 underline">
          support@spicypick.com
        </a>
        .
      </Section>

      <Section h="3. Acceptable use">
        You agree not to:
        <ul className="list-disc pl-6 space-y-1">
          <li>Submit content that is illegal, harmful, hateful, harassing, sexually explicit, defamatory or that infringes third-party rights.</li>
          <li>Attempt to game the leagues, manipulate votes, exploit bugs or use automation.</li>
          <li>Reverse engineer, scrape, or interfere with the security of the Service.</li>
          <li>Impersonate others or misrepresent your identity.</li>
        </ul>
      </Section>

      <Section h="4. User content">
        You retain ownership of scenarios, comments and other content you
        submit. By submitting, you grant SpicyPick a worldwide, non-exclusive,
        royalty-free licence to host, reproduce, translate, moderate and display
        that content as part of the Service. We may remove any content at our
        sole discretion, especially if it violates these Terms or community
        guidelines.
      </Section>

      <Section h="5. Premium subscription">
        Premium is billed via the Apple App Store or Google Play and managed
        through your account on those platforms. Subscriptions renew
        automatically unless cancelled at least 24 hours before the end of the
        current period. Refunds are handled by the respective store under their
        policies.
      </Section>

      <Section h="6. Free trials">
        Where offered, free trials require valid payment details. You will be
        charged at the end of the trial unless cancelled in time.
      </Section>

      <Section h="7. Intellectual property">
        The Service, including the SpicyPick name, logo, design, source code
        and curated content, is owned by Šmídl Online and protected by
        copyright and trademark law. No licence is granted except as expressly
        stated here.
      </Section>

      <Section h="8. Termination">
        We may suspend or terminate your access at any time for breach of these
        Terms or for safety reasons. You may delete your account at any time
        from <em>Settings → Account</em>.
      </Section>

      <Section h="9. Disclaimer">
        SpicyPick is a game. Dilemmas and the AI-generated analyses are for
        entertainment only and do not constitute psychological, legal or
        financial advice. The Service is provided &ldquo;as is&rdquo; without
        warranties of any kind, to the extent permitted by law.
      </Section>

      <Section h="10. Limitation of liability">
        To the maximum extent permitted by law, SpicyPick and Šmídl Online are
        not liable for indirect, incidental, consequential or punitive damages,
        nor for loss of data, profits or goodwill. Our total liability shall
        not exceed the amount you paid us in the 12 months preceding the
        event.
      </Section>

      <Section h="11. Governing law">
        These Terms are governed by Czech law, with the courts of Prague having
        exclusive jurisdiction, without prejudice to mandatory consumer
        protection laws of your country of residence.
      </Section>

      <Section h="12. Changes to the Terms">
        We may update these Terms. Material changes will be notified in the
        app. Continued use after the effective date constitutes acceptance.
      </Section>

      <Section h="13. Contact">
        <a href="mailto:support@spicypick.com" className="text-spicy-400 underline">
          support@spicypick.com
        </a>
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

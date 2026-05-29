import Link from "next/link";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-white/5 bg-black/30">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-14 sm:px-8 md:grid-cols-4">
        <div className="md:col-span-2">
          <Logo />
          <p className="mt-4 max-w-sm text-sm text-white/60">
            One spicy social dilemma every day. Vote, debate, judge — and watch
            the world unfold its opinion.
          </p>
        </div>
        <div>
          <h4 className="mb-3 text-xs font-semibold uppercase tracking-widest text-white/40">
            Product
          </h4>
          <ul className="space-y-2 text-sm text-white/70">
            <li><a href="/#features" className="hover:text-white">Features</a></li>
            <li><a href="/#how" className="hover:text-white">How it works</a></li>
            <li><a href="/#pricing" className="hover:text-white">Pricing</a></li>
            <li><a href="/#download" className="hover:text-white">Download</a></li>
          </ul>
        </div>
        <div>
          <h4 className="mb-3 text-xs font-semibold uppercase tracking-widest text-white/40">
            Company
          </h4>
          <ul className="space-y-2 text-sm text-white/70">
            <li><Link href="/support" className="hover:text-white">Support</Link></li>
            <li><Link href="/privacy" className="hover:text-white">Privacy</Link></li>
            <li><Link href="/terms" className="hover:text-white">Terms</Link></li>
            <li>
              <a href="mailto:support@spicypick.com" className="hover:text-white">
                support@spicypick.com
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/5 px-5 py-6 text-center text-xs text-white/40 sm:px-8">
        © {new Date().getFullYear()} SpicyPick. Made with 🌶️ by Šmídl Online.
      </div>
    </footer>
  );
}

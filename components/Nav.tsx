import Link from "next/link";
import { Logo } from "./Logo";

export function Nav() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/5 bg-background/70 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
        <Link href="/" aria-label="SpicyPick home">
          <Logo />
        </Link>
        <ul className="hidden items-center gap-8 text-sm text-white/70 md:flex">
          <li>
            <a href="/#features" className="hover:text-white">Features</a>
          </li>
          <li>
            <a href="/#how" className="hover:text-white">How it works</a>
          </li>
          <li>
            <a href="/#pricing" className="hover:text-white">Pricing</a>
          </li>
          <li>
            <Link href="/support" className="hover:text-white">Support</Link>
          </li>
        </ul>
        <a
          href="#download"
          className="rounded-full bg-spicy-500 px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-spicy-500/30 transition hover:bg-spicy-400"
        >
          Get the app
        </a>
      </nav>
    </header>
  );
}

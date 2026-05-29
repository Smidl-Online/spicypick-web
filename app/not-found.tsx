import Link from "next/link";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

export default function NotFound() {
  return (
    <>
      <Nav />
      <main className="mx-auto flex max-w-3xl flex-col items-center px-5 py-32 text-center sm:px-8">
        <div className="text-7xl">🌶️</div>
        <h1 className="mt-6 text-5xl font-extrabold">404</h1>
        <p className="mt-3 max-w-md text-white/65">
          That page got too spicy and disappeared. Let&apos;s get you back to
          today&apos;s pick.
        </p>
        <Link
          href="/"
          className="mt-8 rounded-xl bg-spicy-500 px-5 py-3 text-sm font-semibold text-white hover:bg-spicy-400"
        >
          Back to home
        </Link>
      </main>
      <Footer />
    </>
  );
}

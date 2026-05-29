import { Nav } from "./Nav";
import { Footer } from "./Footer";

export function LegalLayout({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <Nav />
      <main className="mx-auto max-w-3xl px-5 py-16 sm:px-8 md:py-24">
        <p className="text-xs uppercase tracking-widest text-spicy-400">
          Legal
        </p>
        <h1 className="mt-3 text-4xl font-extrabold sm:text-5xl">{title}</h1>
        <p className="mt-3 text-sm text-white/55">Last updated {updated}</p>
        <article className="prose-spicy mt-10 space-y-6 text-white/80 leading-relaxed">
          {children}
        </article>
      </main>
      <Footer />
    </>
  );
}

import type { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}

export function PageHero({ title, subtitle, kicker }: { title: string; subtitle?: string; kicker?: string }) {
  return (
    <section className="bg-gradient-to-br from-primary to-[oklch(0.22_0.14_262)] text-primary-foreground">
      <div className="container-x py-16 md:py-24">
        {kicker && (
          <span className="inline-block text-accent font-semibold text-sm uppercase tracking-widest mb-3">
            {kicker}
          </span>
        )}
        <h1 className="text-3xl md:text-5xl font-bold max-w-3xl leading-tight">{title}</h1>
        {subtitle && <p className="mt-4 text-base md:text-lg opacity-90 max-w-2xl">{subtitle}</p>}
      </div>
    </section>
  );
}

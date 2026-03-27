"use client";

import LocaleSwitcher from "~/_components/locale-switcher";
import PeriodicElements from "~/_components/periodic-elements";

type PageProps = {
  params: { lang: "en" | "es" };
};

export default function HomePage({ params }: PageProps) {
  return (
    <main className="flex min-h-screen flex-col items-center bg-cream">
      <LocaleSwitcher lang={params.lang} />
      <PeriodicElements lang={params.lang} />
      <a
        href="https://andremov.dev"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-auto py-6 text-sm text-warm-gray hover:text-terracotta transition-colors duration-200"
      >
        Built by Andrés Movilla
      </a>
    </main>
  );
}

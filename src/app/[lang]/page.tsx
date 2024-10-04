"use client";

import LocaleSwitcher from "~/_components/locale-switcher";
import PeriodicElements from "~/_components/periodic-elements";

type PageProps = {
  params: { lang: "en" | "es" };
};

export default function HomePage({ params }: PageProps) {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <LocaleSwitcher lang={params.lang} />
      <PeriodicElements lang={params.lang} />
    </main>
  );
}

import LocaleSwitcher from "~/_components/locale-switcher";
import PeriodicElements from "~/_components/periodic-elements";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <LocaleSwitcher />
      <PeriodicElements />
    </main>
  );
}

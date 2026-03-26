import Link from "next/link";

export default function LocaleSwitcher({
  lang = "en",
}: {
  lang?: "en" | "es";
}) {
  return (
    <div className="absolute left-1/2 top-5 flex -translate-x-1/2 rounded-md border border-sand bg-sand">
      <Link
        href={"/en"}
        className={
          (lang === "en"
            ? "bg-terracotta font-semibold text-cream"
            : "text-warm-gray hover:text-walnut") + " px-3 py-1 transition-colors duration-200"
        }
      >
        EN
      </Link>

      <Link
        href={"/es"}
        className={
          (lang === "es"
            ? "bg-terracotta font-semibold text-cream"
            : "text-warm-gray hover:text-walnut") + " px-3 py-1 transition-colors duration-200"
        }
      >
        ES
      </Link>
    </div>
  );
}

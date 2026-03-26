import clsx from "clsx";
import type { PeriodicElement } from "~/utils/types";

export function PeriodicElement({ data }: { data: PeriodicElement }) {
  return (
    <div
      className={clsx([
        "flex h-16 w-16 select-none flex-col items-center justify-between rounded-sm border border-sand bg-cream-tinted p-1 text-walnut md:h-24 md:w-24 md:p-2",
        {
          "opacity-50": data.atomicNumber === 0,
        },
      ])}
    >
      <span className="w-full text-[0.6rem] leading-none text-warm-gray md:text-sm">
        {data.atomicNumber}
      </span>
      <span className="text-lg font-bold text-walnut md:text-2xl">
        {data.symbol}
      </span>
      <span className="text-[0.6rem] leading-none text-warm-gray md:text-sm">
        {data.fullName}
      </span>
    </div>
  );
}

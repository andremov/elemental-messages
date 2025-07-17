import clsx from "clsx";
import type { PeriodicElement } from "~/utils/types";

export function PeriodicElement({ data }: { data: PeriodicElement }) {
  return (
    <div
      className={clsx([
        "flex h-16 w-16 select-none flex-col items-center justify-between rounded-sm border border-gray-600 bg-gray-800 p-1 text-white md:h-24 md:w-24 md:p-2",
        {
          "opacity-50": data.atomicNumber === 0,
        },
      ])}
    >
      <span className="w-full text-[0.6rem] leading-none text-gray-300 md:text-sm">
        {data.atomicNumber}
      </span>
      <span className="text-lg font-bold text-white md:text-2xl">
        {data.symbol}
      </span>
      <span className="text-[0.6rem] leading-none text-gray-400 md:text-sm">
        {data.fullName}
      </span>
    </div>
  );
}

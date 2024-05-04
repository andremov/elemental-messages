import clsx from "clsx";
import type { PeriodicElement } from "~/utils/types";

export function PeriodicElement({ data }: { data: PeriodicElement }) {
  return (
    <div
      className={clsx([
        "flex h-24 w-24 flex-col items-center justify-between rounded-sm bg-white p-2 text-black",
        {
          "opacity-50": data.atomicNumber === 0,
        },
      ])}
    >
      <span className="w-full text-sm text-black">{data.atomicNumber}</span>
      <span className="text-2xl font-bold text-black">{data.symbol}</span>
      <span className="text-sm text-black/70">{data.fullName}</span>
    </div>
  );
}

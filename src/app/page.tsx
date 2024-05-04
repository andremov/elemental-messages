"use client";

import { type ChangeEvent, useState } from "react";
import { PeriodicElement } from "~/components/periodic-element";
import { translate } from "~/utils/functions";
import type { PeriodicElement as PeriodicElementType } from "~/utils/types";

export default function HomePage() {
  const [inputText, setInputText] = useState("");
  const [output, setOutput] = useState<PeriodicElementType[]>([]);

  function handleSolve() {
    setOutput(translate(inputText));
  }

  function handleInput(e: ChangeEvent<HTMLInputElement>) {
    setInputText(e.target.value);
    setOutput(translate(e.target.value));
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-9 bg-gradient-to-b from-[#120b1b] to-[#151620] text-white">
      <h1 className="mx-4 text-2xl font-bold md:text-3xl">
        Elemental messages
      </h1>

      <p className="md:text-md mx-4 text-center text-sm text-slate-300">
        Type something and &quot;translate it&quot; to elements from the
        periodic table!
      </p>

      <div className="flex flex-col rounded-lg bg-sky-700 px-4 py-4">
        {/* <span className="text-sm text-slate-200">Input</span> */}

        <input
          className="rounded-md px-4 py-3 text-black"
          placeholder="Type something..."
          value={inputText}
          onChange={handleInput}
        />

        <button
          onClick={handleSolve}
          className="mt-2 rounded-md bg-green-500 py-3 font-bold transition hover:bg-green-400 active:bg-green-600"
        >
          Translate
        </button>
      </div>

      <div className="flex min-h-[8rem] max-w-screen-md flex-wrap items-center justify-center gap-1">
        {output.map((item, key) => (
          <PeriodicElement data={item} key={key} />
        ))}
      </div>
    </main>
  );
}

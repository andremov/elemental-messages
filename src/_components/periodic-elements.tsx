"use client";

import { type ChangeEvent, useState } from "react";
import { PeriodicElement } from "~/_components/periodic-element";
import { translate } from "~/utils/functions";
import type { PeriodicElement as PeriodicElementType } from "~/utils/types";
import locale from "~/utils/locale.json";
import type { LocaleStrings } from "~/utils/types";

export default function PeriodicElements({
  lang = "en",
}: {
  lang?: "en" | "es";
}) {
  const [inputText, setInputText] = useState("");
  const [output, setOutput] = useState<PeriodicElementType[]>([]);
  const localeStrings = locale[lang] as LocaleStrings;

  function handleInput(e: ChangeEvent<HTMLTextAreaElement>) {
    setInputText(e.target.value);
    setOutput(translate(e.target.value));
  }

  return (
    <div className="container mx-auto bg-gray-900 p-4 pt-16 text-white">
      <div className="relative mx-auto flex max-w-screen-md flex-col items-center justify-center gap-3">
        <h1 className="mx-4 text-2xl font-bold text-white md:text-3xl">
          {localeStrings.title}
        </h1>

        <p className="md:text-md text-md mx-4 text-center text-gray-300">
          {localeStrings.subtitle}
        </p>
      </div>

      <div className="mx-auto flex max-w-3xl flex-col gap-4">
        <div className="flex-1 space-y-4">
          <span className="text-lg font-semibold text-white">
            {localeStrings.titles.input}
          </span>

          <textarea
            className="h-[calc(25vh-100px)] min-h-[200px] w-full resize-none rounded-md border border-gray-600 bg-gray-800 p-4 text-white placeholder-gray-400 outline-none transition focus:border-blue-400"
            placeholder={localeStrings.placeholder}
            value={inputText}
            onChange={handleInput}
          />
        </div>

        <div className="flex-1 space-y-4">
          <span className="text-lg font-semibold text-white">
            {localeStrings.titles.output}
          </span>
          <div className="flex min-h-[8rem] max-w-screen-md flex-wrap items-center justify-center gap-1">
            {output.map((item, key) => (
              <PeriodicElement data={item} key={key} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

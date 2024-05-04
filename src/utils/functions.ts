import type { PeriodicElement } from "./types";
import data from "./periodic-table.json";

function loadPeriodicTable(): Record<string, PeriodicElement> {
  return data.elements
    .map((e) => ({
      symbol: e.symbol,
      fullName: e.name,
      atomicNumber: e.number,
      atomicMass: e.atomic_mass,
    }))
    .reduce((acc, curr) => ({ ...acc, [curr.symbol.toLowerCase()]: curr }), {});
}

export function translate(text: string): PeriodicElement[] {
  const elementLookUpTable = loadPeriodicTable();
  const lowercaseText = text.toLowerCase().replaceAll(/ /g, "");

  const output: PeriodicElement[] = [];

  for (let index = 0; index < lowercaseText.length; index++) {
    const character1 = lowercaseText.slice(index, index + 1);
    const character2 = lowercaseText.slice(index + 1, index + 2);
    const character12 = lowercaseText.slice(index, index + 2);
    const character23 = lowercaseText.slice(index + 1, index + 3);

    const elem1 = elementLookUpTable[character1];
    const elem2 = elementLookUpTable[character2];
    const elem12 = elementLookUpTable[character12];
    const elem23 = elementLookUpTable[character23];

    // console.log({
    //   index,
    //   output: JSON.parse(JSON.stringify(output)) as PeriodicElement[],
    // });

    // console.log({
    //   [character1]: elem1,
    //   [character2]: elem2,
    //   [character12]: elem12,
    //   [character23]: elem23,
    // });

    // case 1: elem1 does exist, elem12 does not exist
    if (elem1 !== undefined && elem12 === undefined) {
      output.push(elem1);
      continue;
    }

    // case 2: elem1 does not exist, elem12 does exist
    if (elem1 === undefined && elem12 !== undefined) {
      output.push(elem12);
      index++; // skip next character
      continue;
    }
    // case 3: elem1 and elem12 do not exist
    if (elem1 === undefined && elem12 === undefined) {
      // output = [];
      output.push({
        atomicMass: 0,
        atomicNumber: 0,
        fullName: "Unknownium",
        symbol: character1.toUpperCase(),
      });
      continue;
    }

    if (elem1 === undefined) break; // wont happen, this is for type safety
    if (elem12 === undefined) break; // wont happen, this is for type safety

    // now, elem1 and elem12 both exist

    // case 4: elem2 does not exist and elem23 does exist
    if (elem2 === undefined && elem23 !== undefined) {
      output.push(elem1);
      continue;
    }

    // case 5: elem2 does not exist and elem23 does not exist
    if (elem2 === undefined && elem23 === undefined) {
      output.push(elem12);
      index++; // skip next character
      continue;
    }

    output.push(elem12);
    index++; // skip next character
  }

  return output;
}

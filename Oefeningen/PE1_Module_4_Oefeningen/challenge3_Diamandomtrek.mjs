import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
const userInput = readline.createInterface({ input, output });

let height = parseInt(await userInput.question("Height (must be odd, e.g. 5, 7, 9): "));
let outlineInput = await userInput.question("Outline only? (true/false): ");

// Parse string input to a real boolean
let outline = outlineInput.trim().toLowerCase() === "true";

if (height % 2 === 0) {
  height += 1;
}

let center = (height - 1) / 2 + 1;

for (let i = 1; i <= height; i++) {
  let spatieRuimte;
  if (i < center) {
    spatieRuimte = center - i;
  } else {
    spatieRuimte = i - center;
  }

  let sterAantal = height - (2 * spatieRuimte);
  let rij = "";

  for (let s = 1; s <= spatieRuimte; s++) {
    rij += " ";
  }

  if (outline) {
    if (sterAantal === 1) {
      rij += "*";
    } else {
      rij += "*";
      for (let innerSpace = 1; innerSpace <= sterAantal - 2; innerSpace++) {
        rij += " ";
      }
      rij += "*";
    }
  } else {
    for (let j = 1; j <= sterAantal; j++) {
      rij += "*";
    }
  }

  console.log(rij);
}

process.exit();
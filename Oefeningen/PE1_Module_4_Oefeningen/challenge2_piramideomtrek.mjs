import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
const userInput = readline.createInterface({ input, output });

let height = parseInt(await userInput.question("Height: "));
let outlineInput = await userInput.question("Outline only? (true/false): ");

// Parse string input to a real boolean
let outline = outlineInput.trim().toLowerCase() === "true";

for (let i = 1; i <= height; i++) {
  let spatieRuimte = height - i;
  let sterAantal = (2 * i) - 1;
  let rij = "";

  // 1. Add leading spaces
  for (let s = 1; s <= spatieRuimte; s++) {
    rij += " ";
  }

  // 2. Add stars/outline logic
  if (outline) {
    if (i === 1) {
      // Top row (single tip star)
      rij += "*";
    } else if (i === height) {
      // Bottom row (full solid base of stars)
      for (let j = 1; j <= sterAantal; j++) {
        rij += "*";
      }
    } else {
      // Middle hollow rows
      rij += "*";
      for (let innerSpace = 1; innerSpace <= sterAantal - 2; innerSpace++) {
        rij += " ";
      }
      rij += "*";
    }
  } else {
    // Solid pyramid: print all stars for this row
    for (let j = 1; j <= sterAantal; j++) {
      rij += "*";
    }
  }

  console.log(rij);
}

process.exit();
import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
const userInput = readline.createInterface({ input, output });

let getal = parseInt(await userInput.question("Geef een getal: "));

let isPriem = getal >= 1;

for (let i = 2; i < getal; i++) {
  if (getal % i == 0) {
    isPriem = false;
    break;
  }
}

if (isPriem) {
  console.log(getal + " is priem.");
} else {
  console.log(getal + " is niet priem.");
}

process.exit();

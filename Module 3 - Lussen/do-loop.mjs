import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
const userInput = readline.createInterface({ input, output });

let getal;

do {
  getal = parseFloat(await userInput.question("Getal (1-10): "));
} while (getal < 1 || getal > 10);

process.exit();

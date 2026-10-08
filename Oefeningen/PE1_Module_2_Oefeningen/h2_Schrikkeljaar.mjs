import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
const userInput = readline.createInterface({ input, output });

let jaar = parseFloat(await userInput.question('Welk jaar?: '));
//schrikkel = 29, anders 28

if (jaar % 400 == 0) {
  console.log("Schrikkeljaar.");
} else if (jaar % 100 == 0) {
  console.log("Geen schrikkeljaar.");
} else if (jaar % 4 == 0) {
  console.log("Schrikkeljaar.");
} else {
  console.log("Geen schrikkeljaar.")
}
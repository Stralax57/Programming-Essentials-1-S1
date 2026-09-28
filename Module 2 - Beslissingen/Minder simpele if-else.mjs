import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
const userInput = readline.createInterface({ input, output });

let userTaal = await userInput.question(
  "Welke taal spreek je? (NL/FR/EN/none): ",
);

if (userTaal == NL) {
  console.log("Hallo!");
} else if (userTaal == FR) {
  console.log("Bonjour!");
} else if (userTaal == EN) {
  console.log("Hello!");
} else {
  console.log("Mijn excuses, maar ik ken die taal niet.");
}

process.exit();

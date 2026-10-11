import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
const userInput = readline.createInterface({ input, output });

let sLijst = [];

let naam = await userInput.question("Naam student (S to stop): ");

while (naam != "") {
  if (naam == "S") {
    break;
  }

  sLijst.push(naam);
  naam = await userInput.question("Naam student (S to stop): ");
}

console.log(sLijst);
process.exit();

import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
const userInput = readline.createInterface({ input, output });

let punten = [];

let punt = await userInput.question("Voer punten in (enter to stop): ");

while (punt != "") {
  punten.push(parseFloat(punt));
  punt = await userInput.question("Voer punten in (enter to stop): ");
}

let som = 0;
for (let i = 0; i < punten.length; i++) {
  som += punten[i];
}

let gemiddelde = som / punten.length;

console.log(gemiddelde);

process.exit();

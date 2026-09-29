import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
const userInput = readline.createInterface({ input, output });

let gemiddelde = 1;
let i = 1;
do {
  let input = parseFloat(await userInput.question("Getal: "));
  (gemiddelde = (gemiddelde * input) / i)
  console.log(gemiddelde);
  i++;
} while (gemiddelde < 25);
process.exit();

import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
const userInput = readline.createInterface({ input, output });

let resultaat = 0;
let inputGetal = 1;
while (inputGetal > 0) {
    inputGetal = parseFloat(await userInput.question("Optellen getal(> 0): "));
  console.log((resultaat += inputGetal));
}
process.exit();

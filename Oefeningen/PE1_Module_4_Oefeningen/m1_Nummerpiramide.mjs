import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
const userInput = readline.createInterface({ input, output });

let number = parseFloat(await userInput.question("Hoeveel loops?: "));

let i = 1;
do {
  console.log(i);
  for(let display = ""; i <= number; i++){
    display = i + display
  }
} while (i <= number);

process.exit();

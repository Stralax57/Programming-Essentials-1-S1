import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
const userInput = readline.createInterface({ input, output });

let temperatuur = parseFloat(
  await userInput.question("Wat is de temperatuur?: "),
);
let isCelcius = await userInput.question("Is dit in celsius? (y/n): ");
switch (isCelcius) {
  case "y":
  case "Y":
    isCelcius = true;
    break;
  case "n":
  case "N":
    isCelcius = false;
    break;
}

function tempSwitch(temperatuur, isCelcius) {
  if (isCelcius) {
    let fTemp = temperatuur * 1.8 + 32 + 'F';
    return fTemp;
  } else {
    let cTemp = (temperatuur - 32) / 1.8 + 'C';
    return cTemp;
  }
}

console.log(tempSwitch(temperatuur, isCelcius));

process.exit();

import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
const userInput = readline.createInterface({ input, output });

let getal1 = parseFloat(await userInput.question("Getal 1: "));
let getal2 = parseFloat(await userInput.question("Getal 2: "));

let operator = await userInput.question("Welke operatie? (+, -, *, /) ");

let antwoord;

switch (operator) {
  case "+":
    antwoord = getal1 + getal2;
    console.log(antwoord);
    break;
  case "-":
    antwoord = getal1 - getal2;
    console.log(antwoord);
    break;
  case "*":
    antwoord = getal1 * getal2;
    console.log(antwoord);
    break;
  case "/":
    antwoord = getal1 / getal2;
    console.log(antwoord);
    break;
  default:
    console.log("Foute operator, probeer opnieuw. (+, -, *, /)");
}

process.exit();

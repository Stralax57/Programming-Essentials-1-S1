import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
const userInput = readline.createInterface({ input, output });

let rekenmaschine = {
  optellen(a, b) {
    return a + b;
  },
  aftrekken(a, b) {
    return a - b;
  },
  vermenigvuldigen(a, b) {
    return a * b;
  },
  delen(a, b) {
    return a / b;
  },
};

let a = parseFloat(await userInput.question("Getal 1: "));
let b = parseFloat(await userInput.question("Getal 2: "));

console.log(rekenmaschine.optellen(a, b));
console.log(rekenmaschine.aftrekken(a, b));
console.log(rekenmaschine.vermenigvuldigen(a, b));
console.log(rekenmaschine.delen(a, b));

process.exit();

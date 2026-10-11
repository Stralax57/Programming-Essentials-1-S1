import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
const userInput = readline.createInterface({ input, output });

let namen = [];
let userNamen = await userInput.question("Voeg een naam toe: ");

while (userNamen != "") {
  namen.push(userNamen);
  userNamen = await userInput.question("Voeg nog een naam toe: ");
}

console.log(namen);

process.exit();

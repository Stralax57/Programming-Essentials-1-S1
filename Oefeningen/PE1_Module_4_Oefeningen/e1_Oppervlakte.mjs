import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
const userInput = readline.createInterface({ input, output });

let zijde1 = parseFloat(await userInput.question('Zijde 1 v. rechthoek: '));
let zijde2 = parseFloat(await userInput.question('Zijde 2 v. rechthoek: '));

let aRechthoek = zijde1 * zijde2

console.log(aRechthoek)

process.exit();

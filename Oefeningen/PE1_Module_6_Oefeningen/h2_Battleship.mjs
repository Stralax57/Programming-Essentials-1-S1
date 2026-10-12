import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
const userInput = readline.createInterface({ input, output });

let slagveld = [
  ["w", "w", "w", "w", "w", "w", "w", "w", "w", "w"],
  ["w", "w", "w", "w", "w", "w", "w", "w", "w", "w"],
  ["w", "w", "w", "w", "w", "w", "w", "w", "w", "w"],
  ["w", "w", "w", "w", "w", "w", "w", "w", "w", "w"],
  ["w", "w", "w", "w", "w", "w", "w", "w", "w", "w"],
  ["w", "w", "w", "w", "w", "w", "w", "w", "w", "w"],
  ["w", "w", "w", "w", "w", "w", "w", "w", "w", "w"],
  ["w", "w", "w", "w", "w", "w", "w", "w", "w", "w"],
  ["w", "w", "w", "w", "w", "w", "w", "w", "w", "w"],
  ["w", "w", "w", "w", "w", "w", "w", "w", "w", "w"],
];

let shotH = parseFloat(await userInput.question("hoogte?: "));
let shotB = parseFloat(await userInput.question("Breedte?:"));
//origin is 0.0 top left

slagveld[shotH][shotB] = "*";

slagveld.forEach(row => console.log(row.join(" ")));
//zorgt voor bord voorstelling
process.exit();

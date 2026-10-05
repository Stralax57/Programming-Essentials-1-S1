import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
const userInput = readline.createInterface({ input, output });

let hoogte = parseFloat(await userInput.question("Hoogte: "));
let breedte = parseFloat(await userInput.question("Breedte: "));
let rij = "";

for (let i = 1; i <= hoogte; i++) {
  let rij = "";
  if (i == 1 || i == hoogte) {
    for (let j = 1; j <= breedte; j++) {
      rij += "*";
    }
  } else {
    rij = "*";

    for (let spaties = 2; spaties <= breedte - 1; spaties++) {
      rij += " ";
    }
    if (breedte > 1) {
      rij += "*";
    }
  }
  console.log(rij);
}

process.exit();

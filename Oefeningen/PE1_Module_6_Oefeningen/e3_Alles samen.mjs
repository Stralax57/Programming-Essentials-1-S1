import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
const userInput = readline.createInterface({ input, output });

let sLijst = [];

let naam = await userInput.question("Naam student (S to stop): ");

while (naam != "") {
  if (naam == "S") {
    break;
  }

  sLijst.push(naam);
  naam = await userInput.question("Naam student (S to stop): ");
}

let i = 0;
while (i < sLijst.length) {
  console.log(
    sLijst.pop() + ", jij bent uitgenodigd om deel te nemen aan IT Essentials.",
  );
}

process.exit();

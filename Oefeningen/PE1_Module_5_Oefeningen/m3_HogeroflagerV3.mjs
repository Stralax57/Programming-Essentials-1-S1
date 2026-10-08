import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
const userInput = readline.createInterface({ input, output });

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let juisteGetal = random(1, 10);
let levens = 3;
let won = false;

while (levens > 0) {
  let gok = parseFloat(
    await userInput.question(`Raad het getal (1-10) [Levens: ${levens}]: `),
  );

  if (gok === juisteGetal) {
    won = true;
    break;
  }

  levens--;

  if (levens > 0) {
    if (gok > juisteGetal) {
      console.log("Lager!\n");
    } else {
      console.log("Hoger!\n");
    }
  }
}

if (won) {
  console.log("\nYou win!");
} else {
  console.log(`\nYou lose! Het juiste getal was ${juisteGetal}.`);
}

process.exit();

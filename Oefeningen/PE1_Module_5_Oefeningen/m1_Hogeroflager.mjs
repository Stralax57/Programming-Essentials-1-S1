import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
const userInput = readline.createInterface({ input, output });

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let juisteGetal = random(1, 10);
let gerbuikerGetal = parseFloat(
  await userInput.question("Raad het getal(1- 10): "),
);
while (gerbuikerGetal != juisteGetal) {
  if (gerbuikerGetal > juisteGetal) {
    console.log("Lager \n");
  } else if (gerbuikerGetal < juisteGetal) {
    console.log("Hoger \n");
  }
  gerbuikerGetal = parseFloat(
    await userInput.question("Raad het getal (1-10): "),
  );
}

console.log("\nYou win!");
process.exit();

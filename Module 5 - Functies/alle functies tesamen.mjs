import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
const userInput = readline.createInterface({ input, output });

let userTV = await userInput.question("Welke tv-serie: ");

function tvSerie(serie) {
  switch (serie) {
    case "The Simpsons":
      console.log("Je gekozen TV-serie vindt plaats in springfield.");
      break;
    default:
      `Sorry, ik weet niet waar de serie ${serie} zich afspeelt.`;
  }
}

tvSerie(userTV);

process.exit();

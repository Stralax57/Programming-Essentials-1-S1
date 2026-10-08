import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
const userInput = readline.createInterface({ input, output });

let naam = await userInput.question("Hoe heet je?: ");

function begroeting(naam) {
  console.log(`Hallo ${naam}, welkom.`);
}

begroeting(naam);

process.exit();

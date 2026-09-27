import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
const userInput = readline.createInterface({ input, output });

let maand = await userInput.question(
  "Welke maand wil je weten hoeveel dagen het heeft?: ",
);

switch (maand) {
  case "januari":
  case "maart":
  case "mei":
  case "juli":
  case "augustus":
  case "oktober":
  case "december":
    console.log("31");
    break;
  case "april":
  case "juni":
  case "september":
  case "november":
    console.log("30");
    break;
  case "februari":
    console.log("28 of 29");
    break;
}

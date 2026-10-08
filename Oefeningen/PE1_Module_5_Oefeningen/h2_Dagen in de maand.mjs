import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
const userInput = readline.createInterface({ input, output });

function maandDagen(maand, jaartal) {
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
      if (jaar % 400 == 0) {
        console.log("29");
      } else if (jaar % 100 == 0) {
        console.log("28");
      } else if (jaar % 4 == 0) {
        console.log("29");
      } else {
        console.log("28");
      }
      break;
  }
}

process.exit();

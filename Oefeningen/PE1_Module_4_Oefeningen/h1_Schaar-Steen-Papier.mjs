import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
const userInput = readline.createInterface({ input, output });

let choices = ["rock", "paper", "scissors"];
let computerChoice = choices[Math.floor(Math.random() * choices.length)];

// We bekijken deze syntax in module 6, momenteel kan je gewoon copy/pasten

let userChoice = await userInput.question("rock, paper, scissors: ");
userChoice.toLowerCase();
console.log('Computer: ' + computerChoice);

if (computerChoice == userChoice) {
  console.log("Tie!");
} else if (
  (computerChoice == "rock" && userChoice == "paper") ||
  (computerChoice == "paper" && userChoice == "scissors") ||
  (computerChoice == "scissors" && userChoice == "rock")
) {
  console.log("You win!");
} else {
  console.log("You lose :( ");
}

process.exit();
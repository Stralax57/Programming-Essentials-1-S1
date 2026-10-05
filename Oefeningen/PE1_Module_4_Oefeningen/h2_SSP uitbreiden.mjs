import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
const userInput = readline.createInterface({ input, output });

let choices = ["rock", "paper", "scissors"];
let computerScore = 0;
let userScore = 0;

while (userScore < 3 && computerScore < 3) {
  let computerChoice = choices[Math.floor(Math.random() * choices.length)];
  let userChoice = await userInput.question("rock, paper, scissors: ");
  userChoice.toLowerCase();

  console.log("Computer: " + computerChoice);
  if (computerChoice == userChoice) {
    console.log("Tie, no points \n");
  } else if (
    (computerChoice == "rock" && userChoice == "paper") ||
    (computerChoice == "paper" && userChoice == "scissors") ||
    (computerChoice == "scissors" && userChoice == "rock")
  ) {
    userScore++;
    console.log(
      "Your score: " + userScore + "\nComputer score: " + computerScore + "\n",
    );
  } else {
    computerScore++;
    console.log(
      "Your score: " + userScore + "\nComputer score: " + computerScore + "\n",
    );
  }
}

if (userScore > computerScore) {
  console.log("You win!");
} else {
  console.log("You lose :(");
}

process.exit();

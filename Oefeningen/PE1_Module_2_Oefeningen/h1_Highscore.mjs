import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
const userInput = readline.createInterface({ input, output });

let score1 = parseFloat(await userInput.question("Score 1: "));
let score2 = parseFloat(await userInput.question("Score 2: "));
let score3 = parseFloat(await userInput.question("Score 3: "));
let score4 = parseFloat(await userInput.question("Score 4: "));
let score5 = parseFloat(await userInput.question("Score 5: "));

let average = (score1 + score2 + score3 + score4 + score5) / 5;

let max = score1;
let min = score1;

// switch (true) {
//   case score2 > max:
//     max = score2;
//     break;
//   case score3 > max:
//     max = score3;
//     break;
//   case score4 > max:
//     max = score4;
//     break;
//   case score5 > max:
//     max = score5;
//     break;
//   case score2 < min:
//     min = score2;
//     break;
//   case score3 < min:
//     min = score3;
//     break;
//   case score4 < min:
//     min = score4;
//     break;
//   case score5:
//     min = score5;
//     break;
// }
//
// USING A SWITCH HERE DOES NOT WORK! after hitting break, it will exit the switch block so it does not compare after
//

if (score2 > max) {
  max = score2;
}
if (score3 > max) {
  max = score3;
}
if (score4 > max) {
  max = score4;
}
if (score5 > max) {
  max = score5;
}

if (score2 < min) {
  min = score2;
}
if (score3 < min) {
  min = score3;
}
if (score4 < min) {
  min = score4;
}
if (score5 < min) {
  min = score5;
}

//
// ZORG DAT JE GEEN ELSE IFS GEBRUIKT
//

console.log("Min: " + min + "\nMax: " + max + "\navg: " + average);

process.exit();

import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
const userInput = readline.createInterface({ input, output });

let factorio = parseFloat(
  await userInput.question("Welk factoriaal wil je weten?: "),
);

function factorial(num) {
  let uitgebeeld = "";
  let res = 1;
  for (let i = 1; i <= num; i++) {
    res *= i;
    if (i === num) {
      uitgebeeld += i; // Last number: no " x "
    } else {
      uitgebeeld += `${i} x `; // Other numbers: add " x "
    }
  }
  uitgebeeld += " = " + res;
  console.log(
    `factorial van ${num} (!${num})
        \n = ` + uitgebeeld,
  );
}
if (factorio < 0) {
  console.error("womp womp");
} else {
  factorial(factorio);
}

process.exit();

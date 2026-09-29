import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
const userInput = readline.createInterface({ input, output });

let a = 0;
let b = 1;
let nFib = parseFloat(await userInput.question("Tot welk getal fib?: "));
let i = 1;
while (nFib >= i) {
  console.log(a);
  let optelling = a + b;
  a = b;
  b = optelling;
  i++;
}

process.exit();

import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let getal = parseFloat(await userInput.question('getal pls '));

console.log(getal + "\n" + (getal ** 2) + '\n' + (getal ** 3) + '\n' + (getal ** 4) + '\n' + (getal ** 5));


process.exit();

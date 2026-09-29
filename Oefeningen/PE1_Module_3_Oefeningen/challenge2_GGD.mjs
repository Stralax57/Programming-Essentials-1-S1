import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
const userInput = readline.createInterface({ input, output });

let getal1 = parseFloat(await userInput.question('Getal 1: '))
let getal2 = parseFloat(await userInput.question('Getal 2: '))

while(getal1 != getal2){
    if (getal1 > getal2) {
        getal1 -= getal2;
    } else {
        getal2 -= getal1
    }
}
console.log(getal1);
process.exit();

import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
const userInput = readline.createInterface({ input, output });

let huidigJaar = parseFloat(await userInput.question('Welk jaar?: '));
//schrikkel = 29, anders 28

if(huidigJaar % 4 == 0 || huidigJaar % 400 == 0){
    console.log('Februari heeft 29 dagen')
} else if(huidigJaar)

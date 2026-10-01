import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
const userInput = readline.createInterface({ input, output });

let start = parseFloat(await userInput.question("Met welk getal beginnen we?: "));
let end = parseFloat(await userInput.question("Met welk getal eindigen we?: "));
let deler1 = parseFloat(await userInput.question("Wat is het eerste getal waarop we testen?: "));
let deler2 = parseFloat(await userInput.question("Wat is het tweede getal waarop we testen?: "));

let mutueeleDeler = "";

for(let i = start + 1; i < end; i++){
    if(i % deler1 == 0 && i % deler2 == 0){
        mutueeleDeler += i + " "
    }
}

console.log("Deelbaar door "+ deler1 +" en "+ deler2 + ": "+ mutueeleDeler);

process.exit();

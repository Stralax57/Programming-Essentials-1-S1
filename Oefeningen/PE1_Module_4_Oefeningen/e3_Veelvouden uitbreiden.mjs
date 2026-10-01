import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
const userInput = readline.createInterface({ input, output });

let start = parseFloat(await userInput.question("Met welk getal beginnen we?: "));
let end = parseFloat(await userInput.question("Met welk getal eindigen we?: "));
let deler1 = parseFloat(await userInput.question("Wat is het eerste getal waarop we testen?: "));
let deler2 = parseFloat(await userInput.question("Wat is het tweede getal waarop we testen?: "));

let mutueeleDeler = "";

let deelbaar1 = await userInput.question('Moet het deelbaar zijn door '+ deler1 + '?(true/false): ');
let deelbaar2 = await userInput.question('Moet het deelbaar zijn door '+ deler2 + '?(true/false): ');

for(let i = start + 1; i < end; i++){
    if(deelbaar1 == true && i % deler1 == 0){
        mutueeleDeler += i + " "
    } else if(deelbaar2 == true && i % deler2 == 0) {
        mutueeleDeler += i + " "
    }
}

console.log(mutueeleDeler);

process.exit();


//???

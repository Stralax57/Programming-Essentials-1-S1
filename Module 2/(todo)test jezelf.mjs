// import * as readline from 'node:readline/promises';
// import{stdin as input, stdout as output} from 'node:process';
// const userInput = readline.createInterface({input, output});

// let variabeleDag = await userInput.question('Wat is de dag van vandaag?: ');

// switch(variabeleDag){
//     case 'maandag':
//     case 'dinsdag':
//     case 'woensdag':
//     case 'donderdag':
//     case 'vrijdag':
//         console.log('Het is een weekdag.')
//         break;
//     case 'zaterdag':
//     case 'zondag':
//         console.log('Het is een weekenddag/')
//         break;
//     default:
//         console.log('De gegeven dag is geen dag van de week.')
// }

import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
const userInput = readline.createInterface({ input, output });

let num1 = parseFloat(await userInput.question("Getal 1: "));
let num2 = parseFloat(await userInput.question("Getal 2: "));

if (num1 > 0) {
  if (num2 > 0) {
    console.log("Beide getallen zijn positief.");
  } else {
    console.log(
      "Het eerste getal is positief en het tweede getal is negatief.",
    );
  }
} else if (num2 > 0) {
  console.log("Het eerste getal is negatief en het tweede getal is positief");
} else if (num1 == 0 || num2 == 0) {
  console.log("Een van de getallen zijn 0");
} else {
  console.log("Beide getallen zijn negatief.");
}

process.exit();

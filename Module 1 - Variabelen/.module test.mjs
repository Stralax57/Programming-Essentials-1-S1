// # koffie per jaar
import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
const userInput = readline.createInterface({ input, output });

// let quantiteit = parseFloat(await userInput.question('Hoeveel koppen koffie gemiddeld per dag? '));

// let jaarBasis = quantiteit * 365;

// console.log('Op een jaarbasis drink je ' + jaarBasis + ' koppen koffie.');

// process.exit();

// C naar F
//import * as readline from 'node:readline/promises';
//import{stdin as input, stdout as output} from 'node:process';
//const userInput = readline.createInterface({input, output});

// let tempInC = parseFloat(await userInput.question('Wat is de temperatuur in C?: '));

// let tempInF = (tempInC * 9 / 5) + 32;

// console.log(tempInF + 'F');

// process.exit();

//Gemiddelde van 4 met 2 variabele
// import * as readline from 'node:readline/promises';
// import{stdin as input, stdout as output} from 'node:process';
// const userInput = readline.createInterface({input, output});

let getal = parseFloat(await userInput.question("Wat is je eerste getal? "));
getal =
  getal + parseFloat(await userInput.question("Wait is je tweede getal? "));
getal =
  getal + parseFloat(await userInput.question("Wait is je derde getal? "));
getal =
  getal + parseFloat(await userInput.question("Wait is je vierde getal? "));

getal = getal / 4;

console.log(getal);

process.exit();

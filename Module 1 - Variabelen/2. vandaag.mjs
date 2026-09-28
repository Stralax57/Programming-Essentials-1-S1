import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let dagvdweek = await userInput.question('Welke dag van de week is het vandaag? ');
let maand = await userInput.question('Welke maand zijn we vandaag? ');
let datum = await userInput.question('De hoeveelste dag van de maand is het? ');

console.log('Het is vandaag ' + dagvdweek + ' ' + datum + ' ' + maand + '.');

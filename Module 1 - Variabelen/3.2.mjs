import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let getal1 = parseFloat(await userInput.question('Getal 1: '));
let getal2 = parseFloat(await userInput.question('Getal 2: '));

let som = getal1 + getal2;
let verschil = getal1 - getal2;
let product = getal1 * getal2;
let deling = getal1 / getal2;

let answer = 'Je getallen waren ' + getal1 + ' en ' + getal2 + '.' + '\nDe som is: ' + som + '\nHet verschil is: ' + verschil + '\nHet Product is: ' + product + '\nDe deling is: ' + deling;

console.log(answer);

process.exit();

// await = zorgt dat de code wacht op userinput
// process.exit(); zorgt dat het process echt eindigt, anders blijft runnen.

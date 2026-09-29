import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
const userInput = readline.createInterface({ input, output });



let getal = parseFloat(await userInput.question('Welk getal?: '));
console.log('De tafel van '+ getal +': ');
for(let i = 1, vermenigvuldiging = getal * i; i <= 10; i++){
    vermenigvuldiging = getal * i
    console.log(getal +' x '+ i + ' = ' + vermenigvuldiging)
}

process.exit();

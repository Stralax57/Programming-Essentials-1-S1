import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
const userInput = readline.createInterface({ input, output });

let minimum = 0;
let maximum = 255;

let testGetal = parseFloat(await userInput.question('Geef een getal: '));

if (minimum <= testGetal &&  maximum >= testGetal){
    console.log('Je getal '+ testGetal +' ligt tussen '+ minimum +' en '+ maximum)
}else{
    console.log('Je getal '+ testGetal +' ligt niet tussen '+ minimum + ' en '+ maximum)
}

process.exit();

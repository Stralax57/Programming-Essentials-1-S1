import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
const userInput = readline.createInterface({ input, output });

let getal1 = parseFloat(await userInput.question('Getal 1: '))
let getal2 = parseFloat(await userInput.question('Getal 2: '))

function opteller(a, b){
    let som = a + b
    console.log(`${a} plus ${b} is ${som}`)
}

opteller(getal1, getal2)

process.exit();
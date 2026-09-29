import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
const userInput = readline.createInterface({ input, output });

// let tekst;

// do {
//   tekst = await userInput.question("Geef iets in: ");
//   console.log(tekst);
// } while (tekst !== "STOP");


// let getal;
// let som = 0;

// while(som <= 100){
//    getal = parseFloat(await userInput.question('Geef een getal in: '));
//    som += getal;
// }

for(let getal = parseFloat(await userInput.question('Geef een getal in: ')), som = 0; som <= 100; som += getal)

process.exit();

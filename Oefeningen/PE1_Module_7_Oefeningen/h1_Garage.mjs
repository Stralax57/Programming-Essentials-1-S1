import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
const userInput = readline.createInterface({ input, output });

let autoGarage = {
  naam: "Yahoo wheels",
  autos: [
    { naam: "rx-7 FD", merk: "Mazda", bouwjaar: 1995 },
    { naam: "NSX", merk: "Nissan", bouwjaar: 1998 },
  ],
  vervangAuto(oude, nieuwe) {
    this.autos[oude] = nieuwe;
  },
};

console.log(autoGarage.autos)
let vervangAuto = parseFloat(
  await userInput.question("Welke auto gaan we vervangen?(1-2): "),
);
let nieuweAuto = {};
nieuweAuto.naam = await userInput.question("Welke auto?: ");
nieuweAuto.merk = await userInput.question("Welk merk?: ");
nieuweAuto.bouwjaar = parseFloat(await userInput.question("Welk bouwjaar?: "));

autoGarage.vervangAuto(vervangAuto - 1, nieuweAuto);

console.log(autoGarage.autos)

process.exit();

import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
const userInput = readline.createInterface({ input, output });

let fabienHogeschoolBrussel = {
  naam: "Fabien Hogeschool Brussel",
  studenten: [
    {
      naam: "John Doe",
      leeftijd: 20,
      vakken: ["Programming Essentials", "IT Essentials"],
    },
    {
      naam: "Jane Doe",
      leeftijd: 19,
      vakken: ["Network Essentials", "OS Essentials"],
    },
  ],
  cursussen: [
    "Programming Essentials",
    "IT Essentials",
    "Network Essentials",
    "OS Essentials",
  ],
  inschrijvenStudent(student) {
    this.studenten.push(student);
  },
};

let naam = await userInput.question("Naam student: ");
let leeftijd = parseFloat(await userInput.question("Leeftijd: "));

let gekozenVakken = [];
let doorgaan = true;

while (doorgaan) {
  console.log("\nBeschikbare vakken:");
  for (let i = 0; i < fabienHogeschoolBrussel.cursussen.length; i++) {
    console.log(`[${i + 1}] ${fabienHogeschoolBrussel.cursussen[i]}`);
  }

  let keuze = await userInput.question("Kies een vak op basis van nummer (of druk enter om te stoppen): ");

  if (keuze == "") {
    doorgaan = false;
  } else {
    let index = parseFloat(keuze) - 1;
    
    if (index >= 0 && index < fabienHogeschoolBrussel.cursussen.length) {
      let gekozenVak = fabienHogeschoolBrussel.cursussen[index];
      
      if (!gekozenVakken.includes(gekozenVak)) {
        gekozenVakken.push(gekozenVak);
        console.log(`> Toegevoegd: ${gekozenVak}`);
      } else {
        console.log("> Je hebt dit vak al gekozen!");
      }
    } else {
      console.log("> Ongeldige keuze, probeer opnieuw.");
    }
  }
}

let nieuweStudent = {
  naam: naam,
  leeftijd: leeftijd,
  vakken: gekozenVakken,
};

// 3. Use your method to add them to the school object!
fabienHogeschoolBrussel.inschrijvenStudent(nieuweStudent);

console.log("\nUpdated studentenlijst:");
console.log(fabienHogeschoolBrussel.studenten);

process.exit();

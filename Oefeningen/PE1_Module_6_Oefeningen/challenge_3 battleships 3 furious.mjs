import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
const userInput = readline.createInterface({ input, output });

// velden geinit
let eigenSlagveld = [
  [".", ".", ".", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", ".", ".", "."],
];

let vijandSlagveld = [
  [".", ".", ".", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", ".", ".", "."],
];

let vijandTonendSlagveld = [
  [".", ".", ".", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", ".", ".", "."],
];

// eerste print van velden
console.log("--- Je eigen slagveld ---");
eigenSlagveld.forEach((row) => console.log(row.join(" ")));

// params voor eigen boot
let boot = parseFloat(await userInput.question("Welke boot? (1 - 5): "));
let richting = await userInput.question(
  "Welke richting? (links, rechts, boven, onder): ",
);
let hoogte = parseFloat(await userInput.question("hoogte?: "));
let breedte = parseFloat(await userInput.question("breedte?: "));

// 1ste check: passen
function bootPast(boot, richting, hoogte, breedte, veld) {
  let maxHoogte = veld.length;
  let maxBreedte = veld[0].length;

  if (
    hoogte < 0 ||
    hoogte >= maxHoogte ||
    breedte < 0 ||
    breedte >= maxBreedte
  ) {
    return false;
  }

  if (richting == "links") {
    return breedte - (boot - 1) >= 0;
  } else if (richting == "rechts") {
    return breedte + (boot - 1) < maxBreedte;
  } else if (richting == "boven") {
    return hoogte - (boot - 1) >= 0;
  } else if (richting == "onder") {
    return hoogte + (boot - 1) < maxHoogte;
  }
  return false;
}

// boot toevoegen aan veld
function plaatsBoot(boot, richting, hoogte, breedte, veld) {
  if (!bootPast(boot, richting, hoogte, breedte, veld)) {
    console.log("Fout: deze boot past hier niet.");
    return;
  }
  if (richting == "links") {
    for (let i = 0; i < boot; i++) {
      veld[hoogte][breedte - i] = "b";
    }
  } else if (richting == "rechts") {
    for (let i = 0; i < boot; i++) {
      veld[hoogte][breedte + i] = "b";
    }
  } else if (richting == "boven") {
    for (let i = 0; i < boot; i++) {
      veld[hoogte - i][breedte] = "b";
    }
  } else if (richting == "onder") {
    for (let i = 0; i < boot; i++) {
      veld[hoogte + i][breedte] = "b";
    }
  }
}

// boot werkelijk toevoegen voor de speler
plaatsBoot(boot, richting, hoogte, breedte, eigenSlagveld);
console.log("\n--- Jouw veld na plaatsing ---");
eigenSlagveld.forEach((row) => console.log(row.join(" ")));

// Boten aan vijandveld toevoegen (geheim voor de speler)
plaatsBoot(2, "rechts", 2, 2, vijandSlagveld);
plaatsBoot(3, "links", 9, 3, vijandSlagveld);
plaatsBoot(5, "boven", 9, 4, vijandSlagveld);
plaatsBoot(2, "onder", 5, 3, vijandSlagveld);

// Functie om te schieten (controleert echt veld, update tonend veld)
function schiet(hoogte, breedte, echteVeld, tonendVeld) {
  if (
    hoogte < 0 ||
    hoogte >= echteVeld.length ||
    breedte < 0 ||
    breedte >= echteVeld[0].length
  ) {
    console.log("Buiten het veld!");
    return;
  }

  // Check of er al op deze plek geschoten is op het zichtbare veld
  if (tonendVeld[hoogte][breedte] === "*" || tonendVeld[hoogte][breedte] === "^") {
    console.log("Hier heb je al geschoten!");
    return;
  }

  // Controleer op het echte verborgen veld of er een boot staat
  if (echteVeld[hoogte][breedte] === "b") {
    tonendVeld[hoogte][breedte] = "*"; // Raak op het scherm
    console.log("Geraakt! (*)");
  } else {
    tonendVeld[hoogte][breedte] = "^"; // Mis op het scherm
    console.log("Mis! (^)");
  }
}

// Vraag om schot coördinaten
console.log("\n--- Tijd om te schieten op de vijand! ---");
let shotH = parseFloat(await userInput.question("Schiet hoogte?: "));
let shotB = parseFloat(await userInput.question("Schiet breedte?: "));

// Schot uitvoeren met beide vijandelijke velden als argumenten
schiet(shotH, shotB, vijandSlagveld, vijandTonendSlagveld);

// Print het zichtbare veld van de vijand in plaats van het geheime veld
console.log("\n--- Vijandelijk veld na jouw schot ---");
vijandTonendSlagveld.forEach((row) => console.log(row.join(" ")));

process.exit();

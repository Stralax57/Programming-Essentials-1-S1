import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
const userInput = readline.createInterface({ input, output });

let slagveld = [
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

let boot = parseFloat(await userInput.question("Welke boot? (1 - 5): "));
let richting = await userInput.question(
  "Welke righting? (links, rechts, boven, onder): ",
);
let hoogte = parseFloat(await userInput.question("hoogte?: "));
let breedte = parseFloat(await userInput.question("breedte?:"));

function bootPast(boot, richting, hoogte, breedte, veld) {
  let maxHoogte = veld.length;
  let maxBreedte = veld[0].length;

  // Controleer of het startpunt zelf binnen het veld ligt
  if (
    hoogte < 0 ||
    hoogte >= maxHoogte ||
    breedte < 0 ||
    breedte >= maxBreedte
  ) {
    return false;
  }

  // Controleer per richting of de rest van de boot binnen de grenzen blijft
  if (richting == "links") {
    return breedte - (boot - 1) >= 0;
  } else if (richting == "rechts") {
    return breedte + (boot - 1) < maxBreedte;
  } else if (richting == "boven") {
    return hoogte - (boot - 1) >= 0;
  } else if (richting == "onder") {
    return hoogte + (boot - 1) < maxHoogte;
  }
  return false; // Als er een ongeldige richting wordt meegegeven
}

function plaatsBoot(boot, richting, hoogte, breedte, veld = slagveld) {
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

plaatsBoot(boot, richting, hoogte, breedte, slagveld);

slagveld.forEach((row) => console.log(row.join(" ")));
//zorgt voor bord voorstelling
process.exit();

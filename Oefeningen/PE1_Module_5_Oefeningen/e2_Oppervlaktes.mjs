import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
const userInput = readline.createInterface({ input, output });

let vorm = await userInput.question(
  "Welke vorm? (cirkel, driehoek, rechthoek, vierkant): ",
);

function oppervlakte(vorm, afmeting1, afmeting2) {
  if (vorm == "cirkel") {
    let oppervlakte = Math.PI * afmeting1 ** 2;
    return oppervlakte;
  } else if (vorm == "driehoek") {
    let oppervlakte = (afmeting1 * afmeting2) / 2;
    return oppervlakte;
  } else if (vorm == "rechthoek") {
    let oppervlakte = afmeting1 * afmeting2;
    return oppervlakte;
  } else if (vorm == "vierkant") {
    let oppervlakte = afmeting1 ** 2;
    return oppervlakte;
  }
}

switch (vorm) {
  case "cirkel":
    let straal = await userInput.question("Wat is de straal?: ");
    console.log(oppervlakte(vorm, straal));
    break;
  case "driehoek":
  case "rechthoek":
    let hoogte = await userInput.question("Wat is de hoogte?: ");
    let breedte = await userInput.question("Wat is de breedte?: ");
    console.log(oppervlakte(vorm, hoogte, breedte));
    break;
  case "vierkant":
    let zijde = await userInput.question("Wat is de lengte van de zijdes?: ");
    console.log(oppervlakte(vorm, zijde));
    break;
}

process.exit();

import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
const userInput = readline.createInterface({ input, output });

let vraag1 = "1: Wat is de hoofdstad van Frankrijk?";
let vraag2 = "2: Hoeveel planeten zijn er in ons zonnenstelser?";
let vraag3 = "3: Wat is het grootste zoogdier ter wereld?";
let vraag4 = "4: Wie schreef het toneelstuk 'Romeo en Julia'";
let vraag5 = "5: Hoeveel poten heeft een spin?";

let punten = 0;
console.log(vraag1);
let antwoord1 = await userInput.question("Jouw antwoord: ");
if (antwoord1 == "Parijs") {
  console.log("Goed antwoord! \n");
  punten++;
} else {
  console.log("Fout antwoord. Het juiste antwoord is: Parijs \n");
}

console.log(vraag2);
let antwoord2 = await userInput.question("Jouw antwoord: ");
if (antwoord2 == "8") {
  console.log("Goed antwoord! \n");
  punten++;
} else {
  console.log("Fout antwoord. Het juiste antwoord is: 8 \n");
}

console.log(vraag3);
let antwoord3 = await userInput.question("Jouw antwoord: ");
if (antwoord3 == "Blauwe vinvis") {
  console.log("Goed antwoord! \n");
  punten++;
} else {
  console.log("Fout antwoord. Het juiste antwoord is: Blauwe vinvis \n");
}

console.log(vraag4);
let antwoord4 = await userInput.question("Jouw antwoord: ");
if (antwoord4 == "Shakespeare") {
  console.log("Goed antwoord! \n");
  punten++;
} else {
  console.log("Fout antwoord. Het juiste antwoord is: Shakespeare \n");
}

console.log(vraag5);
let antwoord5 = await userInput.question("Jouw antwoord: ");
if (antwoord5 == "8") {
  console.log("Goed antwoord! \n");
  punten++;
} else {
  console.log("Fout antwoord. Het juiste antwoord is: 8 \n");
}

console.log("Je hebt " + punten + " van de 5 vragen juist beantwoord.");

process.exit();

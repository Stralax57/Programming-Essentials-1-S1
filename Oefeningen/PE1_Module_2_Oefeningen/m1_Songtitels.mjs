import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
const userInput = readline.createInterface({ input, output });

let artiest = await userInput.question(
  "Kies een artiest: \n1. Eminem \n2. Dr. Dre \n3. Snoop Dogg \n4. Kendric Lamar \n \nGeef je keuze in (nr): ",
);

// if (artiest == 1) {
//   console.log('Je koos voor "Eminem" \nHij is bekend voor de hit: Rap God');
// } else if (artiest == 2) {
//   console.log(
//     'Je koos voor "Dr. Dre" \nHij is bekend voor zijn producing stijl en het lied "Still D.R.E.',
//   );
// } else if (artiest == 3) {
//   console.log(
//     'Je koos voor "Snoop Dogg" \nHij is bekend voor zijn werk met Dr. Dre en zijn weed verslaving. (420)',
//   );
// } else if (artiest == 4) {
//   console.log(
//     'Je koos voor "Kendric Lamar" \nHij is bekend voor zijn moderne rap style en zijn beef dat hij had met Drake.',
//   );
// }

// process.exit();

switch (artiest) {
  case 1:
    console.log('Je koos voor "Eminem" \nHij is bekend voor de hit: Rap God');
    break;
  case 2:
    console.log(
      'Je koos voor "Dr. Dre" \nHij is bekend voor zijn producing stijl en het lied "Still D.R.E.',
    );
    break;
  case 3:
    console.log(
      'Je koos voor "Snoop Dogg" \nHij is bekend voor zijn werk met Dr. Dre en zijn weed verslaving. (420)',
    );
    break;
  case 4:
    console.log(
      'Je koos voor "Kendric Lamar" \nHij is bekend voor zijn  moderne rap style en zijn been dat hij had met Drake',
    );
  default:
    console.log("Het ingevoerde nummer is niet toegestaan. Probeer opnieuw.");
}
process.exit();

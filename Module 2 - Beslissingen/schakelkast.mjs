import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
const userInput = readline.createInterface({ input, output });

let tvSerie = await userInput.question('Welke TV-serie ben je geintereseerd in?: ');
let antwoord = tvSerie + ' vindt plaats in'

switch(tvSerie){
    case ('The Simpsons'):
    case ('the simpsons'):
        console.log(antwoord + 'Springfield.')
        break;

    case('South Park'):
    case('South park'):
    case('south park'):
        console.log(antwoord +' Park County, Colorado')
        break;

    case('The Amazing World of Gumball'):
    case('the amazing world of gumball'):
        console.log(antwoord +' Elmore')
        break;

    default:
        console.log('Sorry, ik weet niet waar '+ tvSerie +' zich afspeelt.')
};

process.exit();

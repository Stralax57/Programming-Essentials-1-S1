let persoon1 = {
  naam: "John Doe",
  leeftijd: 20,
};

let persoon2 = {
  naam: "Jane Doe",
  leeftijd: 20,
};

function vergelijkLeeftijd(persoon1, persoon2){
    if(persoon1.leeftijd > persoon2.leeftijd){
        return persoon1.naam +" is ouder"
    } else if(persoon2.leeftijd < persoon2.leeftijd){
        return persoon2.naam +" is ouder"
    } else {
        return `${persoon1.naam} en ${persoon2.naam} zijn even oud`
    }
}

console.log(vergelijkLeeftijd(persoon1, persoon2));
process.exit();

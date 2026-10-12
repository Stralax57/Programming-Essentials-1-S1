let prijzen = [20, 15, 25, 20];

function geefKorting(prijs, korting = 0.15) {
  let koringprijzen = [];
  for (let i = 0; i < prijs.length; i++) {
    koringprijzen.push(prijs[i] - (prijs[i] * korting));
  }
  return koringprijzen;
}

console.log(geefKorting(prijzen));

process.exit();

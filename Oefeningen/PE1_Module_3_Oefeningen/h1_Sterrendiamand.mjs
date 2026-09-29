let hoogte = 4; // Hoogte van het bovenste deel (inclusief het midden)

// 1. Bovenste helft (inclusief middelste brede rij)
let i = 1;
while (i <= hoogte) {
  let rij = "";

  // Voeg leading spaties toe
  let spaties = 1;
  while (spaties <= hoogte - i) {
    rij += " ";
    spaties++;
  }

  // Voeg sterren toe (1, 3, 5, ...)
  let sterren = 1;
  while (sterren <= 2 * i - 1) {
    rij += "*";
    sterren++;
  }

  console.log(rij);
  i++;
}

// 2. Onderste helft (omgekeerde piramide)
i = hoogte - 1;
while (i >= 1) {
  let rij = "";

  // Voeg leading spaties toe
  let spaties = 1;
  while (spaties <= hoogte - i) {
    rij += " ";
    spaties++;
  }

  // Voeg sterren toe (5, 3, 1, ...)
  let sterren = 1;
  while (sterren <= 2 * i - 1) {
    rij += "*";
    sterren++;
  }

  console.log(rij);
  i--;
}
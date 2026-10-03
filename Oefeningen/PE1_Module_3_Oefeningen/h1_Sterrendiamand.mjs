let hoogte = 4;
let i = 1;
while (i <= hoogte) {
  let rij = "";
  let spaties = 1;
  while (spaties <= hoogte - i) {
    rij += " ";
    spaties++;
  }
  
  let sterren = 1;
  while (sterren <= 2 * i - 1) {
    rij += "*";
    sterren++;
  }
  console.log(rij);
  i++;
}

i = hoogte - 1;
while (i >= 1) {
  let rij = "";
  let spaties = 1;
  while (spaties <= hoogte - i) {
    rij += " ";
    spaties++;
  }

  let sterren = 1;
  while (sterren <= 2 * i - 1) {
    rij += "*";
    sterren++;
  }

  console.log(rij);
  i--;
}

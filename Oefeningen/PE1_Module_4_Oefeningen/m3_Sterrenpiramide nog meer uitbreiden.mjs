let startTop = true;
let startLeft = false;
let height = 3;

if (startTop) {
  let rij = "*";
  let i = 1;
  if (startLeft) {
    while (i <= height) {
      console.log(rij);
      rij += "*";
      i++;
    }
  } else {
    while (i <= height) {
      let spatieRuimte = height - i;
      let rij = "";
      let j = 1;
      while (j <= spatieRuimte) {
        rij += " ";
        j++;
      }
      let s = 1;
      while (s <= i) {
        rij += "*";
        s++;
      }

      console.log(rij);
      i++;
    }
  }
} else {
  let i = height;
  if (startLeft) {
    while (i >= 1) {
      let rij = "";
      let j = 1;
      while (j <= i) {
        rij += "*";
        j++;
      }
      console.log(rij);
      i--;
    }
  } else {
    while (i >= 1) {
      let spatieRuimte = height - i;
      let rij = "";
      let j = 1;
      while (j <= spatieRuimte) {
        rij += " ";
        j++;
      }
      let s = 1;
      while (s <= i) {
        rij += "*";
        s++;
      }
      console.log(rij);
      i--;
    }
  }
}
process.exit();


for (let i = 1; i <= height; i++) {
  let rij = "";

  for (let j = 1; j <= i; j++) {
    rij += i;
  }

  console.log(rij);
}
process.exit();

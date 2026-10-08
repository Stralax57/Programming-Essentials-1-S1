function perfecteGetallen(begin, einde) {
  let perfecteGetalLijst = "";
  for (let i = begin; i <= einde; i++) {
    let delerOpteller = 0;
    for (let j = 1; j <= i - 1; j++) {
      if (i % j == 0) delerOpteller += j;
    }
    if (delerOpteller == i) {
      perfecteGetalLijst += i + " ";
    }
  }
  return perfecteGetalLijst;
}

console.log(perfecteGetallen(1, 100));
process.exit();

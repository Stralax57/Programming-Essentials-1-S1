let hoogte = 6;
let i = 1;

while (i <= hoogte) {
    let rij = "";
    let j = 1;
    while (j <= i) {
        rij += "*";
        j++;
    }
    
    console.log(rij);
    i++;
}

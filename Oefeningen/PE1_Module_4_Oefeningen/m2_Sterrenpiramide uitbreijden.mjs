let startTop = true;
let startLeft = true;
let height = 3;
let rij = "";
let linksSpatie = "";

if (startTop && startLeft) {
  for (let i = 1; i <= height; i++) {
    rij += "*";
    console.log(rij);
  }
} else if (startTop && !startLeft) {
  for (let i = 3; i >= 0; i--) {
    
  }
} else if (!startTop && startLeft) {

} else if (!startTop && !startLeft) {

}

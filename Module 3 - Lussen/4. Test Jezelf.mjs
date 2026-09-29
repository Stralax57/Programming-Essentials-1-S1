// let i = 1;
// while (i <= 3) {
//   let j = 1;
//   let row = ""
  
//   while (j <= 4) {
//     row += (i * j) + " ";
//     j++;
//   }
  
//   console.log(row);
//   i++;
// }

let i = 0;
let som = 50;

while(i <= 6){
    som -= i;
    i += 2;
    console.log(som);
    console.log(i)
}

process.exit();

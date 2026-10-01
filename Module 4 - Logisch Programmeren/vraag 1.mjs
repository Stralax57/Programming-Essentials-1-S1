let number = 5;
let output = '';

if (number % 2 == 0) {
  for (let i = 0; i < number; i += 2) {
    output += i + ' ';
  }
} else {
  for (let i = 1; i < number; i += 2) {
    output += i + ' ';
  }
}


// console.log(output)

// process.exit();
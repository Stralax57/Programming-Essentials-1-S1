let num = 20;
let output = '';

if (num % 3 == 0) {
  for (let i = 1; i <= num; i++) {
    if (i % 2 == 0) {
      output += i + ' is even\n';
    } else {
      output += i + ' is odd\n';
    }
  }
} else {
  output = 'Number is not divisible by 3';
}
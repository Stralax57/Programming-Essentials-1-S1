let fibonacci = [0, 1];

for (let i = 0; fibonacci.length < 10; i++) {
  fibonacci.push(fibonacci[i] + fibonacci[i + 1]);
}

console.log(fibonacci);

process.exit();

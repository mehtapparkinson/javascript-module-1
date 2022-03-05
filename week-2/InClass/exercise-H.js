function exponential(number) {
  return number * number;
}

function isEven(number) {
  return number % 2 === 0;
}

for (let number= 5; number <= 20; exponential(isEven(number))) {
  console.log(number);
}
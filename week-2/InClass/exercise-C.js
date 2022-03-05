function numberChecker(num) {
  if (num > 20) {
    return `${num} is greater than 20`; // if the number is greater than 20, it creates a sentence that this number is greater than 20
  } else if (num === 20) {
    return `${num} is equal to 20`;// if the number is equal to 20, it states that the number is equal to 20
  } else if (num < 20) {
    return `${num} is less than 20`;// if the number is less than 20, it creates a sentence that says "xx is less than 20"
  } else {
    return `${num} isn't even a number :(`; // if the input is not a number it creates a sentence that "xx is not even a number"
  }
}

console.log (numberChecker(20))

console.log (numberChecker(2323))

console.log (numberChecker("lol"))
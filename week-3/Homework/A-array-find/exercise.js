/* 
  You are given an array of names.
  Using .find(), we'd like to find the first name which starts with A and is longer than 7 letters.
*/

// write your code here

//A function which is checking if the name is longer than 7 and starts with A:

function  findLongNameThatStartsWithA (name) {
  if (name.length > 7 && name[0] === "A")
  return name
}

var names = ["Rakesh", "Antonio", "Alexandra", "Andronicus", "Annam", "Mikey", "Anastasia", "Karim", "Ahmed"];

console.log (names.find(findLongNameThatStartsWithA))


/* EXPECTED OUTPUT */
// "Alexandra"

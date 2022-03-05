function secondMatchesAmy(array) {
  if ( array[1] === "Amy") {
    return "Second index matched!";
  }
  else {
  return "Second index not matched";
  }
}


console.log(secondMatchesAmy(["Bob", "Amy" , "Alice"]))
console.log(["Bob", "Alice" , "Amy"])
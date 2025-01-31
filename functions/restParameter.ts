// Use the rest operator (...args) to accept multiple arguments as an array.
//The rest parameter allows a function to accept an indefinite number of arguments as an array. It is denoted by ... (three dots) before the parameter name.

function sumAll(...numbers: number[]): number {
  return numbers.reduce((sum, num) => sum + num, 0);
}

console.log(sumAll(1, 2, 3, 4, 5)); //output = 15

//...numbers: number[] → Accepts multiple number values.
// reduce() → Iterates over the array and sums up all elements.
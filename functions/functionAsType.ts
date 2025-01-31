// You can define a function type using a type alias.

type MathOperation = (a: number, b: number) => number;

const addition: MathOperation = (a, b) => a + b;
const substraction: MathOperation = (a, b) => a - b;
const multiply: MathOperation = (a, b) => a * b;
const divide: MathOperation = (a, b) => a / b;

console.log(addition(12, 12));
console.log(substraction(12, 6));
console.log(multiply(6, 2));
console.log(divide(10, 2)); 

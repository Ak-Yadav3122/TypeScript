//Function can also be stored in the variables.

let addNumber = function (a: number, b: number): number {
  return a + b;
};
console.log(addNumber(16, 4));

let subNumber = function (a: number, b: number): number {
  return a - b;
};
console.log(subNumber(16, 4));

let mulNumber = function (a: number, b: number): number {
  return a * b;
};
console.log(mulNumber(16, 4));

let DivNumber = function (a: number, b: number): number {
  return a / b;
};
console.log(DivNumber(16, 4));


// adding two string

const fullName = function(firstname:"string", lastname:"string"):string{
  return firstname + lastname
}

console.log("Aichchhik", "Yadav");

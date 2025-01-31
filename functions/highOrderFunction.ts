// Functions that accept or return other functions.

function applyOperation(a: number, b: number, operation: (x: number, y: number) => number): number {
  return operation(a, b);
}

console.log(applyOperation(5, 3, (x, y) => x * y)); // Output: 15
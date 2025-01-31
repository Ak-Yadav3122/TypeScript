// TypeScript allows function overloading, where multiple function signatures define different call behaviors.


function display(value: string): void;
function display(value: number): void;
function display(value: any): void {
  console.log(value);
}

display("Hello"); // Output: Hello
display(100); // Output: 100
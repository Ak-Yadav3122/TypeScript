//Provide a default value if a parameter is not passed.

function greetUser(name: string, country: string = "USA"): string {
  return `Hello, ${name} from ${country}!`;
}

console.log(greetUser("golu")); // Output: Hello, John from USA!
console.log(greetUser("Aichchhik", "Canada")); // Output: Hello, Emily from Canada!

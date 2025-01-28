class Person {
  // Properties
  name: string;
  age: number;

  // or we also write it like this
  // public name;
  // public age

  // Constructor
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  // Method
  greet() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
}
 
// Create an instance of the class
const person = new Person("John ", 30);
const person1 = new Person("golu ", 30);
const person2 = new Person("abhishek", 30);

person.greet();
person1.greet();
person2.greet();
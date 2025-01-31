//An abstract class in TypeScript is a class that cannot be instantiated on its own and serves as a blueprint for other classes.
// syntax: abstract class ClassName{}
// If we use the abstract keyword then we can't create the object of that abstract class


abstract class Gun {
  constructor(public gunName: string, public bullet: number) {}
}
// let Gun1 = new Gun("AK47",30) // here we can't create the object of abstract class we have to create the subclass of the abstract class and then we can create the object of the subclass

class model extends Gun {
  makeSound(): void {
    console.log("Dhishoom");
  }
}
let model1 = new model("AK47", 30);
console.log(model1.gunName);
model1.makeSound();

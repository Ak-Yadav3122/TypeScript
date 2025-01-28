class Animal {
  public name: string;
  private age: number;
  protected species: string;

  constructor(name: string, age: number, species: string) {
    this.name = name;
    this.age = age;
    this.species = species;
  }

  public getAge() {
    return this.age; // Accessible within the class
  }
}

const dog = new Animal("Buddy", 5, "Dog");
console.log(dog.name); // Accessible (public)

//console.log(dog.age); // Error: Property 'age' is private
//console.log(dog.species); // Error: Property 'species' is protected
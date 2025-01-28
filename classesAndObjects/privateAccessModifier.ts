class Person1 {
  private secret: string;

  constructor(secret: string) {
    this.secret = secret;
  }

  revealSecret() {
    console.log(this.secret); // Accessible within the class
  }
}

class Employee extends Person1 {
  tryToRevealSecret() {
    // console.log(this.secret); // Error: Property 'secret' is private and only accessible within class 'Person'
  }
}

const detail = new Person1("My secret");
// console.log(person.secret); // Error: Property 'secret' is private and only accessible within class 'Person'
detail.revealSecret(); // Output: My secret
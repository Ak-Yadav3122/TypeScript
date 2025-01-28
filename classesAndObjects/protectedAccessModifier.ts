class userId {
  protected secret: string;

  constructor(secret: string) {
    this.secret = secret;
  }

  revealSecret() {
    console.log(this.secret); // Accessible within the class
  }
}

class man extends userId {
  revealEmployeeSecret() {
    console.log(this.secret); // Accessible in subclass
  }
}

const man1 = new man("My secret");
// console.log(employee.secret); // Error: Property 'secret' is protected and only accessible within class 'userId' and its subclasses
man1.revealSecret(); // Output: My secret
man1.revealEmployeeSecret(); // Output: My secret
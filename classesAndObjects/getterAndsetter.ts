// Default method to use getter and setter

class User {
  constructor(public name: string, public age: number) {}
  //define getter method
  getname() {
    return this.name;
  }
  //define setter method
  setname(value: string) {
    this.name = value;
  }
}
let u1 = new User("John", 30);
u1.getname();
u1.setname("shivay");

//But in type script we can use the get and set keyword to define the getter and setter method. By using get and set keywork we can not call the method as a function we can call the method as a property.

class User1 {
  constructor(public _name: string, public age: number) {}
  //getter method return the value we can we use this method as a property
  get name() { //the variableName can not equal to the method name
    return this._name;
  }

  //setter method
  set name(value:string){
    this._name = value;

  }
}
let us1 = new userName("Aichchhik",23)
us1.name; //output = Aichchhik
us1.name = "Shivay"; //output = Shivay
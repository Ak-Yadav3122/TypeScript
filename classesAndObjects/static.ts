//If we use the static keyword with method or variable then we can access the method or variable without creating the object of the class. We can access the method or variable by using the class name.

//Syntax: static methodName(){ //code}
// static method or variable can not show in the object or instance of the class.

class sayHello{
  static nameUser = "Aichchhik";

  static sayHello(){
    console.log("Hello");
  }
}
sayHello.sayHello(); //output = Hello
sayHello.nameUser; //output = Aichchhik
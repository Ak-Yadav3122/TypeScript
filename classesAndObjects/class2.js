var Person = /** @class */ (function () {
    // Constructor
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    // Method
    Person.prototype.greet = function () {
        console.log("Hello, my name is ".concat(this.name, " and I am ").concat(this.age, " years old."));
    };
    return Person;
}());
// Create an instance of the class
var person = new Person("John ", 30);
var person1 = new Person("golu ", 30);
var person2 = new Person("abhishek", 30);
person.greet();
person1.greet();
person2.greet();

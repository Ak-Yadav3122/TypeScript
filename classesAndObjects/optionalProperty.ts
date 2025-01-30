class deviceName {
  constructor(public name: string) {}
  changeName() {
    this.name = "hello Ak";
  }
}
let name1 = new deviceName("hello");
console.log(name1);

name1.changeName(); // Output: hello Ak
console.log(name1); // Output: { name: 'hello Ak' } By using readonly, we can make the property immutable. We can only assign a value to a readonly property within the declaration or in the constructor.i.e; constructor(public readonly name: string) {}




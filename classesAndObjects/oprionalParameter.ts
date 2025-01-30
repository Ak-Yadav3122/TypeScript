class userName{
  constructor(public name:string,public age:number,public gender?:string){ // here hgender have the oprtional parameter and it denoted by the question mark i.e;?

  }
}
let user1 = new userName("aichchhik",23,"male")
console.log(user1);

let user2 = new userName("Golu",22)
console.log(user2);

// first ways

class userdetails {
  //initialize the variable
  public name;
  public age;

  constructor(name: string, age: number) {
    //declaration of the variable
    this.name = name;
    this.age = age;
  }
}

//second way is also known as parameter properties

class userDetail{
  constructor(public name : string,public age:number){

  }
}
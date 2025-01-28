// type is used to define the multiple datatype
// used For defining unions, intersections, or complex types.


type arg = string | number | boolean

function user(newObj:arg){
  console.log(newObj)
}

let newObj = "Aichchhik" 

user(newObj)

/*
define type in 4 ways:-

1. Union Type 
 ex: type Status = "active" | "inactive" | "pending";

const userStatus: Status = "active";


2. Intersection Type
ex:-
type Person = {
  name: string;
  age: number;
};

type Employee = {
  id: string;
  department: string;
};

type EmployeeDetails = Person & Employee;

const employee: EmployeeDetails = {
  name: "Jane Doe",
  age: 28,
  id: "67890",
  department: "Engineering",
}; 


3. Primitive Type
ex:-
type ID = string;
type Age = number;
type IsActive = boolean;

const userId: ID = "12345";
const userAge: Age = 30;
const activeStatus: IsActive = true;


4. ObjectType
ex:-
type User = {
  id: ID;
  name: string;
  age: Age;
  isActive: IsActive;
};

const user: User = {
  id: "12345",
  name: "John Doe",
  age: 30,
  isActive: true,
};

*/

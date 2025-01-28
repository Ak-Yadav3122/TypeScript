/* Notes:
If we want to add somthing in obj then we have to define that in interface.
If we want to add optional property then we have to use ? after the property name in interface ex: gender?:string

*/

interface userdetails { // here we define the datatype of the object key
  name:string,
  age:number
}
function userDetails(obj:userdetails){ // In a parameter we pass the obj of type user by using (obj:user)
  console.log (obj.name)
  console.log (obj.age)
}

let obj = { //here we define the obj
name:"Aichchhik",
age :20
}

userDetails(obj) // here we pass the obj to the function and call the function
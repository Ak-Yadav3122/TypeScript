interface user {
  name:string,
  age:number,
  email:string
}

interface admin extends user{ // Extending the user interface so that admin interface will have all the properties of user interface
  role:string
}
function getuser(obj:admin){

}
const obje = {
  name: 'John',
  age: 30,
  email: "fcsfdksvvn@gmail.com",
  role: 'admin'
}
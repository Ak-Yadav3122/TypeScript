/* Notes:
If we want to add somthing in obj then we have to define that in interface.
If we want to add optional property then we have to use ? after the property name in interface ex: gender?:string
*/
function userDetails(obj) {
    console.log(obj.name);
    console.log(obj.age);
}
var obj = {
    name: "Aichchhik",
    age: 20
};
userDetails(obj); // here we pass the obj to the function and call the function

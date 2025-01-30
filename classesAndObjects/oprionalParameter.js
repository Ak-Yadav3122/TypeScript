var userName = /** @class */ (function () {
    function userName(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
    return userName;
}());
var user1 = new userName("aichchhik", 23, "male");
console.log(user1);
var user2 = new userName("Golu", 22);
console.log(user2);

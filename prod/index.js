"use strict";
function add(num1, num2) {
    return num1 + num2;
}
let res = add(5, 8);
console.log(res);
function result(price) {
    console.log("the result is " + price);
}
result(add(10, 10));
var Role;
(function (Role) {
    Role[Role["admin"] = 1] = "admin";
    Role[Role["read"] = 2] = "read";
    Role[Role["backup"] = 3] = "backup";
})(Role || (Role = {}));
const user = {
    fistName: "Reanto",
    age: 24,
    role: Role.admin,
};
console.log(user);

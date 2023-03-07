"use strict";
// function add(num1: number, num2: number) {
//   return num1 + num2;
// }
// let result = add(5, 8);
// console.log(result);
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

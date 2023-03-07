// function add(num1: number, num2: number) {
//   return num1 + num2;
// }

// let result = add(5, 8);
// console.log(result);

enum Role {
  admin = 1,
  read = 2,
  backup = 3,
}
const user = {
  fistName: "Reanto",
  age: 24,
  role: Role.admin,
};
console.log(user);

"use strict";
// function add(num1: number, num2: number): number {
//   return num1 + num2;
// }
// let res = add(5, 8);
// console.log(res);
// function result(price: number) {
//   console.log("the result is " + price);
// }
// result(add(10, 10));
// // type Users = {
// //   fistName: string;
// //   age: number;
// //   lastName: string;
// // };
// // const user: Users = {
// //   fistName: "Reanto",
// //   age: 24,
// //   lastName: "Rebouças",
// // };
// // console.log(user);
// let itemInput: unknown;
// let itemName: string;
// itemInput = 10;
// itemInput = "produto x";
// // o itemName não pode aceitar o tipo unknow sem passar por uma verifição pois itemName só aceita tipo string e mesmo o itemInput ter cido atribuido com uma string ele ainda é do tipo unknow.
// if (itemInput === "string") {
//   itemName = itemInput;
// }
// // O tipo 'unknown' não pode ser atribuído ao tipo 'string'
// // itemName = itemInput;
// // function generateError(message: string, code: number): never {
// //   throw { message: message, errorCode: code };
// // }
// // generateError("the aplication crashed", 500);
// function input(input1: number | string, input2: number | string) {
//   let result;
//   if (typeof input1 === "number" && typeof input2 === "number") {
//     result = input1 + input2;
//   } else {
//     result = input1.toString() + input2.toString();
//   }
//   return result;
// }
// const combinePrices = input(10, 20);
// console.log(combinePrices);
// const combineName = input("Apple", "Avocado");
// console.log(combineName);
// let product: string | number;
// product = "isso é uma string";
// console.log("ex string:", product);
// product = 10;
// console.log("ex number:", product);
// type User = {
//   firstName: string;
//   age: number;
// };
// type JobRole = {
//   id: number;
//   role: string;
// };
// type employee = User & JobRole;
// const user1: employee = {
//   firstName: "John",
//   age: 20,
//   id: 221,
//   role: "eadmin",
// };

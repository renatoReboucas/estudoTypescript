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
const user = {
    fistName: "Reanto",
    age: 24,
    lastName: "Rebouças",
};
console.log(user);
let itemInput;
let itemName;
itemInput = 10;
itemInput = "produto x";
// o itemName não pode aceitar o tipo unknow sem passar por uma verifição pois itemName só aceita tipo string e mesmo o itemInput ter cido atribuido com uma string ele ainda é do tipo unknow.
if (itemInput === "string") {
    itemName = itemInput;
}
// O tipo 'unknown' não pode ser atribuído ao tipo 'string'
// itemName = itemInput;
// function generateError(message: string, code: number): never {
//   throw { message: message, errorCode: code };
// }
// generateError("the aplication crashed", 500);
function input(input1, input2) {
    let result;
    if (typeof input1 === "number" && typeof input2 === "number") {
        result = input1 + input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
}
const combinePrices = input(10, 20);
console.log(combinePrices);
const combineName = input("Apple", "Avocado");
console.log(combineName);

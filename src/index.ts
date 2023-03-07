function add(num1: number, num2: number): number {
  return num1 + num2;
}

let res = add(5, 8);
console.log(res);

function result(price: number) {
  console.log("the result is " + price);
}
result(add(10, 10));

enum Role {
  admin = 1,
  read = 2,
  backup = 3,
}
const user: {
  fistName: string;
  age: number;
  lastName: string;
} = {
  fistName: "Reanto",
  age: 24,
  lastName: "Rebouças",
};
console.log(user);

let itemInput: unknown;
let itemName: string;
itemInput = 10;
itemInput = "produto x";

// o itemName não pode aceitar o tipo unknow sem passar por uma verifição pois itemName só aceita tipo string e mesmo o itemInput ter cido atribuido com uma string ele ainda é do tipo unknow.
if (itemInput === "string") {
  itemName = itemInput;
}
// O tipo 'unknown' não pode ser atribuído ao tipo 'string'
itemName = itemInput;

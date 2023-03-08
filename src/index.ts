// // aula 5

// class Users {
//   // declarando as propriedades da classe
//   name: string;
//   // garante que o valor de balance seja somente alterado nesta classe
//   private balance: number;

//   // inicializando as propriedades da classe
//   constructor(n: string, b: number) {
//     this.name = n;
//     this.balance = b;
//   }

//   // metodo de adicnionar dinheiro
//   addMoney(amount: number) {
//     this.balance += amount;
//   }
// }

// // instancia a classe de usuarios
// const user1 = new Users("Reanto", 10);
// //usa o metodo criado
// user1.addMoney(100);
// const user2 = new Users("Marcos", 20);
// user2.addMoney(30);
// console.log(user1);
// console.log(user2);

interface Item {
  name: string;
  price: number;
  // define uma funcao para retornar uma mensagem junto a interface
  itemPurchesa(message: string): void;
}

let product1: Item;

product1 = {
  name: "Apple",
  price: 2,
  // cria a funcao de como a mensagem sera exibida
  itemPurchesa(message: string) {
    console.log(`${message} ${this.name}`);
  },
};

product1.itemPurchesa("You just bougth a");

"use strict";
// // aula 5
let product1;
product1 = {
    name: "Apple",
    price: 2,
    itemPurchesa(message) {
        console.log(`${message} ${this.name}`);
    },
};
product1.itemPurchesa("You just bougth a");

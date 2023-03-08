# Aprendizado typescript

## Instalando typescript

Basta executar o seguinte comando se o node ja estiver instalado na sua maquina: 

```bash
npm i -g typescript
```

## Executar o compilador

Para executar o compilador basta digitar no terminal o seguinte comando:

```hash
tsc <arquivo.ts>
```

## Tipos de dados

- Number: numero.
- String: texto.
- Boolean: true or false.
- Undefined: sem definição de dados.
- [Object](#object): É tipo um array onde contem varios tipos de dados
- Null: sem valor.
- [Array](#array): agrupa varios dados em um só lugar.
- Any: poder ser acossiado a todos os tipos de dados.
- [Unknown](#unknown): Desconhecido, ou seja pode ser qualquer coisa mas de uma forma termporaria.
- [Tuple](#tuple): aceita numebers e strings.
- [Never](#never): ele nunca retorna um valor para console, usado para gerar erros.
- [Enum](#enum): lista de itens relacionados,ou seja mapeamento de duas informaçoes.

### Exemplo de array de dados

<a id="array"></a>

## Array

```typescript
let values: number[] = [10,20,20];
```

<a id="tuple"></a>

- Tuple

```typescript
let item: [string, number, boolean] = ['apple', 10, true]
```

<a id="enum"></a>

- Enum

```typescript
enum Role {admin = 1, read = 2, backup = 3}
const user = {
  fistName: 'Reanto',
  age: 24,
  role: Role.admin 
}
console.log(user)
```

<a id="object"></a>

- Objeto

```typescript
// No typescript ele identifica de maneria automática os types dos seus valores, mas é possivel especificarmos por ele como no exemplo a baixo

const user: {
  fistName: string;
  age: number;
  lastName: string;
} = {
  fistName: "Reanto",
  age: 24,
  lastName: "Rebouças"
};
```

<a id="unknown"></a>

- Unknown

```typescript
let itemInput: unknown;
let itemName: string;
itemInput = 10;
itemInput = "produto x";

// o itemName não pode aceitar o tipo unknow sem passar por uma verifição pois itemName só aceita tipo string e mesmo o itemInput ter cido atribuido com uma string ele ainda é do tipo unknow.

if(itemInput === 'string'){
itemName = itemInput
}

// O tipo 'unknown' não pode ser atribuído ao tipo 'string'
itemName = itemInput
```

<a id="never"></a>

- Never

```typescript
// nesse tipo de caso por padrão o ts passa tipo void por padrão, porem como não se trata disso devemos adicionar o tipo never manualmente
function generateError(message: string, code: number): never  {
  throw { message: message, errorCode: code };
}
generateError("the aplication crashed", 500);
```

### Funçao `return`

No typescript podemos definir alem do tipo dos parametros da função como tambem seu retorno para isso basta adcionar o : type logo em seguina o fechamento do parenteses.
ex:

```typescript
function add(num1: number, num2: number): number {
  return num1 + num2;
}
```

### Função `void`

É uma função onde não temos um retorno, ou seja ela executa e não retorna nada.
ex:

```typescript
function result(price: number) {
  console.log("the result is " + price);
}
result(add(10, 10));
```

### Alias type

É uma maneira de definir uma tipagem meio que global para no caso usuarios como no exemplo a baixo:

```typescript
type Users = {
  fistName: string;
  age: number;
  lastName: string;
}
const user: Users = {
  fistName: "Reanto",
  age: 24,
  lastName: "Rebouças",
};
```

### Union

Em um parametro ou variavel armazenar dois tipo sem o ts reclamar.
ex:

```typescript
// usamos o | para declarar dois types que são aceitos nos parametros da função assim fazendo o union 
function input(input1: number | string, input2: number | string) {
  let result;
  if (typeof input1 === "number" && typeof input2 === "number") {
    result = input1 + input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
}

const combinePrices = input(10, 20);
console.log(combinePrices);

const combineName = input("Apple", "Avocado");
console.log(combineName);
```

### Literal type

Parecido com o `union` mas ele é usado na declaração de variaveis.

```typescript
let product: string | number;

product = "isso é uma string";
console.log("ex string:", product);

product = 10;
console.log("ex number:", product);
```

### Intersection

É uma maneira de combinar dois objetos ou dois alias.

```typescript
type User = {
  firstName: string;
  age: number;
};

type JobRole = {
  id: number;
  role: string;
};

// o tyoe employee é usado para juntar os dois tipos ja criados anteriormente, de maneira que a const user1 use ele como seu tipo e nao reclame se colocarmos os valores dos dois tipos.
type employee = User & JobRole;

const user1: employee = {
  firstName: "John",
  age: 20,
  id: 221,
  role: "eadmin",
};

```

## Classes

```typescript
class Users {
  // declarando as propriedades da classe
  name: string;
  // garante que o valor de balance seja somente alterado nesta classe
  private balance: number;

  // inicializando as propriedades da classe
  constructor(n: string, b: number) {
    this.name = n;
    this.balance = b;
  }

  // metodo de adicnionar dinheiro
  addMoney(amount: number) {
    this.balance += amount;
  }
}

// instancia a classe de usuarios
const user1 = new Users("Reanto", 10);
//usa o metodo criado
user1.addMoney(100);
const user2 = new Users("Marcos", 20);
user2.addMoney(30);
console.log(user1);
console.log(user2);
```

## Interfaces

Criada para dar estrutura á um objeto.

```typescript
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
```
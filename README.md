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
- Never:
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

- Objeto: No typescript ele identifica de maneria automática os types dos seus valores, mas é possivel especificarmos por ele como no exemplo a baixo:

```typescript
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


### Funçao `return`

No typescript podemos definir alem do tipo dos parametros da função como tambem seu retorno para isso basta adcionar o : type logo em seguina o fechamento do parenteses.

- ex:

```typescript
function add(num1: number, num2: number): number {
  return num1 + num2;
}
```

### Função `void`

É uma função onde não temos um retorno, ou seja ela executa e não retorna nada.

- ex:

```typescript
function result(price: number) {
  console.log("the result is " + price);
}
result(add(10, 10));
```

# Aprendizado typescript

## Instalando typescript

Basta executar o seguinte comando se o node ja estiver instalado na sua maquina: 

```bash
npm i -g typescript
```

## executar o compilador

Para executar o compilador basta digitar no terminal o seguinte comando:

```hash
tsc <arquivo.ts>
```

## Tipos de dados

- Number: numero.
- String: texto.
- Boolean: true or false.
- Undefined: sem definição de dados.
- Object: array de dados.
- Null: sem valor.
- [Array](#array): agrupa varios dados em um só lugar.
- Any: poder ser acossiado a todos os tipos de dados.
- Unknown:
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

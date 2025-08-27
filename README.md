# 🚀 Exercícios de Revisão JavaScript

Este repositório contém uma coleção de exercícios em JavaScript organizados por nível de dificuldade, perfeito para revisar conceitos fundamentais antes de começar com TypeScript.

## 📋 Sumário

- [Como Usar](#como-usar)
- [Estrutura dos Exercícios](#estrutura-dos-exercícios)
- [Nível Básico](#nível-básico)
- [Nível Intermediário](#nível-intermediário)
- [Nível Avançado](#nível-avançado)
- [Desafios Extras](#desafios-extras)
- [Executando os Exercícios](#executando-os-exercícios)
- [Contribuindo](#contribuindo)

## 🎯 Como Usar

1. Clone este repositório
2. Navegue até a pasta do exercício desejado
3. Implemente a solução no arquivo correspondente
4. Execute os testes para verificar sua solução
5. Compare com as soluções sugeridas (quando disponíveis)

## 📁 Estrutura dos Exercícios

```
exercises/
├── basic/
│   ├── arrays.js
│   ├── strings.js
│   └── objects.js
├── intermediate/
│   ├── closures.js
│   ├── promises.js
│   └── advanced-arrays.js
├── advanced/
│   ├── debounce.js
│   ├── deep-clone.js
│   ├── event-system.js
│   └── currying.js
└── challenges/
    ├── flatten-array.js
    └── memoization.js
```

---

## 🟢 Nível Básico

### 1. Manipulação de Arrays

**Arquivo:** `basic/arrays.js`

```javascript
// Complete as funções abaixo:

// a) Remover duplicatas de um array
function removeDuplicates(arr) {
  // Sua implementação aqui
}

// b) Encontrar o maior número em um array
function findMax(numbers) {
  // Sua implementação aqui
}

// c) Filtrar apenas números pares
function getEvenNumbers(numbers) {
  // Sua implementação aqui
}

// Teste suas funções:
console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); // [1, 2, 3, 4, 5]
console.log(findMax([10, 5, 8, 20, 3])); // 20
console.log(getEvenNumbers([1, 2, 3, 4, 5, 6])); // [2, 4, 6]
```

### 2. Manipulação de Strings

**Arquivo:** `basic/strings.js`

```javascript
// a) Inverter uma string
function reverseString(str) {
  // Sua implementação aqui
}

// b) Contar vogais em uma string
function countVowels(str) {
  // Sua implementação aqui
}

// c) Verificar se é palíndromo
function isPalindrome(str) {
  // Sua implementação aqui
}

// Teste suas funções:
console.log(reverseString("hello")); // "olleh"
console.log(countVowels("JavaScript")); // 3
console.log(isPalindrome("arara")); // true
```

### 3. Objetos e Propriedades

**Arquivo:** `basic/objects.js`

```javascript
// Crie um objeto 'pessoa' com as propriedades: nome, idade, cidade
// Adicione um método 'apresentar' que retorna uma string de apresentação

const pessoa = {
  // Sua implementação aqui
};

// Teste:
console.log(pessoa.apresentar());
// "Olá, eu sou [nome], tenho [idade] anos e moro em [cidade]"
```

---

## 🟡 Nível Intermediário

### 4. Closures e Escopo

**Arquivo:** `intermediate/closures.js`

```javascript
// Crie uma função que retorna um contador
// O contador deve incrementar a cada chamada
function createCounter() {
  // Sua implementação aqui
}

// Exemplo de uso:
const counter = createCounter();
console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3

const counter2 = createCounter();
console.log(counter2()); // 1 (novo contador independente)
```

### 5. Promises e Async/Await

**Arquivo:** `intermediate/promises.js`

```javascript
// a) Simule uma requisição que pode falhar
function simulateAPICall(shouldFail = false) {
  // Retorne uma Promise que resolve em 2 segundos com "Sucesso!"
  // ou rejeita com "Erro na API" se shouldFail for true
}

// b) Use async/await para lidar com múltiplas chamadas
async function fetchMultipleData() {
  // Chame simulateAPICall 3 vezes e retorne um array com os resultados
  // Trate os erros adequadamente
}

// Teste:
fetchMultipleData().then(console.log).catch(console.error);
```

### 6. Manipulação Avançada de Arrays

**Arquivo:** `intermediate/advanced-arrays.js`

```javascript
// Dado um array de objetos representando produtos:
const produtos = [
  { nome: "Laptop", preco: 2500, categoria: "eletrônicos" },
  { nome: "Mouse", preco: 50, categoria: "eletrônicos" },
  { nome: "Livro", preco: 30, categoria: "educação" },
  { nome: "Cadeira", preco: 200, categoria: "móveis" },
];

// a) Agrupe os produtos por categoria
function groupByCategory(products) {
  // Sua implementação aqui
}

// b) Calcule o preço total por categoria
function calculateTotalByCategory(products) {
  // Sua implementação aqui
}

// Teste:
console.log(groupByCategory(produtos));
console.log(calculateTotalByCategory(produtos));
```

---

## 🔴 Nível Avançado

### 7. Debounce Function

**Arquivo:** `advanced/debounce.js`

```javascript
// Implemente uma função debounce que atrasa a execução de uma função
// até que tenham passado N milissegundos desde a última chamada
function debounce(func, delay) {
  // Sua implementação aqui
}

// Exemplo de uso:
const debouncedSearch = debounce(() => console.log("Searching..."), 300);

// Simule múltiplas chamadas rápidas
debouncedSearch();
debouncedSearch();
debouncedSearch();
// Apenas uma chamada será executada após 300ms
```

### 8. Deep Clone

**Arquivo:** `advanced/deep-clone.js`

```javascript
// Implemente uma função que faz deep clone de objetos
// (incluindo arrays aninhados e objetos aninhados)
function deepClone(obj) {
  // Sua implementação aqui
}

// Teste:
const original = {
  name: "João",
  address: {
    city: "São Paulo",
    coordinates: [10, 20],
  },
  hobbies: ["leitura", "programação"],
};

const cloned = deepClone(original);
cloned.address.city = "Rio de Janeiro";
console.log(original.address.city); // Deve permanecer "São Paulo"
```

### 9. Event System

**Arquivo:** `advanced/event-system.js`

```javascript
// Crie um sistema simples de eventos (Observer Pattern)
class EventEmitter {
  constructor() {
    // Sua implementação aqui
  }

  on(event, callback) {
    // Adicionar listener
  }

  emit(event, data) {
    // Emitir evento
  }

  off(event, callback) {
    // Remover listener
  }
}

// Teste:
const emitter = new EventEmitter();
const listener = (data) => console.log("Recebido:", data);

emitter.on("message", listener);
emitter.emit("message", "Hello World!");
emitter.off("message", listener);
```

### 10. Currying

**Arquivo:** `advanced/currying.js`

```javascript
// Implemente uma função curry que transforma f(a, b, c) em f(a)(b)(c)
function curry(func) {
  // Sua implementação aqui
}

// Exemplo:
const add = (a, b, c) => a + b + c;
const curriedAdd = curry(add);

console.log(curriedAdd(1)(2)(3)); // 6
console.log(curriedAdd(1, 2)(3)); // 6
console.log(curriedAdd(1)(2, 3)); // 6
```

---

## 💪 Desafios Extras

### 11. Flatten Array

**Arquivo:** `challenges/flatten-array.js`

```javascript
// Transforme um array multi-dimensional em um array plano
// Exemplo: [1, [2, 3], [4, [5, 6]]] → [1, 2, 3, 4, 5, 6]
function flattenArray(arr) {
  // Sua implementação aqui (sem usar Array.flat())
}

// Teste:
console.log(flattenArray([1, [2, 3], [4, [5, 6]]])); // [1, 2, 3, 4, 5, 6]
```

### 12. Memoization

**Arquivo:** `challenges/memoization.js`

```javascript
// Implemente memoização para otimizar funções recursivas
function memoize(func) {
  // Sua implementação aqui
}

// Teste com fibonacci:
const fibonacci = memoize((n) => {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
});

console.time("fibonacci");
console.log(fibonacci(40));
console.timeEnd("fibonacci");
```

---

## 🔧 Executando os Exercícios

### Pré-requisitos

- Node.js instalado (versão 14 ou superior)

### Comandos úteis

```bash
# Executar um arquivo específico
node basic/arrays.js

# Executar todos os testes
npm test

# Executar com watch mode (reexecuta quando arquivo muda)
npm run dev
```

### Estrutura recomendada do package.json

```json
{
  "name": "js-exercises",
  "version": "1.0.0",
  "description": "Exercícios de revisão JavaScript",
  "scripts": {
    "test": "node --test",
    "dev": "nodemon --watch . --exec 'npm test'"
  },
  "devDependencies": {
    "nodemon": "^3.0.0"
  }
}
```

## 💡 Dicas para Resolução

1. **Comece pelo básico**: Se estiver com dificuldade, revise os conceitos fundamentais primeiro
2. **Use diferentes abordagens**: Tente resolver o mesmo problema de formas diferentes
3. **Console.log é seu amigo**: Use para debuggar e entender o fluxo
4. **Teste suas soluções**: Crie casos de teste para validar suas implementações
5. **Pesquise quando necessário**: Não tenha medo de consultar a documentação do MDN

## 🎯 Conceitos Importantes para TypeScript

Ao resolver estes problemas, preste atenção especial a:

- ✅ **Tipos de dados** retornados pelas funções
- ✅ **Parâmetros** esperados pelas funções
- ✅ **Estrutura de objetos** e suas propriedades
- ✅ **Arrays** e seus tipos de elementos
- ✅ **Promises** e tratamento de erros
- ✅ **Funções de alta ordem** e callbacks
- ✅ **Classes** e herança
- ✅ **Módulos** e imports/exports

Estes conceitos serão fundamentais quando você começar a tipar seu código em TypeScript!

## 📚 Recursos Adicionais

- [MDN JavaScript Guide](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide)
- [JavaScript.info](https://javascript.info/)
- [You Don't Know JS](https://github.com/getify/You-Dont-Know-JS)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

- [Conversa do Exercício](https://claude.ai/share/4fdc5df9-d12e-4e7d-a8be-8c5113449c7b)

## 🤝 Contribuindo

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`)
3. Commit suas mudanças (`git commit -am 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

⭐ **Dica**: Marque este repositório com uma estrela se ele foi útil para seus estudos!

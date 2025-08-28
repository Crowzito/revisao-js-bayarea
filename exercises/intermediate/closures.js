// Crie uma função que retorna um contador
// O contador deve incrementar a cada chamada
function createCounter() {
  let count = 0;
  return function () {
    return ++count;
  };
}

// Exemplo de uso:
const counter = createCounter();
console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3

const counter2 = createCounter();
console.log(counter2()); // 1 (novo contador independente)

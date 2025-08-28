// Complete as funções abaixo:

// a) Remover duplicatas de um array
function removeDuplicates(arr) {
  // let filteredArray = new Set(arr);
  // let newArray = filteredArray;
  // return newArray;

  return [...new Set(arr)];
}

// b) Encontrar o maior número em um array
function findMax(numbers) {
  return Math.max(...numbers);
}

// c) Filtrar apenas números pares
function getEvenNumbers(numbers) {
  let evenNumbers = numbers.filter((number) => number % 2 === 0);
  return evenNumbers;
}

// Teste suas funções:
console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); // [1, 2, 3, 4, 5]
console.log(findMax([10, 5, 8, 20, 3])); // 20
console.log(getEvenNumbers([1, 2, 3, 4, 5, 6])); // [2, 4, 6]

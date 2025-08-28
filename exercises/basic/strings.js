// a) Inverter uma string
function reverseString(str) {
  return str.split("").reverse().join("");
}

// b) Contar vogais em uma string
function countVowels(str) {
  return str.match(/[aeiou]/gi).length;
}

// c) Verificar se é palíndromo
function isPalindrome(str) {
  return str.toLowerCase().split("").reverse().join("") == str.toLowerCase();
}
console.log(isPalindrome("arara")); // true

// Teste suas funções:
console.log(reverseString("hello")); // "olleh"
console.log(countVowels("JavaScript")); // 3
console.log(isPalindrome("arara")); // true

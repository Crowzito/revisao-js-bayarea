function paridade(valor) {
  let impar = valor % 2 === 1;
  let par = valor % 2 === 0;

  let arroz = "arroz"

  return { par, impar, valor, arroz };
}

console.log(paridade(10).par);

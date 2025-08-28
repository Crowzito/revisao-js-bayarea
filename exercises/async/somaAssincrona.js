function somaAssincrona(a, b) {
  return new Promise((resolve, reject) => {
    let numA = parseInt(a);
    let numB = parseInt(b);

    if (isNaN(numA) || isNaN(numB)) {
      reject("Valor inválido");
    } else {
      resolve(numA + numB);
    }
  });
}

somaAssincrona(2, 7)
  .then((resultado) => {
    console.log(resultado);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    console.log("Finalizado!");
  });

export { somaAssincrona };

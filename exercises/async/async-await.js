// async retorna o seu resultado como uma promise

// import { somaAssincrona } from "./somaAssincrona"

async function somaAsync(a, b) {
  let numA = parseFloat(a);
  let numB = parseFloat(b);

  if (isNaN(numA) || isNaN(numB)) {
    return Promise.reject("numeros invalidos");
  } else {
    let res = numA + numB;
    return { res };
  }
}

somaAsync(3, 7)
  .then((resultado) => {
    console.log(resultado);
  })
  .catch((err) => {
    console.log(err);
  });

async function executar() {
  try {
    const resultado = await somaAsync(3, 7);
    console.log(resultado);
  } catch (erro) {
    console.log(erro);
  }
}

executar();

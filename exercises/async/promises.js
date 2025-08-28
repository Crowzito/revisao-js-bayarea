console.log("Iniciado!");

const primeiraPromise = new Promise((resolve, reject) => {
  reject("Promise Rejeitada!");

  setTimeout(() => {
    console.log("Executando a Promise!");
    resolve("Resolvido!");
  }, 1000);
});

primeiraPromise
  .then((resultado) => {
    console.log(resultado);
  })
  .catch((err) => {
    console.log(err);
  });

console.log("Finalizado!");

// a) Simule uma requisição que pode falhar
function simulateAPICall(shouldFail = false) {
  return new Promise((resolve, reject) => {
    // ✅ Retorna Promise
    setTimeout(() => {
      if (shouldFail) {
        reject("Erro na API"); // ✅ Rejeita a Promise
      } else {
        resolve("Sucesso!"); // ✅ Resolve a Promise
      }
    }, 2000);
  });
}

// b) Use async/await para lidar com múltiplas chamadas
async function fetchMultipleData() {
  // Chame simulateAPICall 3 vezes e retorne um array com os resultados
  // Trate os erros adequadamente

  const promises = [
    simulateAPICall(false),
    simulateAPICall(true),
    simulateAPICall(false),
  ];

  const resultados = await Promise.allSettled(promises);

  return resultados.map((resultado) => {
    if (resultado.status === "fulfilled") {
      return resultado.value;
    } else {
      return `Erro: ${resultado.reason}`;
    }
  });
}

// Teste:
fetchMultipleData().then(console.log).catch(console.error);

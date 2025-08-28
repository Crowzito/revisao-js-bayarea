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

  
}

// Teste:
fetchMultipleData().then(console.log).catch(console.error);

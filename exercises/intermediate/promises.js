// a) Simule uma requisição que pode falhar
function simulateAPICall(shouldFail = false) {
  // Retorne uma Promise que resolve em 2 segundos com "Sucesso!"
  // ou rejeita com "Erro na API" se shouldFail for true
  
  setTimeout(() => {
    if (shouldFail === false) {
      return `Sucesso!`
    } else {
      return `Erro na API`
    }
    
  }, 2000)
}

// b) Use async/await para lidar com múltiplas chamadas
async function fetchMultipleData() {
  // Chame simulateAPICall 3 vezes e retorne um array com os resultados
  // Trate os erros adequadamente
}

// Teste:
fetchMultipleData().then(console.log).catch(console.error);
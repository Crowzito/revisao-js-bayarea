// promise e async functions

// setTimeout -> executa a função depois de determinado tempo:
// recebe uma função em seta onde o primeiro parâmetro é a função e a segunda é temporizador em milissegundos
const timeout = setTimeout(() => console.log("Bom dia!"), 5 * 1000);

// setInterval -> um loop que executa uma função a cada tempo
// mesma ideia de função e temporizador

let contador = 1;
let tempo = 2 * 1000;

const intervalo = setInterval(() => {
  console.log(`Executado ${contador} vezes em ${tempo / 1000} segundos!`);
  contador++;
  if (contador >= 6) {
    clearInterval(intervalo);
  }
  if (contador === 2) {
  clearTimeout(timeout);
}
}, tempo);



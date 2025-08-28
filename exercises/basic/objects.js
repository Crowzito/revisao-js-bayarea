// Crie um objeto 'pessoa' com as propriedades: nome, idade, cidade
// Adicione um método 'apresentar' que retorna uma string de apresentação

const pessoa = {
  nome: "[nome]",
  idade: "[idade]",
  cidade: "[cidade]",
  apresentar() {
    return `Olá, eu sou ${this.nome}, tenho ${this.idade} anos e moro em ${this.cidade}`;
  },
};

// Teste:
console.log(pessoa.apresentar());
// "Olá, eu sou [nome], tenho [idade] anos e moro em [cidade]"

// Dado um array de objetos representando produtos:
const produtos = [
  { nome: "Laptop", preco: 2500, categoria: "eletrônicos" },
  { nome: "Mouse", preco: 50, categoria: "eletrônicos" },
  { nome: "Livro", preco: 30, categoria: "educação" },
  { nome: "Cadeira", preco: 200, categoria: "móveis" },
];

// a) Agrupe os produtos por categoria
function groupByCategory(products) {
  // Sua implementação aqui

  return products.reduce((acumulador, valorAtual) => {
    const category = valorAtual.categoria;
    if (!acumulador[category]) {
      acumulador[category] = [];
    }

    acumulador[category].push(valorAtual);

    return acumulador;
  }, {});
}

// b) Calcule o preço total por categoria
function calculateTotalByCategory(products) {
  // Sua implementação aqui

  const produtosAgrupados = groupByCategory(products)

  const categorias = Object.keys(produtosAgrupados)

  const totais = {}

  categorias.forEach(categoria => {
    const total = produtosAgrupados[categoria].reduce((indice, produto) => indice + produto.preco, 0)
    totais[categoria] = total
  })
  return totais
}


// Teste:
console.log(groupByCategory(produtos));
console.log(calculateTotalByCategory(produtos));

class Produto {
    constructor(nome, preco) {
      this.nome = nome;
      this.preco = preco;
    }
  }
  

  const itensBlackClover = [
    new Produto('Grimório', 50),
    new Produto('Varinha Mágica', 30),
    new Produto('Poção de Cura', 20),
    new Produto('Espada Mágica', 110),
    new Produto('Amuleto Protetor', 15)
  ];


  const produtoCaro = itensBlackClover.find(produto => produto.preco > 100);
  
  
  if (produtoCaro) {
    produtoCaro.nome = 'Produto Caro';
  } else {
    console.log("Não foi encontrado nenhum produto com preço superior a R$ 100,00.");
  }
  
  console.log("Lista de produtos atualizada:", itensBlackClover);
  
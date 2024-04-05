
class Produto {
    constructor(nome, preco) {
      this.nome = nome;
      this.preco = preco;
    }
  }
  
  
  const itensBlackClover = [
    new Produto('Espadas Nichirin', 50),
    new Produto('VarinBrincos de Hanafudaha', 30),
    new Produto('Máscara de Javali', 20),
    new Produto('Pingentes de Glicínia', 100),
    new Produto('Uniforme de Caçador de Demônios', 15)
  ];
  

  const precosAumentados = itensBlackClover.map(produto => {
    return {
      nome: produto.nome,
      preco: produto.preco * 1.1 
    };
  });
  
  console.log("Itens do Kimetsu no Yaiba com preços aumentados em 10%:", precosAumentados);
  
//6.	Crie uma classe Livro com os atributos titulo e paginas. Crie um array de objetos Livro e filtre os livros com mais de 300 páginas.

class Livro {
    constructor(titulo, paginas) {
      this.titulo = titulo;
      this.paginas = paginas;
    }
  }
  
 
  const livrosDosMagosBlackClover = [
    new Livro('Grimório de Asta', 200),
    new Livro('Grimório de Noelle', 350),
    new Livro('Grimório de Yami', 280),
    new Livro('Grimório de Yuno', 500)
  
  ];
  
  // Filtrar os livros com mais de 300 páginas
  const livrosComMaisDe300Paginas = livrosDosMagosBlackClover.filter(livro => livro.paginas > 300);
  
  console.log("Livros dos Magos de Black Clover com mais de 300 páginas:", livrosComMaisDe300Paginas);
  
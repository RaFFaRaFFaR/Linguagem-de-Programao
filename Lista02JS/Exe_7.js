// 7.	Crie uma classe Carro com os atributos marca e ano. Crie um array de objetos Carro e encontre o primeiro carro da marca "Toyota" e filtre os carros fabricados após 2010.

class Carro {
    constructor(marca, ano) {
      this.marca = marca;
      this.ano = ano;
    }
  }
  
  const carros = [
    new Carro('Toyota', 2008),
    new Carro('Honda', 2015),
    new Carro('Chevrolet', 2012),
    new Carro('Ford', 2018),
    new Carro('Toyota', 2019)
  ];
  
  
  const primeiroCarroToyota = carros.find(carro => carro.marca === 'Toyota');
  
  
  const carrosFabricadosApos2010 = carros.filter(carro => carro.ano > 2010);
  
  console.log("Primeiro carro da marca Toyota:", primeiroCarroToyota);
  console.log("Carros fabricados após 2010:", carrosFabricadosApos2010);
  
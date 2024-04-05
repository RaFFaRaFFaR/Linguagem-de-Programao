//1.	Crie uma classe Usuario com os atributos nome e idade. Em seguida, crie um array de objetos Usuario e crie um novo array apenas com os nomes dos usuários em letras maiúsculas.Faça um programa que mostre os números impares em um intervalo de 0 a 100.

class Usuario {
    constructor(nome, idade) {
      this.nome = nome;
      this.idade = idade;
    }
  }

  const usuario =[
    new Usuario ('Asta', 18),
    new Usuario ('Noelle',18),
    new Usuario ('Yami',30),
    new Usuario ('Yuno',18)
 ];

const nomeMAIUSCULO = usuario.map(usuario => usuario.nome.toUpperCase());

console.log(nomeMAIUSCULO);


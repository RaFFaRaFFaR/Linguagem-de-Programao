//2.	Continuando com a classe Usuario, filtre os usuários com idade superior a 18 anos.

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

 const usuariosMaioresDeIdade = usuario.filter(usuario => usuario.idade > 18);

console.log(usuariosMaioresDeIdade);
//3.	Utilizando a classe Usuario, encontre o primeiro usuário com idade entre 25 e 30 anos.

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

 const UsuarioEncontrado = usuario.find(usuario => usuario.idade >= 25 && usuario.idade <= 30);

 if (UsuarioEncontrado) {
     console.log(`O primeiro usuário com idade entre 25 e 30 anos é: ${UsuarioEncontrado.nome}`);
 } else {
     console.log("Não foi encontrado nenhum usuário com idade entre 25 e 30 anos.");
 }
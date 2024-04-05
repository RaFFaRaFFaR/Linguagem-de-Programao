//4.Faça um programa que recebe o nome de uma variável e mostre o <<primeiro>>.<<último nome>>@facens.br

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Função para gerar o email com base no nome fornecido
function gerarEmail(nome) {
    // Dividir o nome em partes usando o espaço como separador
    let partesDoNome = nome.split(' ');
    
    // Pegar o primeiro nome
    let primeiroNome = partesDoNome[0];
    
    // Pegar o último nome
    let ultimoNome = partesDoNome[partesDoNome.length - 1];
    
    // Concatenar o email
    let email = primeiroNome + '.' + ultimoNome + '@facens.br';
    
    return email;
}

rl.question('Digite o seu nome e sobrenome: ', 

function(nomeVariavel) {
  // Gerar o email usando a função e exibir
  let emailFacens = gerarEmail(nomeVariavel);
  console.log('Email da Facens:', emailFacens);
  
  rl.close();
});

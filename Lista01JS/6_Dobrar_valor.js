//Neste código, usamos a biblioteca readline para criar uma interface de leitura de linha que permite interagir com o usuário no terminal. A função rl.question() é usada para solicitar que o usuário digite um número. Depois, verificamos se o número é menor ou igual a zero ou se não é um número. Se alguma dessas condições for verdadeira, exibimos a mensagem de erro. Caso contrário, exibimos o dobro do número digitado.

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function dobroDoNumero() {
    rl.question('Digite um número:', function(numero) {
        // Verifica se o número é menor ou igual a zero ou se não é um número
        if (numero <= 0 || isNaN(numero)) {
            console.log('Só é aceito números positivos maiores que zero');
        } else {
            // Retorna o dobro do número
            console.log('O dobro do número é:', numero * 2);
        }
        
        rl.close();
    });
}

// Chamando a função
dobroDoNumero();

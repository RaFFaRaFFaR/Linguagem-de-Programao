//Nesta função verificarPalindromo, removemos os espaços em branco da string e a convertemos para minúsculas para garantir que a comparação seja insensível a maiúsculas e minúsculas. Em seguida, percorremos a string da esquerda para a direita e da direita para a esquerda ao mesmo tempo, verificando se os caracteres correspondentes são iguais. Se encontrarmos um par de caracteres diferentes, a string não é um palíndromo e retornamos false. Se percorrer toda a string sem encontrar diferenças, a string é um palíndromo e retornamos true.


const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Função para verificar se uma string é um palíndromo
function verificarPalindromo(str) {
    // Remove espaços em branco e converte a string para minúsculas
    str = str.replace(/\s/g, '').toLowerCase();
    
    // Inicializa os índices para a verificação do palíndromo
    let inicio = 0;
    let fim = str.length - 1;
    
    // Percorre a string da esquerda para a direita e da direita para a esquerda
    while (inicio < fim) {
        // Se os caracteres nas posições 'inicio' e 'fim' forem diferentes, a string não é um palíndromo
        if (str[inicio] !== str[fim]) {
            return false;
        }
        inicio++;
        fim--;
    }
    // Se não encontramos diferenças entre os caracteres, a string é um palíndromo
    return true;
}

// Solicita que o usuário insira uma string para verificar se é um palíndromo
rl.question('Digite uma string para verificar se é um palíndromo: ', function(str) {
    // Verifica se a string é um palíndromo e exibe o resultado
    if (verificarPalindromo(str)) {
        console.log('A string \'' + str + '\' é um palíndromo.');
    } else {
        console.log('A string \'' + str + '\' não é um palíndromo.');
    }
    // Fecha a interface readline
    rl.close();
});

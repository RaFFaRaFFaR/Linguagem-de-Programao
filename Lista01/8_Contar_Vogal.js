const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function contarVogais(str) {
    let contador = 0;
    for (let i = 0; i < str.length; i++) {
        // Verifica se o caractere atual é uma vogal minúscula
        if (str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u') {
            contador++;
        }
    }
    return contador;
}

rl.question("Digite uma string: ", function(str) {
    // Converte a string para minúsculas para garantir que todas as vogais sejam contadas
    str = str.toLowerCase();
    let numeroVogais = contarVogais(str);
    console.log("Número de vogais na string:", numeroVogais);
    rl.close();
});


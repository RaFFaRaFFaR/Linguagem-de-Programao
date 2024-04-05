//Este código irá iterar de 1 a 10 e construir uma string contendo os números separados por traços. Após o loop, a string é impressa no console.

// Variável para armazenar os números como uma string
// Variável para armazenar os números como uma string
let numeros = "";

// Loop de 1 a 100
for (let i = 1; i <= 100; i++) {
    // Adiciona o número à string
    numeros += i;

    // Verifica se o número é menor ou igual a 10
    // Se for maior que 10, adiciona um espaço em vez do traço
    if (i < 100) {
        numeros += (i < 10) ? " - " : " ";
    }
}

// Imprime os números no console
console.log(numeros);


// Imprime os números no console
console.log(numeros);

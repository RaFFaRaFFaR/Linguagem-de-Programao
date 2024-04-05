//Nesta função inverterString, a string é dividida em um array de caracteres usando split(""), então a ordem dos elementos do array é invertida com reverse(), e finalmente os caracteres são unidos de volta em uma string usando join(""). Isso resulta na string invertida.

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function inverterString(str) {
    // Usamos o método split() para dividir a string em um array de caracteres,
    // o método reverse() para inverter a ordem dos elementos do array,
    // e o método join() para unir os elementos do array de volta em uma string.
    return str.split("").reverse().join("");
}

// Solicita que o usuário insira uma string
rl.question('Digite uma string: ', function(str) {
    // Inverte a string inserida pelo usuário
    let stringInvertida = inverterString(str);
    
    // Exibe a string invertida
    console.log('String invertida:', stringInvertida);
    
    rl.close();
});

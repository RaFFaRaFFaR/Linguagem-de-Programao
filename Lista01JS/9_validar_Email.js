//Nesta função validarEmail, verificamos se o e-mail contém exatamente um símbolo '@' e, em seguida, se há pelo menos um ponto '.' após o '@'. Se ambas as condições forem atendidas, o e-mail é considerado válido e a função retorna true, caso contrário, retorna false.


const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function validarEmail(email) {
    let indiceArroba = email.indexOf('@');
    if (indiceArroba === -1 || email.indexOf('@', indiceArroba + 1) !== -1) {
        return false;
    }
    
    let indicePonto = email.indexOf('.', indiceArroba);
    if (indicePonto === -1 || indicePonto === email.length - 1) {
        return false;
    }
    
    return true;
}

rl.question("Digite um endereço de e-mail: ", function(email) {
    let valido = validarEmail(email);
    if (valido) {
        console.log("O e-mail", email, "é válido.");
    } else {
        console.log("O e-mail", email, "não é válido.");
    }
    rl.close();
});

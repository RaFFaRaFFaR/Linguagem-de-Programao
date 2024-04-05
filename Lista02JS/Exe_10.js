//10.	Crie um array de números e filtre apenas os números divisíveis por 3. Em seguida, mapeie esses números para o quadrado de seus valores.
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


const numerosDivisiveisPor3 = numeros.filter(numero => numero % 3 === 0);


const quadradoDosNumerosDivisiveisPor3 = numerosDivisiveisPor3.map(numero => numero ** 2);

console.log("Números divisíveis por 3 e seus quadrados:", quadradoDosNumerosDivisiveisPor3);

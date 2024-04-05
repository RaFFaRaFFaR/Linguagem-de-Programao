//4.	Crie um array de números e filtre apenas os números pares. Em seguida, mapeie esses números para o dobro de seus valores.


const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const numerosPares = numeros.filter(numero => numero % 2 === 0);


const numerosDobrados = numerosPares.map(numero => numero * 2);

console.log("Números das temporadas de Black Clover (duplicados):", numerosDobrados);

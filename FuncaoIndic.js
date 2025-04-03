// 2. Função para encontrar o índice do maior e menor valor em um array
function encontrarIndicesMaiorEMenor(array) {
    let maior = array[0];
    let menor = array[0];
    let indiceMaior = 0;
    let indiceMenor = 0;

    for (let i = 1; i < array.length; i++) {
        if (array[i] > maior) {
            maior = array[i];
            indiceMaior = i;
        }
        if (array[i] < menor) {
            menor = array[i];
            indiceMenor = i;
        }
    }

    return {
        maiorValor: maior,
        menorValor: menor,
        indiceMaior: indiceMaior,
        indiceMenor: indiceMenor
    };
}

// Testando a função
let array = [10, 20, 5, 30, 15, 50, 25];
let indices = encontrarIndicesMaiorEMenor(array);
console.log(`Maior valor: ${indices.maiorValor} no índice ${indices.indiceMaior}`);
console.log(`Menor valor: ${indices.menorValor} no índice ${indices.indiceMenor}`);


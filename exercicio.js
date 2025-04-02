// 1. Função para calcular o MDC de dois números usando o Algoritmo de Euclides
function mdc(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

// Testando o MDC
let num1 = 36;
let num2 = 60;
console.log(`O MDC de ${num1} e ${num2} é: ${mdc(num1, num2)}`);


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


// 3. Função para calcular a soma dos múltiplos de 5 ou 7 abaixo de 1000
function somaMultiplosDe5Ou7() {
    let soma = 0;
    for (let i = 1; i < 1000; i++) {
        if (i % 5 === 0 || i % 7 === 0) {
            soma += i;
        }
    }
    return soma;
}

// Testando a função
console.log(`A soma dos múltiplos de 5 ou 7 abaixo de 1000 é: ${somaMultiplosDe5Ou7()}`);
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




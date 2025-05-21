// 1. Função para calcular o MDC de dois números usando o Algoritmo de Euclides
function calculoMDC(a, b) {
    a = Math.abs(a);
    b = Math.abs(b);
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
console.log(`O cálculo do MDC de ${num1} e ${num2} é: ${calculoMDC(num1, num2)}`);

// Exportando a função para uso em outros arquivos
module.exports = calculoMDC;


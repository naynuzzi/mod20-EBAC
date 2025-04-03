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

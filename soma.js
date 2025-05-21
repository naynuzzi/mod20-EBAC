// 3. Função para calcular a soma dos múltiplos de 5 ou 7 abaixo de 1000
function somaMultiplosDe5Ou7(limite = 1000) {
    let soma = 0;
    for (let i = 1; i < limite; i++) {
        if (i % 5 === 0 || i % 7 === 0) {
            soma += i;
        }
    }
    return soma;
}

module.exports = { somaMultiplosDe5Ou7 };




const { somaMultiplosDe5Ou7 } = require('./soma.js');

describe('somaMultiplosDe5Ou7', () => {
    it('deve retornar a soma correta dos múltiplos de 5 ou 7 abaixo de 1000', () => {
        // Resultado esperado calculado manualmente
        let resultadoEsperado = 0;
        for (let i = 1; i < 1000; i++) {
            if (i % 5 === 0 || i % 7 === 0) {
                resultadoEsperado += i;
            }
        }

        expect(somaMultiplosDe5Ou7()).toBe(resultadoEsperado);
    });

    it('deve funcionar com limites diferentes (ex: 20)', () => {
        // Múltiplos de 5 ou 7 abaixo de 20: 5, 7, 10, 14, 15
        expect(somaMultiplosDe5Ou7(20)).toBe(5 + 7 + 10 + 14 + 15);
    });
});
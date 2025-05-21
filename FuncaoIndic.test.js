const encontrarIndicesMaiorEMenor = require('./FuncaoIndic.js');


describe('encontrarIndicesMaiorEMenor', () => {
    it('deve retornar o índice do maior e menor elemento', () => {
        const array = [10, 20, 5, 30, 15, 50, 25];
        const resultado = encontrarIndicesMaiorEMenor(array);
        
        expect(resultado.maiorValor).toBe(50);
        expect(resultado.indiceMaior).toBe(5);
        expect(resultado.menorValor).toBe(5);
        expect(resultado.indiceMenor).toBe(2);
    });
});
const calculoMDC = require('./CalculatedMDC.js');

describe('calculoMDC', () => {
    it('deve retornar o MDC de dois números positivos', () => {
        expect(calculoMDC(36, 60)).toBe(12);
    });

    it('deve retornar o MDC de dois números negativos', () => {
        expect(calculoMDC(-36, -60)).toBe(12);
    });

    it('deve retornar o número absoluto se o outro for zero', () => {
        expect(calculoMDC(0, 25)).toBe(25);
        expect(calculoMDC(54, 0)).toBe(54);
    });

    it('deve retornar zero se ambos forem zero', () => {
        expect(calculoMDC(0, 0)).toBe(0); // comportamento comum
    });
});

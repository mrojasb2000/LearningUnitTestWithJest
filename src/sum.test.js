const { expect } = require('@jest/globals');
const suma = require('./sum')

test('should return 3 when adds two numbers 1 and 2', () => {
    expect(suma(1, 2)).toBe(3)
});

describe("Matchers", () => {
    it('object assignment', () => {
        const data = { one: 1 }
        data['two'] = 2
        expect(data).toEqual({ one: 1, two: 2 })
    });

    it('adding positive numbers is to zero', () => {
        for (let a = 1; a < 10; a++) {
            for (let b = 1; b < 10; b++) {
                expect(a + b).not.toBe(0)
            }
        }
    });
});

describe("Truthiness", () => {
    it('null', () => {
        const n = null;
        expect(n).toBeNull();
        expect(n).toBeDefined();
        expect(n).not.toBeUndefined();
        expect(n).not.toBeTruthy();
        expect(n).toBeFalsy();
    });

    it('zero', () => {
        const z = 0;
        expect(z).not.toBeNull();
        expect(z).toBeDefined();
        expect(z).not.toBeUndefined();
        expect(z).not.toBeTruthy();
        expect(z).toBeFalsy();
    });
});

describe("Numbes", () => {
    it('two plus two', () => {
        const value = 2 + 2;
        expect(value).toBeGreaterThan(3);
        expect(value).toBeGreaterThanOrEqual(3.5);
        expect(value).toBeLessThan(5);
        expect(value).toBeLessThanOrEqual(4.5);

        // toBe and toEqual are equivalent for numbers
        expect(value).toBe(4);
        expect(value).toEqual(4);
    });
    it('adding floating point numbers', () => {
        const value = 0.1 + 0.2;
        expect(value).toBeCloseTo(0.3)
    });
}); 

describe("Strings", () => {
    it('there is no I in team', () => {
        expect('team').not.toMatch(/I/);
    });
    it('but there is a "stop" in Christoph', () => {
        expect('Christoph').toMatch(/stop/)
    });
}); 


//test('', () => {});
/* describe("Truthiness", () => {
    it('null', () => {});
});  */   
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



//test('', () => {});
const suma = require('./sum')

test('should return 3 when adds two numbers 1 and 2', () => {
    expect(suma(1,2)).toBe(3)
});
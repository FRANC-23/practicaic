const sayHello = require('./app');

test('returns "Hola Mundo"', () => {
    expect(sayHello()).toBe('Hola Mundo');
});
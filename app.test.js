const sayHello = require('./app.js');

test('returns "Hola Mundo"', () => {
    expect(sayHello()).toBe('Hola Mundo');
});
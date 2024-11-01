const str = 'Hello, world!';

// Verifica se a string 'str' termina com a substring 'world!'
const endsWithWorld = str.endsWith('world!');

console.log(endsWithWorld); // Saída: true

// Verifica se a string 'str' termina com a substring 'hello'
const endsWithHello = str.endsWith('hello');

console.log(endsWithHello); // Saída: false


// A função endsWith() é um método de string em JavaScript que verifica se uma string termina com outra string.
// Ela retorna true se a string original termina com a substring especificada e false caso contrário.
// O método é sensível a maiúsculas e minúsculas, ou seja, ele diferencia entre letras maiúsculas e minúsculas.
// Sua sintaxe é: string.endsWith(substring).
// Onde 'string' é a string original que está sendo verificada e 'substring' é a string que estamos procurando no final da string original.
// Se a string original terminar com 'substring', a função retorna true; caso contrário, retorna false.

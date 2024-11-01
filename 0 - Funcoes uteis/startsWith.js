const str = 'JavaScript é incrível';

console.log(str.startsWith('Java')); // Retorna true
console.log(str.startsWith('javascript')); // Retorna false (diferencia maiúsculas e minúsculas)
console.log(str.startsWith('Script', 4)); // Retorna true (começa a verificação do índice 4)


// A função startsWith() é um método de string em JavaScript que verifica se uma string começa com outra string.
// Ela retorna true se a string original começa com a substring especificada e false caso contrário.
// O método é sensível a maiúsculas e minúsculas, ou seja, ele diferencia entre letras maiúsculas e minúsculas.
// Sua sintaxe é: string.startsWith(substring).
// Onde 'string' é a string original que está sendo verificada e 'substring' é a string que estamos procurando no início da string original.
// Se a string original começar com 'substring', a função retorna true; caso contrário, retorna false.

const numbers = [10, 20, 30, 40, 50];

// Função de retorno de chamada que verifica se um número é maior que 25
const foundIndex = numbers.findIndex(function(element) {
    return element > 25;
});

console.log(foundIndex); // Saída: 2 (índice do elemento 30 no array)

// O método findIndex() é usado em arrays para retornar o índice do primeiro elemento que satisfaz a condição especificada em uma função de retorno de chamada.
// Ele percorre o array e executa a função de retorno de chamada para cada elemento até encontrar um elemento que satisfaça a condição.
// Se encontrar um elemento que satisfaça a condição, retorna o índice desse elemento; caso contrário, retorna -1.
// Sua sintaxe é: array.findIndex(funcaoDeRetorno(elemento, indice, array), valorThisOpcional).
// Onde 'funcaoDeRetorno' é a função de callback que contém a condição a ser verificada para cada elemento.
// A função de retorno de chamada recebe três argumentos: 'elemento' (o elemento atual sendo processado), 'indice' (o índice do elemento atual no array) e 'array' (o array original).
// O argumento 'valorThisOpcional' é um valor opcional que é usado como 'this' dentro da função de retorno de chamada.

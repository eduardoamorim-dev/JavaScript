// ===  estrutura

let nomeDaVariavel; // declara variavel e atribui um nome

nomeDaVariavel = "um tipo de dado"; // iniciliza a variável

// === exemplo

let nome = "Carlos";

console.log(nome, "nasceu em 1984.");
console.log("Em 2000", nome, "conheceu Maria.");
console.log(nome, "casou-se com Maria em 2012");
console.log("Maria teve 1 filho com", nome, "em 2015");
console.log("O filho de", nome, "se chama Eduardo");

// ==================== anotações

// A palavra-chave let em JavaScript é usada para declarar variáveis que podem ser reatribuídas,
// mas que têm um escopo de bloco. Optar por usar let é adequado nas seguintes situações:

/*

Escopo de Bloco: Se você precisa que a variável esteja acessível apenas dentro de um
bloco específico (como dentro de um loop, uma condição if, uma função, etc.), let é
a escolha certa. Isso ajuda a evitar conflitos de nomes de variáveis e bugs relacionados
ao escopo.  Exemplo:

*/

if (true) {
  let message = "Hello, World!";
  console.log(message); // "Hello, World!"
}
console.log(message); // ReferenceError: message is not defined

/*

Reatribuição de Valor: Quando você precisa mudar o valor da variável durante a execução 
do código, let permite isso. Exemplo: 

*/

let counter = 1;
counter = 2; // reatribuição permitida
console.log(counter); // 2

/*

Inicialização Condicional: Se a variável pode ser inicializada em diferentes blocos de código
ou se você precisa declarar a variável sem inicializá-la imediatamente, use let. Exemplo:

*/

let sum;

if (condition) {
  sum = 10 + 20;
} else {
  sum = 5 + 5;
}
console.log(sum);

/*

Evitar Problemas com var: var tem um escopo de função e elevação (hoisting), o que pode levar
a comportamentos inesperados. let evita esses problemas, tornando o código mais previsível e 
fácil de entender. Exemplo:

*/

console.log(a); // undefined
var a = 10;

console.log(b); // ReferenceError: b is not defined
let b = 10;

/*

Em resumo, use let sempre que precisar de uma variável com escopo
de bloco e que pode ser reatribuída. Para variáveis que não devem
ser reatribuídas, prefira const. Evite var, a menos que você precise
de um comportamento específico relacionado ao seu escopo de função ou elevação.

*/

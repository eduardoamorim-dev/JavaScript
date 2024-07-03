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

// A palavra-chave const em JavaScript é usada para declarar
// variáveis cujo valor não pode ser reatribuído e que têm escopo de bloco.

/*

Valor Constante: Quando você sabe que o valor da variável não vai mudar ao
longo do tempo, const é a escolha certa.

*/

const pi = 3.14159;
console.log(pi); // 3.14159

/*

Escopo de Bloco: Assim como let, const tem escopo de bloco.
Isso significa que a variável estará acessível apenas dentro do bloco onde
foi declarada. 

*/

if (true) {
  const message = "Hello, World!";
  console.log(message); // "Hello, World!"
}
console.log(message); // ReferenceError: message is not defined

/*

Imutabilidade de Referência: Para objetos e arrays, const garante
que a referência ao objeto ou array não mudará. No entanto, o 
conteúdo interno ainda pode ser modificado.

*/

const person = {
  name: "John",
  age: 30,
};

person.age = 31; // Isso é permitido
console.log(person.age); // 31

// person = {}; // Isso não é permitido e resultará em um erro

/*

Claridade de Intenção: Usar const deixa claro para quem lê o código
que aquela variável não deve ser reatribuída, tornando o código mais
fácil de entender e manter.

*/

const MAX_USERS = 100;
const API_URL = "https://api.example.com";

/*

Prevenção de Reatribuição Acidental: Usar const ajuda a evitar erros
onde uma variável poderia ser reatribuída acidentalmente, garantindo 
que ela mantenha o valor original.

*/

const username = "Alice";
// username = "Bob"; // Isso não é permitido e resultará em um erro

/*

Em resumo, use const para variáveis cujo valor não deve ser reatribuído,
proporcionando segurança e clareza ao seu código. Para variáveis que precisam 
ser reatribuídas, use let. Evite var devido ao seu comportamento menos 
previsível relacionado ao escopo e elevação.

*/

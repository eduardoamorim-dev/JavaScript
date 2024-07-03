/*

=== Utilize let e const para imprimir esses dados:

Carlos Eduardo Amorim tem 25 anos,
pesa 86kg tem 1.84 de altura e seu IMC é de 25.9259259259259.
Carlos Eduardo nasceu em 1999

*/

const nome = "Carlos Eduardo";
const sobrenome = "Amorim";
let idade = 25;
let anoNascimento;
let peso = 86;
let altura = 1.84;
let imc;

imc = peso / (altura * altura);
anoNascimento = 2024 - idade;

console.log(
  nome + " " + sobrenome + " tem, " + idade + " anos, pesa " + peso + "kg"
);

console.log(`tem ${altura} de altura e seu IMC é de ${imc}`);

console.log(nome, sobrenome, "nasceu em", anoNascimento);

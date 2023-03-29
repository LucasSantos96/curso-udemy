//Exercícios de let e const 

//Calcular o imc Peso/ (altura * altura)
const nome = 'Lucas Santos';
const sobrenome = 'De Oliveira';
const idade = 26;
const peso = 80;
const altura = 1.72;
let imc ;
let anoNascimento ;
imc = peso / (altura * altura);
anoNascimento = 2022 - idade;

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg  tem ${altura} e seu IMC é de:'${imc}`);
console.log(`${nome,sobrenome} Nasceu em ${anoNascimento}.`);
// ao usar crases para ler o valor usamos ${}  ex: (` ${valor}`)


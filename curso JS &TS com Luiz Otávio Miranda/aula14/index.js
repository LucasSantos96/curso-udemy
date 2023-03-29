// Mais sobre Numbers

//IEEE 754-2008  Padrão que o javaScript segue para a precisão dos números

//let num1 = 10.5790987766776; //Number
//let num2 = 2.5; //Number


//console.log(num1.toString() + num2); // .toString e usado para transformar um Number em uma string.
//console.log(num1.toString(2)); //o numero 2 indentifica a visualização em números binários 
//console.log(num1.toFixed(2)); // arrendoda o número para a quantidade de casas decimais selecionada como no exemplo:(2.)
//console.log(Number.isInteger(num1));//Declara se o número e inteiro

//let temp = num1 * 'Ola';
//console.log(Number.isNaN(temp));// confirma se a conta e não é possível.



let num1 = 0.7;
let num2 = 0.1;
num1 += num2; // num1= num1 + num2;
num1 += num2;
num1 += num2;
num1 += num2;
num1 += num2;
num1 += num2;
num1 += num2;
num1 += num2;
num1 += num2;
num1 += num2;
num1 += num2;
num1 += num2;
num1 += num2;

num1 = Number(num1.toFixed(2));

console.log(num1);
console.log(Number.isInteger(num1));  //isInteger mostra se e um numero inteiro.


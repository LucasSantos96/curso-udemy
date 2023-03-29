let umaString = "Um \"texto\"";   //USe a barra invertida quando precisar colocar aspas na string
console.log(umaString)


// As strings são indexadas 
console.log(umaString.charAt(4)) // para exibir a letra de acordo com a numeraçao do índice, o numero do índice depende da quantidades de letra de uma string, o primeiro número sempre e 0 e assim por diante.

console.log(umaString.concat('em um lindo dia !'));  // .concat faz a mesma coisa que o sinal de +, ele faz a concatenação.


console.log(umaString.indexOf('texto')) // .indexOf é usado para saber o número do índice do texto citado .

console.log(umaString.lastIndexOf('m', 4)); // começa de traz pra frente mostrando a posição no índice do valor indicado.

console.log(umaString.replace('Um', 'outra'))  // .replace muda um valor na string como no exeplo mudamos o 'Um' para 'outra'.

console.log(umaString.length) // para saber o tamanho da string

console.log(umaString.slice(2,8)); // determina de onde começar e onde termina.


console.log(umaString.toUpperCase()); // deixa em maiúsculo



console.log(umaString.toLowerCase()); // deixa em minúsculo
console.log(umaString.split('')); // mostra as palavras do texto


//arrays
// sempre que tiver elementos criados dentro de [] colchetes ele se torna uma array, pode ser colocado num, letras, objetos e funções, todos separados por virgula.


const aluno = ['Luiz', 'Maria', 'João'];
//console.log(aluno [0])    //chamei entre colchetes para chamar o índice 0 como no exemplo Luiz, cada índice representa um elemento, e todos os elementos juntos representam uma ARRAY. 


//aluno [0] = 'Eduardo'; //nesse exemplo modifiquei a array (0) que antes era Luiz e agr passa a ser Eduardo.
//aluno[3] = ' Luiza';  //nesse exemplo adicionei a array o índice (3) como luiza.

 //console.log(aluno.length)  length para saber o tamanho da array: quantos índices tenho.

 /*aluno.push('Pedro');
 aluno.push('José');
 aluno.push('Maria');  .Push para adicionar um elemento ao final da array. */
 
// aluno.unshift('Maria');
 //aluno.unshift('Marta');
// aluno.unshift('Henrique');        .unshift adiciona um elemento no começo de uma array.

//aluno.pop() .pop apaga o ultimo elemento da array 
//const removido = aluno.pop();   criei uma variável para salvar o arquivo apagado na memória 
//console.log(removido)

//aluno.shift()   .shift remove do início da array 
//const removido = aluno.shift(); salvei o elemento apagado na memória 

//delete aluno[1]; delete apaga o elemento mas mantem o índice vazio

//console.log(aluno.slice(0,-2)); .slice : aqui no exemplo eu consigo fazer a contagem a partir de um número de índice, no exemplo foi do primeiro (0) até -2 que siginifica contar do início e tirar os 2 últimos elementos da array 

//console.log(aluno instanceof Array);  aqui estou confirmando que e uma array 


 console.log(aluno)



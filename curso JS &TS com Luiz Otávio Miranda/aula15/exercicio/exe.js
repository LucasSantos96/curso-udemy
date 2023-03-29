const numero = Number (prompt('Digite um número:')); //envolvi com NUmber para que o número não fique como uma string na hora do cálculo.
const num1 = document.getElementById('num1');
const texto = document.getElementById('texto');

num1.innerHTML = numero; // usei para modificar o numero que estava dentro do <span> do <h1> colocando o número adicionado no prompt.
texto.innerHTML = '';
texto.innerHTML += `<p>Raiz quadrada: <strong>${numero ** 0.5}</strong> .</p>`;
texto.innerHTML += `<p>É NAN: <strong>${Number.isNaN(numero)}</strong> .</p>`;

texto.innerHTML += `<p>${numero} é inteiro: <strong>${Number.isInteger(numero)}</strong> .</p>`;
texto.innerHTML += `<p>Arredondando para baixo: <strong>${Math.floor(numero)}</strong> .</p>`;
texto.innerHTML += `<p>Arredondando para cima: <strong>${Math.ceil(numero)}</strong> .</p>`;
texto.innerHTML +=`<p>Com duas casas decimais: <strong>${numero.toFixed(2)}</strong> .</p>`;
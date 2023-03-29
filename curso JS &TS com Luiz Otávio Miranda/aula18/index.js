// OBJETOS

// ARGUMENTO E O VALOR QUE É PASSADO PARA DENTRO DO PARAMETRO


/*function criarPessoa (nome, sobrenome, idade) {
    return {
        nome , sobrenome, idade };
}

const pessoa1 = criarPessoa('Lucas','Santos',26);
const pessoa2 = criarPessoa('Pedro','Santos',24);
const pessoa3 = criarPessoa('Luan','Oliveira',26);
const pessoa4 = criarPessoa('Larissa','Santos',36);*/


const pessoa1 = {  
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 25,

    fala(){
        console.log(`${this.nome} ${this.sobrenome} está falando oi...`);
    }
};
pessoa1.fala();



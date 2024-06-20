// Como criar um objeto em JS

/* const pessoa1 = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 25
};

console.log(pessoa1.nome);
console.log(pessoa1.sobrenome); */

// Função que cria objeto

/* // Método original
function criaPessoa (nome, sobrenome, idade) {
    return { nome: nome,
         sobrenome: sobrenome,
         idade: idade };
};

const pessoa1 = criaPessoa(`Luiz`, `Miranda`, 25);
const pessoa2 = criaPessoa(`Maria`, `Moreira`, 32);
const pessoa3 = criaPessoa(`João`, `Silva`, 55);
const pessoa4 = criaPessoa(`Júnior`, `Otávio`, 44);
const pessoa5 = criaPessoa(`Jean`, `Cascata`, 69); 
console.log(pessoa1.nome, pessoa1.sobrenome);
*/

/* // Método simplificado
function criaPessoa (nome, sobrenome, idade) {
    return { nome, sobrenome, idade };
};

const pessoa1 = criaPessoa(`Luiz`, `Miranda`, 25);
const pessoa2 = criaPessoa(`Maria`, `Moreira`, 32);
const pessoa3 = criaPessoa(`João`, `Silva`, 55);
const pessoa4 = criaPessoa(`Júnior`, `Otávio`, 44);
const pessoa5 = criaPessoa(`Jean`, `Cascata`, 69);

console.log(pessoa1.nome, pessoa1.sobrenome); */

const pessoa1 = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 25,

    fala() {
        console.log(`A minha idade atual é ${this.idade}.`)
    },

    incrementaIdade() {
        this.idade++;
    }
};

pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
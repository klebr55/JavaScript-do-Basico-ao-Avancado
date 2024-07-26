/* 

    -=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= AULA 27 -=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

    Em JavaScript, ? : é o operador ternário, também conhecido como operador condicional. Ele é uma forma concisa de escrever uma declaração if-else. A sintaxe básica do operador ternário é: 

    variável = condição ? expressão1 : expressão2;

    Aqui está o que cada parte faz:

    condição: Uma expressão que é avaliada como true ou false.

    expressão1: O valor ou expressão que será retornado se a condição for true.

    expressão2: O valor ou expressão que será retornado se a condição for false.

    Em outras palavras, o operador ternário verifica a condição. Se a condição for verdadeira, ele retorna expressão1. Caso contrário, ele retorna expressão2.

*/

// Exemplos:

const pontuacaoUsuario = 1000;
const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuário VIP' : 'Usuário Normal'; // Forma abreviada de se escrever uma condição em formato de código

// Forma completa e mais conhecida de como se escrever uma condição em código

if (pontuacaoUsuario >= 1000) {
    console.log('Usuário VIP');
} else {
    console.log('Usuário Normal');
};

// Outros exemplos:

let idade = 18;
let podeVotar = (idade >= 18) ? "Pode votar" : "Não pode votar";
console.log(podeVotar); // Saída: Pode votar

let a = 5;
let b = 10;
let maiorNumero = (a > b) ? a : b;
console.log(maiorNumero); // Saída: 10
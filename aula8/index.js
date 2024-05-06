// 1. Escopo de Bloco:
//    - 'let' tem escopo de bloco, o que significa que ela só é visível dentro do bloco em que foi declarada.
//    - 'var' tem escopo de função, o que significa que é visível em toda a função em que foi declarada.

// Exemplo:
{
    let x = 10;
    var y = 20;
}
console.log(x); // Erro: x não está definido
console.log(y); // 20

// 2. Hoisting:
//    - Declarações 'let' não são içadas (hoisted). Elas só estão disponíveis após a linha em que são declaradas.
//    - Declarações 'var' são içadas (hoisted) para o topo de seu escopo e podem ser usadas antes de serem declaradas.

// Exemplo:
console.log(z); // undefined
var z = 30;

console.log(w); // Erro: w não está definido
let w = 40;

// 3. Redeclaração:
//    - Você pode redeclarar uma variável usando 'var' sem lançar um erro.
//    - Tentar redeclarar uma variável usando 'let' lançará um erro.

// Exemplo:
var a = 50;
var a = 60; // Sem erro

let b = 70;
let b = 80; // Erro: SyntaxError: Identifier 'b' has already been declared

// 4. Temporal Dead Zone (TDZ):
//    - Variáveis declaradas com 'let' entram na Temporal Dead Zone (TDZ) desde o início do bloco em que são declaradas até o ponto em que são inicializadas.
//    - Tentar acessar uma variável dentro de sua TDZ resultará em um ReferenceError.

// Exemplo:
console.log(c); // Erro: c não está definido
let c = 90;

// 5. Escopo em loop:
//    - Em loops 'for', 'let' cria uma ligação única para cada iteração, o que significa que cada iteração tem sua própria variável 'let' com um escopo separado.
//    - Usar 'var' em um loop 'for' resulta em compartilhamento de escopo, onde a variável 'var' é compartilhada entre todas as iterações do loop.

// Exemplo:
for (let i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 0); // 0, 1, 2
}

for (var j = 0; j < 3; j++) {
    setTimeout(() => console.log(j), 0); // 3, 3, 3
}

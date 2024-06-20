// Valores Falsy em JavaScript
// Estes são valores que, quando avaliados em um contexto booleano, são considerados false.

let falsyValues = [
    false,          // O valor booleano false é naturalmente falsy
    0,              // O número zero é considerado falsy
    -0,             // O número negativo zero também é considerado falsy
    0n,             // O valor zero BigInt é considerado falsy
    "",             // Uma string vazia é considerada falsy
    null,           // O valor null é considerado falsy
    undefined,      // O valor undefined é considerado falsy
    NaN             // O valor NaN (Not-a-Number) é considerado falsy
];

// Exemplo de uso dos valores falsy
falsyValues.forEach(value => {
    if (!value) {
        console.log(`${value} é um valor falsy`);
    }
});

// Explicação comentada dos valores falsy

// false: O valor booleano false é diretamente considerado falsy.
// 0: O número zero, independentemente do sinal, é falsy.
// -0: O número negativo zero também é falsy (equivalente ao zero positivo).
// 0n: O valor zero BigInt é falsy. BigInt é um tipo de dado para números inteiros grandes.
// "": Uma string vazia é falsy. Qualquer string não vazia é considerada truthy.
// null: null representa a ausência intencional de qualquer valor objeto e é falsy.
// undefined: undefined indica que uma variável não foi atribuída a um valor e é falsy.
// NaN: NaN significa Not-a-Number e resulta de operações matemáticas indeterminadas. É falsy.

// Testando valores falsy em condições
// Este bloco de código demonstra que cada valor da lista falsyValues é avaliado como false no contexto booleano.

if (!false) {
    console.log("false é um valor falsy");
}
if (!0) {
    console.log("0 é um valor falsy");
}
if (!-0) {
    console.log("-0 é um valor falsy");
}
if (!0n) {
    console.log("0n é um valor falsy");
}
if (!"") {
    console.log("\"\" é um valor falsy");
}
if (!null) {
    console.log("null é um valor falsy");
}
if (!undefined) {
    console.log("undefined é um valor falsy");
}
if (!NaN) {
    console.log("NaN é um valor falsy");
}

// Exemplo 1: Verificando se uma variável é falsy
let valor = 0;

if (!valor) {
    console.log("O valor é falsy"); // Saída: O valor é falsy
} else {
    console.log("O valor é truthy");
}

// Exemplo 2: Usando valor padrão se a variável for falsy
let nome = "";

let nomePadrao = nome || "Visitante";
console.log(nomePadrao); // Saída: Visitante

// Exemplo 3: Filtrando valores falsy de um array
let valores = [0, "Olá", false, 42, "", null, "Mundo", undefined, NaN];
let valoresFiltrados = valores.filter(valor => Boolean(valor));

console.log(valoresFiltrados); // Saída: ["Olá", 42, "Mundo"]

// Exemplo 4: Uso em uma função simples
function saudacao(nome) {
    // Se nome for falsy, use "Visitante" como valor padrão
    let saudacaoNome = nome || "Visitante";
    console.log(`Olá, ${saudacaoNome}!`);
}

saudacao("");       // Saída: Olá, Visitante!
saudacao("Ana");    // Saída: Olá, Ana!

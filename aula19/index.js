// Em JavaScript, existem dois tipos principais de dados: tipos primitivos e tipos referenciáveis.

// Tipos primitivos:
// Tipos primitivos são dados que são imutáveis e armazenados diretamente na memória. 
// Existem sete tipos primitivos em JavaScript:

// 1. Number: Representa números, tanto inteiros quanto de ponto flutuante.
let num = 42; // Exemplos de tipo Number
let pi = 3.14;

// 2. String: Cadeias de caracteres.
let greeting = "Olá, mundo!"; // Exemplo de tipo String

// 3. Boolean: Valores verdadeiros ou falsos.
let isJavaScriptFun = true; // Exemplo de tipo Boolean

// 4. Undefined: Representa uma variável que foi declarada, mas ainda não foi definida.
let x; // x é undefined

// 5. Null: Representa a ausência intencional de qualquer valor.
let y = null; // y é null

// 6. Symbol: Representa um valor único e imutável, frequentemente usado como identificador.
let sym = Symbol("id"); // Exemplo de tipo Symbol

// 7. BigInt: Representa números inteiros de precisão arbitrária.
let bigIntNum = 1234567890123456789012345678901234567890n; // Exemplo de tipo BigInt

// Tipos primitivos são copiados por valor. Isso significa que quando você atribui ou passa um tipo primitivo,
// você está criando uma cópia independente do valor. Por exemplo:
let a = 10;
let b = a; // b agora é 10
a = 20;   // mudar 'a' não afeta 'b'
console.log(a); // 20
console.log(b); // 10

// Tipos referenciáveis:
// Tipos referenciáveis são objetos que são armazenados na memória como referências.
// Isso significa que quando você atribui ou passa um objeto, você está passando uma referência ao local na memória.
// Existem vários tipos de objetos em JavaScript, incluindo:

// 1. Object: A base de todos os outros tipos de objetos.
let obj = { name: "Alice", age: 25 }; // Exemplo de tipo Object

// 2. Array: Uma lista ordenada de valores.
let arr = [1, 2, 3, 4]; // Exemplo de tipo Array

// 3. Function: Um bloco de código que pode ser chamado.
function greet() {
  console.log("Hello!");
} // Exemplo de tipo Function

// 4. Date: Representa datas e horários.
let now = new Date(); // Exemplo de tipo Date

// 5. RegExp: Expressões regulares usadas para correspondência de padrões de texto.
let regex = /ab+c/; // Exemplo de tipo RegExp

// Objetos são copiados por referência. Isso significa que quando você atribui ou passa um objeto,
// você está passando uma referência ao mesmo objeto na memória. Por exemplo:
let obj1 = { value: 10 };
let obj2 = obj1; // obj2 referencia o mesmo objeto que obj1
obj1.value = 20; // mudar 'obj1' afeta 'obj2' também
console.log(obj1.value); // 20
console.log(obj2.value); // 20

// Resumindo:
// - Tipos primitivos são imutáveis e são copiados por valor.
// - Tipos referenciáveis (objetos) são mutáveis e são copiados por referência.

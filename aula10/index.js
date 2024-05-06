// Operadores Aritméticos:
// 1. Adição (+): Soma dois valores.
let soma = 5 + 3; // soma será 8

// 2. Subtração (-): Subtrai um valor de outro.
let subtracao = 7 - 2; // subtracao será 5

// 3. Multiplicação (*): Multiplica dois valores.
let multiplicacao = 4 * 6; // multiplicacao será 24

// 4. Divisão (/): Divide um valor por outro.
let divisao = 10 / 2; // divisao será 5

// 5. Resto da Divisão (%) ou Módulo: Retorna o resto da divisão entre dois valores.
let resto = 10 % 3; // resto será 1 (pois 10 dividido por 3 é 3 com resto 1)

// Operadores de Atribuição:
// 1. Atribuição Simples (=): Atribui o valor do lado direito ao operando do lado esquerdo.
let x = 10; // x é atribuído como 10

// 2. Atribuição de Adição (+=): Adiciona o valor do lado direito ao operando do lado esquerdo.
let y = 5;
y += 3; // é o mesmo que y = y + 3, então y será 8

// 3. Atribuição de Subtração (-=): Subtrai o valor do lado direito ao operando do lado esquerdo.
let z = 7;
z -= 2; // é o mesmo que z = z - 2, então z será 5

// 4. Atribuição de Multiplicação (*=): Multiplica o operando do lado esquerdo pelo valor do lado direito.
let w = 4;
w *= 6; // é o mesmo que w = w * 6, então w será 24

// 5. Atribuição de Divisão (/=): Divide o operando do lado esquerdo pelo valor do lado direito.
let v = 10;
v /= 2; // é o mesmo que v = v / 2, então v será 5

// Operadores de Incremento e Decremento:
// 1. Incremento (++): Adiciona 1 ao valor da variável.
let a = 5;
a++; // a será 6

// 2. Decremento (--): Subtrai 1 do valor da variável.
let b = 7;
b--; // b será 6

// 3. Pré-incremento com operador ++ antes da variável:
let x = 5;
let y = ++x; // Incrementa o valor de x antes de atribuir a y.
// Agora, x será 6 e y também será 6.

// 4. Pré-incremento em expressões:
let a = 3;
let b = 2 * ++a; // Incrementa o valor de a antes de usar na expressão.
// Agora, a será 4 e b será 8.

// 5. Pré-incremento em uma instrução de loop:
let i = 0;
while (++i < 5) {
    console.log(i); // 1, 2, 3, 4
}
// Neste exemplo, o valor de i é incrementado antes de cada verificação no loop.

// parseInt:
// - A função parseInt converte uma string em um número inteiro.
// - Ela analisa a string do início até encontrar um caractere que não seja um dígito válido, e retorna o valor inteiro resultante.
// - Você pode especificar uma base (radix) como segundo parâmetro, que representa a base numérica do número na string (por padrão, é 10).
let numeroInteiro = parseInt("10"); // Retorna 10
let numeroBinario = parseInt("1010", 2); // Retorna 10 (interpretando "1010" como um número binário)

// parseFloat:
// - A função parseFloat converte uma string em um número de ponto flutuante.
// - Ela analisa a string até encontrar um caractere que não seja um dígito válido ou um ponto decimal, e retorna o valor de ponto flutuante resultante.
let numeroDecimal = parseFloat("3.14"); // Retorna 3.14
let numeroExponencial = parseFloat("2.5e2"); // Retorna 250 (2.5 multiplicado por 10 elevado a 2)

// Ambas as funções ignoram espaços em branco no início e no final da string, mas não no meio.
let numeroEspacos = parseInt("   42   "); // Retorna 42
let numeroEspacosPonto = parseFloat("   3.14   "); // Retorna 3.14

// Se a string não começar com um formato reconhecível, ambas as funções retornarão NaN (Not a Number).
let naoANumero = parseInt("Olá"); // Retorna NaN
let naoANumeroPonto = parseFloat("3.14.15"); // Retorna 3.14 (somente a parte antes do segundo ponto é considerada)

// É importante lembrar que ambas as funções não são capazes de converter uma string que contém um número em notação científica em um número inteiro ou de ponto flutuante.

// Esses são os tipos de operadores aritméticos, de atribuição e incremento em JavaScript.
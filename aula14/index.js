let num1 = 10;
let num2 = 2.5;

// console.log(num1.toString() + num2); // Transforma o numero em String e tenta somar com um número.

// num1 = num1.toString(); // Atribui o valor de string a variável num1

// console.log(num1.toString(2)); // Converte para Binário

// console.log(num1.toFixed(2)); // toFixed define quantas casas decimais terá

// console.log(Number.isInteger(num1)); // Verifica se o número é inteiro ou não

// let temp = num1 * 'Olá';
// console.log(Number.isNaN(temp)); // Verifica se é NaN


// O JavaScript não soma corretamente os números quebrados. Então para resolver isso, sempre utilize Number() ou parseFloat() para ter os números somados corretamente.

 num1 += num2;
 num1 = Number(num1.toFixed(2));
 // num1 = parseFloat(num1.toFixed(2));

 
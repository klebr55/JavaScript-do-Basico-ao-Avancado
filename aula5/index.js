// Não podemos criar variáveis com palavras reservadas
// Variáveis precisam ter nomes significativos
// Não pode começar o nome dde uma variável com um número
// Não podem conter espaços ou traços
// Utilizamos camelCase
// Case-sensitive
// Não podde modificar o valor de uma constante
// NÃO UTILIZE VAR, UTILIZE CONST

/*
  Utilize 'const' quando você tem um valor que não será reatribuído.
  Isso garante que o valor da variável permanecerá o mesmo ao longo do código
  e ajuda a evitar possíveis erros de reatribuição acidental.

  Além disso, 'const' é uma boa escolha quando você precisa definir valores que são constantes,
  como valores numéricos fixos, strings ou objetos imutáveis.

  Exemplo:
  const PI = 3.14159; // Um valor constante como PI não será alterado em seu código.
  const nome = "João"; // O nome do usuário pode ser constante durante a execução do programa.
*/

// Não podemos criar variáveis com palavras reservadas
const limite = 100; // "limite" não é uma palavra reservada em JavaScript

// Variáveis precisam ter nomes significativos
const temperaturaAtual = 25;
const nomeCliente = "Maria Silva";

// Não pode começar o nome de uma variável com um número
const quantidadeProdutos = 10; // Correto
const 2usuarios = 5; // Incorreto: não pode começar com um número

// Não podem conter espaços ou traços
const enderecoCliente = "Rua ABC"; // Correto
const nome_completo = "João"; // Incorreto: contém traço

// Utilizamos camelCase
const saldoBancario = 1000;
const nomeDoCliente = "Carlos";

// Case-sensitive
const animal = "gato";
const Animal = "cachorro"; // Variável diferente de "animal"

// Não pode modificar o valor de uma constante
const PI = 3.14159;
// PI = 3; // Isso gerará um erro, pois não podemos reatribuir o valor de uma constante

// Outros exemplos de const

const primeiroNumero = 5;
const segundoNumero = 10;
const resultado = primeiroNumero * segundoNumero;
const resultadoDuplicado = resultado * 2;
let resultadoTriplicado = resultado * 3;
resultadoTriplicado = resultadoTriplicado + 5;

console.log(typeof(primeiroNumero + segundoNumero));

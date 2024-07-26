// Não podemos criar variáveis com palavras reservadas
// Variáveis precisam ter nomes significativos
// Não pode começar o nome dde uma variável com um número
// Não podem conter espaços ou traços
// Utilizamos camelCase
// Case-sensitive
 
/*
   Situações para utilizar 'var' em JavaScript:
   
   1. Compatibilidade: Se você estiver trabalhando em um ambiente onde precisa garantir compatibilidade com versões mais antigas do JavaScript (ES5 ou anterior), pode optar por usar 'var', já que é suportado em todas as versões do JavaScript.
   
   2. Escopo de função: Se você deseja que a variável tenha escopo de função em vez de escopo de bloco (como é o caso do 'let' e 'const'), 'var' pode ser útil. Variáveis declaradas com 'var' são elevadas (hoisted) para o topo da função ou script, o que significa que elas podem ser acessadas em qualquer lugar dentro da função onde são declaradas.
   
   3. Variáveis globais: Se você deseja criar uma variável global (disponível em todo o escopo do script), pode usar 'var'. No entanto, é importante estar ciente de possíveis colisões de nomes de variáveis entre diferentes partes do seu código.
   
   4. Redefinição de variáveis: 'var' permite que você redefina uma variável já declarada, o que pode ser útil em certas situações, mas também pode levar a bugs difíceis de depurar se não for usado com cuidado.
   
   No entanto, é importante notar que, em muitos casos, é recomendado evitar o uso de 'var' em favor de 'let' e 'const', especialmente em código moderno, devido ao escopo mais previsível e à prevenção de bugs causados por hoisting e redefinição de variáveis.
*/

// Não podemos criar variáveis com palavras reservadas
let constante = 10; // "constante" não é uma palavra reservada em JavaScript

// Variáveis precisam ter nomes significativos
let idadeUsuario = 25;
let nomeCompleto = "Kleber Vinícius";

// Não pode começar o nome de uma variável com um número
let quantidadeProdutos = 10; // Correto
let 2usuarios = 5; // Incorreto: não pode começar com um número

// Não podem conter espaços ou traços
let enderecoUsuario = "Rua ABC"; // Correto
let nome-completo = "Maria"; // Incorreto: contém traço

// Utilizamos camelCase
let saldoBancario = 1000;
let nomeDoUsuario = "Carlos";

// Case-sensitive
let animal = "gato";
let Animal = "cachorro"; // Variável diferente de "animal"

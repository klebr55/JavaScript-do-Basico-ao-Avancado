/* Script da aula 26 que calcula o IMC da pessoa e apresenta
a mensagem na tela */

const form = document.querySelector(".form"); // Esta linha seleciona o primeiro elemento do documento com a classe "form" e o atribui à constante form.

// Adiciona um evento ao formulário form que será acionado quando o formulário for submetido (evento "submit"). A função callback anônima recebe o evento e como argumento.
form.addEventListener("submit", function (e) { 
  e.preventDefault(); // Previne o comportamento padrão do evento "submit", que seria recarregar a página.
  
  // Seleciona os elementos de entrada (inputs) com as classes "peso" e "altura" dentro do formulário submetido (e.target) e os atribui às constantes inputPeso e inputAltura.
  const inputPeso = e.target.querySelector(".peso");
  const inputAltura = e.target.querySelector(".altura");
  
  // Converte os valores dos inputs para números e os armazena nas constantes peso e altura.
  const peso = Number(inputPeso.value);
  const altura = Number(inputAltura.value);
  
  // Verifica se peso é um valor falsy (0, null, NaN, etc.). Se for, chama a função setResultado com a mensagem "Peso inválido" e false como parâmetros, e termina a execução da função.
  if (!peso) {
    setResultado("Peso inválido", false);
    return;
  }

  // Faz a mesma verificação para altura. Se altura for um valor falsy, exibe a mensagem "Altura inválida" e termina a execução da função.
  if (!altura) {
    setResultado("Altura inválida", false);
    return;
  }

  const imc = getImc(peso, altura); // Calcula o IMC (Índice de Massa Corporal) chamando a função getImc com peso e altura como argumentos e armazena o resultado em imc.
  const nivelImc = getNivelImc(imc); // Determina o nível do IMC chamando a função getNivelImc com imc como argumento e armazena o resultado em nivelImc.

  // Cria uma mensagem que será exibida ao usuário, contendo o valor do IMC e seu nível correspondente.
  const msg = `Seu IMC é ${imc} (${nivelImc}).`;

  setResultado(msg, true); // Chama a função setResultado com a mensagem msg e true como parâmetros para exibir a mensagem ao usuário indicando que a operação foi bem-sucedida.
});

// Função que calcula o IMC dividindo peso pela altura ao quadrado. Retorna o IMC com duas casas decimais.
function getImc(peso, altura) {
  imc = peso / altura ** 2;
  return imc.toFixed(2);
}

// Define um array nivel contendo as descrições dos níveis de IMC.
function getNivelImc(imc) {
  const nivel = [
    "Abaixo do peso",
    "Peso Normal",
    "Sobrepeso",
    "Obesidade Grau 1",
    "Obesidade Grau 2",
    "Obesidade Grau 3",
  ];

  // Compara o valor do IMC através de condições e retorna a descrição correspondente do array nivel.
  if (imc >= 39.9) return nivel[5];
  if (imc >= 34.9) return nivel[4];
  if (imc >= 29.9) return nivel[3];
  if (imc >= 24.9) return nivel[2];
  if (imc >= 18.5) return nivel[1];
  if (imc < 18.5) return nivel[0];
}

// Função que cria e retorna um elemento <p> (parágrafo).
function criaP() {
  const p = document.createElement("p");
  return p;
}

// Seleciona o elemento com a classe "resultado" e limpa seu conteúdo (innerHTML).
function setResultado(msg, isValid) {
  const resultado = document.querySelector(".resultado");
  resultado.innerHTML = "";
  
  // Cria um parágrafo chamando a função criaP.
  const p = criaP();
  
  // Adiciona uma classe CSS ao parágrafo dependendo se o resultado é válido (isValid). Se isValid for verdadeiro, adiciona a classe "paragrafo-resultado", caso contrário, adiciona a classe "bad".
  if (isValid) {
    p.classList.add("paragrafo-resultado");
  } else {
    p.classList.add("bad");
  }

  // Define o conteúdo HTML do parágrafo como a mensagem msg e adiciona o parágrafo ao elemento "resultado".
  p.innerHTML = msg;
  resultado.appendChild(p);
}
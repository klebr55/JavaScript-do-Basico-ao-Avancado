const nome = prompt("Digite seu nome completo: ");
const primeiro = nome.length - (nome.length + 1);

document.body.innerHTML += `Seu nome é: ${nome}<br />`;
document.body.innerHTML += `Seu nome tem: ${nome.length} letras. <br>`;
document.body.innerHTML += `A segunda letra do seu nome é: ${nome.charAt(1)} <br/>`;
document.body.innerHTML += `O primeiro índice da letra e no seu nome é: ${nome.indexOf("e")} <br>`;
document.body.innerHTML += `O último índice da letra e no seu nome é: ${nome.lastIndexOf("e")} <br/>`;
document.body.innerHTML += `As últimas 3 letras o seu nome são: ${nome.slice(-3)} <br>`;
document.body.innerHTML += `As palavras do seu nome são: ${nome.split(" ")} <br/>`;
document.body.innerHTML += `Seu nome com nome letras maiúsculas: ${nome.toUpperCase()} <br>`;
document.body.innerHTML += `Seu nome com letras minúsculas: ${nome.toLowerCase()}`;
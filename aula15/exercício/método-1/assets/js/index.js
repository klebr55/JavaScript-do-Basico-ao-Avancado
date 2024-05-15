const numero = Number(prompt(`Digite um número: `));


document.body.innerHTML += `<h1>Seu número é: ${numero}</h1>`;
document.body.innerHTML += `<p>A raiz quadrada é: ${Math.sqrt(numero)} </p>`;
document.body.innerHTML += `<p>${numero} é inteiro?: ${Number.isInteger(numero)}</p>`;
document.body.innerHTML += `<p>É NaN?: ${Number.isNaN(numero)}</p>`;
document.body.innerHTML += `<p>Arredondado para baixo: ${Math.floor(numero)}</p>`;
document.body.innerHTML += `<p>Arredondado para cima: ${Math.ceil(numero)}</p>`;
document.body.innerHTML += `<p>Com duas casas decimais: ${numero.toFixed(2)}</p>`;
// Faça um programa que leia o nome, a idade, o peso, a altura e que assim calcule o IMC dd pessoa com base nessas informações

let nome = prompt(`Por favor, insira seu nome: `);
let sobrenome = prompt(`Por favor, ${nome} insira seu sobrenome: `);
let idade = prompt(`Por gentileza, ${nome} ${sobrenome}, insira sua idade: `);
let peso = prompt(`Maravilhoso! ${nome}, agora insira seu peso!:` );
let altura = prompt(`Ótimo! Agora só preciso da sua altura: `);
let imc = peso / (altura ** 2)
let arredondado = Math.round(imc);

if (imc <= 18.4) {
    alert(`Olá ${nome} ${sobrenome}!
           Sua idade é: ${idade} anos.
           Seu peso é: ${peso} KG.
           Sua altura é: ${altura}m.
           E o seu IMC é: ${arredondado}

           Por favor, coma mais pois você está abaixo do peso o.O`);
}

else if (imc <= 24.9) {
    alert(`Olá ${nome} ${sobrenome}!
           Sua idade é: ${idade} anos. 
           Seu peso é: ${peso} KG.
           Sua altura é: ${altura}m.
           E o seu IMC é: ${arredondado}

           Parabéns, você está no peso ideal`);
}

else if (imc <= 29.9) {
    alert(`Olá ${nome} ${sobrenome}!
           Sua idade é: ${idade} anos. 
           Seu peso é: ${peso} KG.
           Sua altura é: ${altura}m.
           E o seu IMC é: ${arredondado}

           Iiiihhh rapaz, você está em sobrepeso. Cuide da sua saúde!`);
}

else if (imc <= 34.9) {
    alert(`Olá ${nome} ${sobrenome}!
           Sua idade é: ${idade} anos. 
           Seu peso é: ${peso} KG.
           Sua altura é: ${altura}m.
           E o seu IMC é: ${arredondado}

           Você está em Obesidade Grau I (leve), trate de cuidar da sua saúde!`);
}

else if (imc <= 39.9) {
    alert(`Olá ${nome} ${sobrenome}!
           Sua idade é: ${idade} anos. 
           Seu peso é: ${peso} KG.
           Sua altura é: ${altura}m.
           E o seu IMC é: ${arredondado}

           Você está em Obesidade Grau II (moderado), consulte um nutricionista ;)`);
}

else if (imc >= 40) {
    alert(`Olá ${nome} ${sobrenome}!
           Sua idade é: ${idade} anos. 
           Seu peso é: ${peso} KG.
           Sua altura é: ${altura}m.
           E o seu IMC é: ${arredondado}

           ALERTA, Obesidade Grau III (grave ou mórbida)
    
           Você não vai acreditar. Mas você cabia aqui. Eu segurava você e dizia “Esse menino vai ser o melhor menino do mundo. Esse menino vai ser melhor do que qualquer um que conhecemos.”. E você cresceu bom, maravilhoso.

           Aí chegou a hora de você ser adulto e conquistar o mundo. E conquistou. Mas em algum ponto desse percurso, você mudou. Você deixou de ser você.

           Agora deixa as pessoas botarem o dedo na sua cara e dizer que você não é bom. Eu vou te dizer uma coisa que você já sabe: O mundo não é um grande arco-íris. É um lugar sujo, é um lugar cruel. Que não quer saber o quanto você é durão. Vai botar você de joelhos e você vai ficar de joelhos para sempre se você deixar.

           Você, eu, ninguém vai bater tão duro como a vida. Mas não se trata de bater duro. Se trata de quanto você aguenta apanhar e seguir em frente. O quanto você é capaz de aguentar e continuar tentando. É assim que se consegue vencer.

           Agora se você sabe o seu valor, então vá atrás do que você merece. Mas tem que ter disposição para apanhar. E nada de apontar dedos, dizer que você não consegue por causa dele, dela ou de quem seja. Só covardes fazem isso e você não é covarde. Você é melhor do que isso!`);
}
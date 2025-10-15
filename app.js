//let titulo = document.querySelector('h1')
//titulo.innerHTML = 'Jogo do Numero Secreto!';

//let paragrafo = document.querySelector('p');
//paragrafo.innerHTML = 'Escolha um número de 1 a 10!';






/*function converterDinheiro(){
      
    
    let dolarEmReais = prompt("Digite o valor da cotação do dolar em reais!");
    let valorEmDolar = prompt("Digite o valor em dolar que deseja converter");
    
   

    let conversao = dolarEmReais * valorEmDolar;

    alert(`O valor de $${valorEmDolar} dolares em reais é:R$`+conversao);
}

converterDinheiro();*/



//////////////////////////////////////////////////////////////////////////
let listaDeNumerosSorteados = [];
let numeroLimite = 100;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;


function exibirTestoNaTela(tag, texto){
let campo = document.querySelector(tag);
campo.innerHTML = texto;
responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});

}

exibirMensagenInicial();



function verificarChute() {
    let chute = document.querySelector('input').value;
    
    if (chute == numeroSecreto){
         exibirTestoNaTela('h1', 'Acertou!');
        let palavraTentativa = tentativas > 1 ? 'Tentativas' : 'Tentativa';
        let mensagemTentavivas = `Voce descobriu o numero secreto com ${tentativas} ${palavraTentativa}`;
       
        exibirTestoNaTela('p', mensagemTentavivas);
        document.getElementById('reiniciar').removeAttribute('disabled');

    }else {
        
            if (chute > numeroSecreto){
        exibirTestoNaTela('p', 'O numero secreto é menor!');

        }  else {
        exibirTestoNaTela('p', 'O numero secreto é Maior!');

     }
     tentativas++;
    limparCampo();

    }

}

function gerarNumeroAleatorio() {
   let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
   let quantidadeDeNumeroNaLista = listaDeNumerosSorteados.length;

   if(quantidadeDeNumeroNaLista == numeroLimite){
    listaDeNumerosSorteados = [];
   }

   if(listaDeNumerosSorteados.includes(numeroEscolhido)){
    return gerarNumeroAleatorio();
   }else {
    listaDeNumerosSorteados.push(numeroEscolhido);
    console.log(listaDeNumerosSorteados);
     return numeroEscolhido;
   }


}


function exibirMensagenInicial(){
exibirTestoNaTela('h1', 'Jogo do Numero Secreto!');
exibirTestoNaTela('p', 'Escolha um número de 1 a 100!');
}




function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';

}
function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagenInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}


//////////////////////////////////////////////////////////////////////////
/*function somar3 () {
    alert(`Bem vindo a calculadora automatica de SOMA`);
let primeironumero = parseInt(prompt('Qual o primeiro numero?'));
let segundonumero = parseInt(prompt('Qual o segundo numero'));
let resultado = primeironumero + segundonumero;
alert(`O resultado da soma dos numeros é ${resultado}`);

}*/



/*function calcularIMC(){
      
       let peso = parseFloat(prompt('Digite seu Peso!'));
       let altura = parseFloat(prompt('Digite sua Altura'));
       
       if(isNaN(peso) || isNaN(altura) || altura <= 0){
        alert("Por favor Digite valores válidos para peso e altura!");
        return;

       }
let imc = peso / (altura * altura);

alert("Seu IMC é: " + imc.toFixed(2));
}

calcularIMC();*/
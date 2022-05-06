//variaveis dos numeros 
const numeros = document.querySelectorAll("[id*=tecla]");
const inserirNumero = (evento) => atualizarDisplay(evento.target.textContent);
let novoNumero = true;
//variaveis dos operadores
const operadores = document.querySelectorAll("[id*=operador]");
 // o [id*=""] serve para que seja buscado todos os elementos que tenham o id que começa com "tecla" 
 let operador;
 let numeroAnterior;
 const operacaoPendente = () => operador !== undefined;

 
 //variaveis do display
const display = document.getElementById("display");
const atualizarDisplay = (texto) => {
    if (novoNumero) {
        display.textContent = texto;
        novoNumero = false;
    }else{
        display.textContent += texto;
        //serve para concatenar o texto que está no display com o texto que está no botão
    }
}

 //elemesnto que está dentro do array é o elemento que está sendo clicado
numeros.forEach(numero => numero.addEventListener('click', inserirNumero));

const selecionarOperador = (evento) => {
    if(!novoNumero){
    //testar se é uma operação
    novoNumero = true;
    operador = evento.target.textContent;
    //guarda o operador que foi clicado
    numeroAnterior = parseFloat(display.textContent);
    //guarda o numero que está no display
    console.log(operador);
    }
}
operadores.forEach(operador => operador.addEventListener('click', selecionarOperador));

//criação da função para calcular
const calcular = () => {
    if(operacaoPendente()){
        const numeroAtual = parseFloat(display.textContent);
           if(operador == "+"){
               atualizarDisplay(numeroAnterior + numeroAtual)
           }
    }
   }

//parei em 22:17 do video - https://www.youtube.com/watch?v=oRZQ5EZOrQk
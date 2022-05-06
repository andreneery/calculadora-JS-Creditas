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
        display.textContent = texto.toLocaleString('pt-BR');
        //toLocaleString serve para que o display seja atualizado com a localização do usuario
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
    operador = evento.target.textContent;;
    //guarda o operador que foi clicado
    numeroAnterior = parseFloat(display.textContent.replace(',', '.'));
    //guarda o numero que está no display
    //replace serve para substituir o caractere "," por ".", pois o programa não reconhece a virgula
    }
}
operadores.forEach(operador => operador.addEventListener('click', selecionarOperador));

//criação da função para calcular
const calcular = () => {
    if(operacaoPendente()){
        const numeroAtual = parseFloat(display.textContent.replace(',', '.'));
        //replace serve para substituir o caractere "," por ".", pois o programa não reconhece a virgula
        novoNumero = true;
        //novo numero é true para que o display seja limpo e não seja concatenado com o numero que está no display 

           switch(operador){
               case '+':
                    atualizarDisplay(numeroAnterior + numeroAtual);
                    
                    break;
               case '-':
                    atualizarDisplay(numeroAnterior - numeroAtual);
                    break;
                case '*':
                    atualizarDisplay(numeroAnterior * numeroAtual);
                    break;
                case '/':
                    atualizarDisplay(numeroAnterior / numeroAtual);
                    break; 
           }
    }
   }

//criação do botao igual
const ativarIgual = () => {
    calcular();
    operador = undefined;
    //operador undefined limpa o operador que está armazenado e impede que some novamente quando clicar no igual "="

}

document.getElementById("igual").addEventListener('click', ativarIgual);


//criação do botao limpar apenas o ultimo numero (Botão "CE")
const limparDisplay = () => display.textContent = "";
document.getElementById("apagar").addEventListener('click', limparDisplay)

//criação do botao apagar calculo, apaga tudo (Botão "C")
const apagarCalculo = () => {
    limparDisplay();
    operador = undefined;
    novoNumero = true;
    numeroAnterior = undefined;
}
document.getElementById("apagar-tudo").addEventListener('click', apagarCalculo)

//criando backspace (<<) - remove o ultimo caractere
//para remover o ultimo caractere eu preciso separar os caracteres em array para depois apagar o ultimo caractere
const removerUltimoNumero = () => display.textContent = display.textContent.slice(0, -1); 
// o "-1" faz com que o slice pecorra de trás para frente.
document.getElementById("backspace").addEventListener('click', removerUltimoNumero)

//criando o botao para que inverte o numero negativo ou positivo
const inverterSinal = () => {
    novoNumero = true;
    //
    atualizarDisplay(display.textContent * -1)
    //faz com que o display é atualizado e com isso o numero é invertido    
    //o *-1 inverte o sinal do numero
    
}; 
document.getElementById("inverter").addEventListener('click', inverterSinal)

//criando a virgula (,)

    // criando a função que verifica a virgula e o valor para se inserir

const existeVirgula = () => display.textContent.indexOf(',') !== -1;
//o indexOf verifica se existe a virgula

const existeValor = () => display.textContent.length > 0;
//verifica se o display tem algum valor

const inserirVirgula = () => {
    if(!existeVirgula()){
        //verificar se já existe uma virgula e após isso verificar as duas hipoteses abaixo
        if(existeValor()){
            atualizarDisplay(',');
        }else{
            atualizarDisplay('0,')
        }
    }
}

document.getElementById("virgula").addEventListener('click', inserirVirgula);


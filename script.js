for(let i = 0; i < document.querySelectorAll(".tecla-0").length; i++){
    document.querySelectorAll(".tecla-0")[i].addEventListener("click", function(){
        document.querySelector(".tela").innerHTML += "0";
    });
}

for(let i = 0; i < document.querySelectorAll(".tecla-1").length; i++){
    document.querySelectorAll(".tecla-1")[i].addEventListener("click", function(){
        document.querySelector(".tela").innerHTML += "1";
    });
}

for(let i = 0; i < document.querySelectorAll(".tecla-2").length; i++){
    document.querySelectorAll(".tecla-2")[i].addEventListener("click", function(){
        document.querySelector(".tela").innerHTML += "2";
    });
}

for(let i = 0; i < document.querySelectorAll(".tecla-3").length; i++){
    document.querySelectorAll(".tecla-3")[i].addEventListener("click", function(){
        document.querySelector(".tela").innerHTML += "3";
    });
}

  for(let i = 0; i < document.querySelectorAll(".tecla-4").length; i++){
       document.querySelectorAll(".tecla-4")[i].addEventListener("click", function(){
         document.querySelector(".tela").innerHTML += "4";
       });
  }


     for(let i = 0; i < document.querySelectorAll(".tecla-5").length; i++){
         document.querySelectorAll(".tecla-5")[i].addEventListener("click", function(){
             document.querySelector(".tela").innerHTML += "5";
         });
     }
     
     for(let i = 0; i < document.querySelectorAll(".tecla-6").length; i++){
         document.querySelectorAll(".tecla-6")[i].addEventListener("click", function(){
             document.querySelector(".tela").innerHTML += "6";
         });
     }

     for(let i = 0; i < document.querySelectorAll(".tecla-7").length; i++){
         document.querySelectorAll(".tecla-7")[i].addEventListener("click", function(){
             document.querySelector(".tela").innerHTML += "7";
         });
     }

     for(let i = 0; i < document.querySelectorAll(".tecla-8").length; i++){
         document.querySelectorAll(".tecla-8")[i].addEventListener("click", function(){
             document.querySelector(".tela").innerHTML += "8";
         });
     }

     for(let i = 0; i < document.querySelectorAll(".tecla-9").length; i++){
         document.querySelectorAll(".tecla-9")[i].addEventListener("click", function(){
             document.querySelector(".tela").innerHTML += "9";
         });
     }
     
     //comando para apagar tudo "CE" //
     let teclaApagarTudo = document.querySelector(".apagar-tudo");
     teclaApagarTudo.addEventListener("click", event =>{
         document.querySelector(".tela").innerHTML = "";
         document.getElementsByName(teclaApagarTudo).reset();
    });

    //operadores matematicos
    let teclaSoma = document.querySelector(".somar");
    teclaSoma.addEventListener("click", event =>{
        document.querySelector(".tela").innerHTML += "+";
    });

    let teclaSubtrair = document.querySelector(".subtrair");
    teclaSubtrair.addEventListener("click", event =>{
        document.querySelector(".tela").innerHTML += "-";
    });

    let teclaMultiplicar = document.querySelector(".multiplicar");
    teclaMultiplicar.addEventListener("click", event =>{
        document.querySelector(".tela").innerHTML += "*";
    });

    let teclaDividir = document.querySelector(".dividir");
    teclaDividir.addEventListener("click", event =>{
        document.querySelector(".tela").innerHTML += "/";
    });
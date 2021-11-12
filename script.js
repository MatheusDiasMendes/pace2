$('body').hide(300);
$('body').show(500);
/*
let btn = document.getElementById('ceta2');
btn.hide();
*/


/*
window.alert('Olá mundo!  ');
window.confirm('Você está gostando da aula');
window.prompt("Qual é o seu nome?");
*/

const verificar = document.getElementById('verificar');

    function pace(){
      console.log("aaaaaaaaaa ");
        let nome = document.getElementById("nome").value;
        let distancia = document.getElementById("distancia").value;
        let peso = document.getElementById("peso").value;
        let time = document.getElementById("time").value;
        let hora_t = time.split(':');
        let horas = parseInt( hora_t[0]);
        let minutos = parseInt( hora_t[1]);
        let segundos = parseInt( hora_t[2]);
     
       const tempo_minutos = horas*60 + minutos + segundos/60;
       const tempo_horas = horas + minutos/60 + segundos/3600; 
       const velocidade = (distancia/(tempo_horas));
     
     
        let pace = (60/velocidade).toFixed(2);
        let calorias;
     
     
        calorias = (velocidade * peso * 0.0175 *(tempo_minutos) ).toFixed(1);
     
       if (nome !="" && distancia !="" && peso !="" && horas !="" && minutos !="" && segundos !=""){
     
         var texto = "Senhor "+ nome +", ao calcular seu PACE, chegamos a conclusão de que ele tem o valor de " + pace + "! E após percorrer "+ distancia +"Km em "+ horas +"h "+ minutos +"min "+ segundos +"s o número de calorias perdida foi de " + calorias +"Kcal" ;
       }else{
         var texto = "Por gentileza preencha todos os campos para ser feito o calculo!"
       } 
     
        document.getElementById("texto").innerHTML = texto;
        console.log(texto)     
     }

//resultado.textContent = `Olá ${}! Você percorreu ${} km em 1h, 12 min e 45s. Isso quer dizer que a sua velocidade média 
//foi de ${} km/h, o que o corresponde a um pace de ${}min/km. Com ${}kg, você gastou cerca de ${}cal`;

//resultado.textContent = 'Para calcular o seu IMC , preencha todos os campos.';

//calcular.addEventListener('click', imc);

//function limpar() {
//    nome.clear();
//    altura.clear();
//    peso.clear();
//  }


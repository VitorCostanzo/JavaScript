// Cronômetro {

"use strict";

let hour = 0;
let minute = 0;
let second = 0;
let millisecond = 0;

let cron;

cron = setInterval(() => { timer(); }, 10);

function pause(){
  clearInterval(cron);
}

function timer() {
  if ((millisecond += 10) == 1000) {
    millisecond = 0;
    second++;
  }
  if (second == 60) {
    second = 0;
    minute++;
  }
  if (minute == 60) {
    minute = 0;
    hour++;
  }
  document.getElementById('hour').innerText = returnData(hour);
  document.getElementById('minute').innerText = returnData(minute);
  document.getElementById('second').innerText = returnData(second);
  document.getElementById('millisecond').innerText = returnData(millisecond);
}

function returnData(input) {
  return input > 10 ? input : `0${input}`
}
// }

var buttons = document.querySelectorAll(".button"); //array de botoes

var clickcount = 0; // #n de botoes pressionados
var indexcheck1 = null; // recebe botao clickado
var indexcheck2 = null; // recebe botao clickado
var pares = 0; // pares acertados

var names = ['A', 'A', 'B', 'B', 'C', 'C', 'D', 'D', 'E', 'E', 'F', 'F', 'G', 'G', 'H', 'H'];

for (var i = 0; i < buttons.length; i++) { // distribui os nomes aleatoriamente
  var rdm = Math.floor(Math.random() * names.length); // randomiza inteiros
  buttons[i].name = names[rdm]; // atribui nome aleatorio do array names
  names.splice(rdm, 1); // retira o nome ja utilizado de names
}

function buttonClick(index){
    if (clickcount == 0) { //nenhum clickado
      buttonColor(index);
      clickcount = 1;
      indexcheck1 = index;
    } else if (clickcount == 1){ // 1 clickado
      if (buttons[indexcheck1].name == buttons[index].name){
        if (index == indexcheck1){ // volta atras
          buttonColor(index);
          clickcount = 0;
          indexcheck1 = null;
          indexcheck2 = null;
        } else { // desabilita par, verifica se acabou o jogo
          buttonColor(index);
          clickcount = 0;
          indexcheck1 = null;
          indexcheck2 = null;
          pares++;
          if (pares == 8){ // fim
            pause();
            window.alert(`Fim de jogo! Seu tempo: ${returnData(hour)}:${returnData(minute)}:${returnData(second)}:${returnData(millisecond)}` );
            document.location.reload(true);
          }
          for (var i = 0; i < buttons.length; i++) { // desabilita par
            if (buttons[i].name == buttons[index].name){
              buttons[i].setAttribute('disabled', 'disabled');
            }
          }
        }
      } else { // par errado
        buttonColor(index);
        clickcount = 2;
        indexcheck2 = index;
      }
    } else { //quando par errado, volta jogada
      buttonColor(indexcheck1);
      buttonColor(indexcheck2);
      clickcount = 0;
      indexcheck1 = null;
      indexcheck2 = null;
    }
}

function buttonColor(index){ // troca cor por nome
  if (buttons[index].name == 'A'){
    if (buttons[index].style.background != 'red'){
      buttons[index].style.background = 'red';
    } else {
      buttons[index].style.backgroundImage = 'radial-gradient(circle at center, white 0, black)';
    }
  } else if (buttons[index].name == 'B'){
    if (buttons[index].style.background != 'magenta'){
      buttons[index].style.background = 'magenta';
    } else {
      buttons[index].style.backgroundImage = 'radial-gradient(circle at center, white 0, black)';
    }
  } else if (buttons[index].name == 'C'){
    if (buttons[index].style.background != 'cyan'){
      buttons[index].style.background = 'cyan';
    } else {
      buttons[index].style.backgroundImage = 'radial-gradient(circle at center, white 0, black)';
    }
  } else if (buttons[index].name == 'D'){
    if (buttons[index].style.background != 'green'){
      buttons[index].style.background = 'green';
    } else {
      buttons[index].style.backgroundImage = 'radial-gradient(circle at center, white 0, black)';
    }
  } else if (buttons[index].name == 'E'){
    if (buttons[index].style.background != 'brown'){
      buttons[index].style.background = 'brown';
    } else {
      buttons[index].style.backgroundImage = 'radial-gradient(circle at center, white 0, black)';
    }
  } else if (buttons[index].name == 'F'){
    if (buttons[index].style.background != 'yellow'){
      buttons[index].style.background = 'yellow';
    } else {
      buttons[index].style.backgroundImage = 'radial-gradient(circle at center, white 0, black)';
    }
  } else if (buttons[index].name == 'G'){
    if (buttons[index].style.background != 'pink'){
      buttons[index].style.background = 'pink';
    } else {
      buttons[index].style.backgroundImage = 'radial-gradient(circle at center, white 0, black)';
    }
  } else {
    if (buttons[index].style.background != 'orange'){
      buttons[index].style.background = 'orange';
    } else {
      buttons[index].style.backgroundImage = 'radial-gradient(circle at center, white 0, black)';
    }
  }
}

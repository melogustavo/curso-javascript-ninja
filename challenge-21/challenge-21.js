(function (win, doc) {
  'use strict';
  /*
  O desafio de hoje será um pequeno projeto: um cronômetro!
  As regras para criação do cronômetro são as seguintes:
  1. Crie um arquivo index.html e adicione esse script a ele;
  2. Crie um campo `input` do tipo `text`, e inicie-o com um valor 0 (zero).
  Ele será o nosso cronômetro;
  3. Crie 3 botões para as ações do cronômetro: Start, Stop e Reset;
  4. Ao clicar em Start, o valor do campo deve ser incrementado de 1 em 1, a
  cada segundo;
  5. Ao clicar em Stop, o cronômetro deve parar de contar;
  6. Ao clicar em Reset, o cronômetro deve zerar e parar de contar.
  
  Utilize o atributo data-js para nomear o campo e os botões. Você pode
  usar o nome que achar melhor, desde que ele seja semântico, ou seja, o nome
  dado ao elemento HTML deve definir o que o elemento é ou o que ele faz.
  */

  //USANDO O TIMEOUT
  var temporizador;
  var $counter = doc.querySelector('[data-js="counter"]')
  var startButton = doc.querySelector('[data-js="start"]');
  var stopButton = doc.querySelector('[data-js="stop"]');
  var resetButton = doc.querySelector('[data-js="reset"]');

  function timer() {
    $counter.value++;
    //dessa forma ele se torna uma função recursiva eterna
    temporizador = setTimeout(timer, 1000);
  }

  startButton.addEventListener('click', function () {
    timer();
  }, false);

  stopButton.addEventListener('click', pararCronometro, false);

  function pararCronometro() {
    clearTimeout(temporizador)
  };


  resetButton.addEventListener('click', function () {
    $counter.value = 0;
    pararCronometro();
  }, false);



  //USANDO INTERVAL
  var temporizadorInterval;
  var $counterInterval = doc.querySelector('[data-js="counterInterval"]')
  var startButtonInterval = doc.querySelector('[data-js="startInterval"]');
  var stopButtonInterval = doc.querySelector('[data-js="stopInterval"]');
  var resetButtonInterval = doc.querySelector('[data-js="resetInterval"]');

  function timerInterval() {
    $counterInterval.value++;
  }

  startButtonInterval.addEventListener('click', function () {
    temporizadorInterval = setInterval(timerInterval, 1000);
  }, false);

  stopButtonInterval.addEventListener('click', function () {
    clearInterval(temporizadorInterval);
  }, false);

  resetButtonInterval.addEventListener('click', function () {
    $counterInterval.value = 0;
    clearTimeout(temporizadorInterval);
  }, false);


})(window, document);
const button1 = document.querySelector("#but1");
const d1 = document.querySelector("#dice1");
const d2 = document.querySelector("#dice2");
const tol = document.querySelector("#total");

button1.addEventListener("click", rollDice);

function rollDice() {
  var x = Math.floor(Math.random()*6) + 1;
  var y = Math.floor(Math.random()*6) + 1;
  var all = x + y;
  d1.textContent = x;
  d2.textContent = y;
  tol.textContent = all;
}
'use strict';

// Selecting elements
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');

console.log(diceEl)
//initial scores
score0El.textContent = 0;
score1El.textContent = 0;

//create hidden class on dice
diceEl.classList.add('hidden');
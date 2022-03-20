'use strict';

// Selecting elements
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');

const newBtn = document.querySelector('.btn--new');
const rollBtn = document.querySelector('.btn--roll');
const holdBtn = document.querySelector('.btn--hold');

let currentScore = 0;

//initial scores
score0El.textContent = 0;
score1El.textContent = 0;

//create hidden class on dice
diceEl.classList.add('hidden');

// ROlling dice functionality
rollBtn.addEventListener('click', function(){
    //1. generate a random #/dice roll
    const diceRoll = Math.floor(Math.random() * 6) + 1;
    console.log(diceRoll)
    //2. display dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${diceRoll}.png`;
    //3. check if rolled 1 -- yes = next player
    if(diceRoll !== 1){
        console.log("yay");
        currentScore += diceRoll;
    } else {
        console.log("fudge");
    }
})
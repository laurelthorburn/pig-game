'use strict';

// Selecting elements
const player0Element = document.querySelector('.player--0');
const player1Element = document.querySelector('.player--1');
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');

const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');

const newBtn = document.querySelector('.btn--new');
const rollBtn = document.querySelector('.btn--roll');
const holdBtn = document.querySelector('.btn--hold');

const scores = [0, 0]
let currentScore = 0;
//checking who is the active player
let activePlayer = 0;

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
        currentScore += diceRoll;
        document.getElementById(`current--${activePlayer}`).textContent = currentScore;
    } else {
        document.getElementById(`current--${activePlayer}`).textContent = 0;
        currentScore = 0;
        activePlayer = activePlayer === 0 ? 1 : 0;   
        player0Element.classList.toggle('player--active');
        player1Element.classList.toggle('player--active');
    }
})
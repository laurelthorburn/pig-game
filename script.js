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

const scores = [0, 0];
let currentScore;
let activePlayer;
let playing;

const init = function () {

  currentScore = 0;
  //checking who is the active player
  activePlayer = 0;
  playing = true;

  //initial scores
  score0El.textContent = 0;
  score1El.textContent = 0;

  current0El.textContent = 0;
  current1El.textContent = 0;
  score0El.textContent = 0;
  score1El.textContent = 0;

  player0Element.classList.remove('player--winner');
  player1Element.classList.remove('player--winner');
  player1Element.classList.remove('player--active');
  player0Element.classList.add('player--active');

  //create hidden class on dice
  diceEl.classList.add('hidden');
};

init();

//switch player
const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0Element.classList.toggle('player--active');
  player1Element.classList.toggle('player--active');
};

// ROlling dice functionality
rollBtn.addEventListener('click', function () {
  if (playing) {
    //1. generate a random #/dice roll
    const diceRoll = Math.floor(Math.random() * 6) + 1;
    console.log(diceRoll);
    //2. display dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${diceRoll}.png`;
    //3. check if rolled 1 -- yes = next player
    if (diceRoll !== 1) {
      currentScore += diceRoll;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  }
});

//hold functionality

holdBtn.addEventListener('click', function () {
  if (playing) {
    //player clicks hold
    //assess who the active player is (0 or 1)
    // add the total score to the active player
    //toggle classname
    //change active player
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    if (scores[activePlayer] >= 10) {
      playing = false;
      diceEl.classList.add('hidden');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      switchPlayer();
    }
  }
});

newBtn.addEventListener('click', init);

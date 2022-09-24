'use strict';
let score = document.querySelector('.score').textContent;
let secretNumber = Math.trunc(Math.random() * 20);
//console.log(secretNumber);
//console.log(highscore);
let highscore = document.querySelector('.highscore').textContent;
//console.log(highscore);

//game key
document.querySelector('.check').addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    document.querySelector('.message').textContent = '⛔ No number!';
  }
  if (guess == secretNumber) {
    document.querySelector('.message').textContent = 'Correct guess 🎉';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (highscore < score) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess > secretNumber && score > 1) {
    document.querySelector('.message').textContent = '📈 Too high';
    score--;
    document.querySelector('.score').textContent = score;
  } else if (guess < secretNumber && score > 1) {
    document.querySelector('.message').textContent = '📉 Too low';
    score--;
    document.querySelector('.score').textContent = score;
  } else {
    document.querySelector('.message').textContent = '💥 You lost the game';
    document.querySelector('.score').textContent = 0;
    document.querySelector('body').style.backgroundColor = 'rgb(250, 31, 31)';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;
  }
});

//reset key

document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = 20;
  score = 20;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.guess').value = '';
  secretNumber = Math.trunc(Math.random() * 20);
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});

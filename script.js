var randomNumber = Math.floor(Math.random() * 100) + 1;
var tries = 0;
var maxTries = 10;

function checkGuess() {
  var guessInput = document.getElementById('guessInput');
  var guess = parseInt(guessInput.value);

  if (guess === randomNumber) {
    displayFeedback('Correct! You guessed the number!');
    guessInput.disabled = true;
    return;
  } else if (guess < randomNumber) {
    displayFeedback('Too low. Try again.');
  } else {
    displayFeedback('Too high. Try again.');
  }

  tries++;
  if (tries >= maxTries) {
    displayFeedback('Game over. You reached the maximum number of tries.');
    guessInput.disabled = true;
  }

  guessInput.value = '';
}

function displayFeedback(text) {
  var feedbackList = document.getElementById('feedbackList');
  var listItem = document.createElement('li');
  listItem.textContent = text;
  feedbackList.appendChild(listItem);
}
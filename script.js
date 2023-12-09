let randomNumber = Math.floor(Math.random() * 100) + 1;
let tries = 0;
let maxTries = 10;

document.getElementById('guessButton').addEventListener('onclick', function () {
    let guess = document.getElementById('guessInput').value;
    let number = Math.floor(Math.random() * 100) + 1;
    let feedback = document.getElementById('feedback');
    let guesses = document.getElementById('guesses');

    if (guess < number) {
        feedback.textContent = 'Your guess is too low!';
    } else if (guess > number) {
        feedback.textContent = 'Your guess is too high!';
    } else {
        feedback.textContent = 'Congratulations! You guessed the correct number!';
    }
  tries++;
  if (tries >= maxTries) {
    displayFeedback('Game over. You reached the maximum number of tries.');
    guessInput.disabled = true;
  }

  
}

function displayFeedback(text) {
  var feedbackList = document.getElementById('feedbackList');
  var listItem = document.createElement('li');
  listItem.textContent = text;
  feedbackList.appendChild(listItem);
}
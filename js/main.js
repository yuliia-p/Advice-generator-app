const adviceID = document.querySelector('.advice-id');
const adviceText = document.querySelector('.advice-text');
const diceButton = document.querySelector('.circle-dice');

diceButton.addEventListener('click', getAdvice);

function getAdvice() {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://api.adviceslip.com/advice');
  xhr.responseType = 'json';
  xhr.addEventListener('load', function () {
    adviceID.textContent = `#${xhr.response.slip.id}`;
    adviceText.textContent = `"${xhr.response.slip.advice}"`;
  });
  xhr.send();
}

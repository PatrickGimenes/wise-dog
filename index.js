const img = document.getElementById("dog");
const advice = document.getElementById("advice");

//img.src = objectURL;
function getQuoteAndImg() {
  fetch("https://api.adviceslip.com/advice")
    .then((response) => response.json())
    .then(function (data) {
      advice.innerHTML = data.slip.advice;
    });

  fetch("https://dog.ceo/api/breeds/image/random")
    .then((response) => response.json())
    .then(function (data) {
      img.src = data.message;
    });
}

var scoreToGet = 0;
var currentScore = 0;
var wins = 0;
var loses = 0;

var crystals = [];

$(document).ready(function () {
  $("#start-game").on("click", function () {
    initializeGame();
  });

  $(".crystal").on("click", function () {
    var crystalValue = $(this).attr("crystal-value");
    currentScore += parseInt(crystalValue);
    $("#current-score").text(currentScore);

    if (currentScore === scoreToGet) {
      alert("you win");
      wins++;
      initializeGame();

    } else if (currentScore > scoreToGet) {
      alert("you lose");
      loses++;
      initializeGame();
    }
  });

});

function getRandomNumberInRange(min, max) {
  var random_number = Math.random() * (max - min) + min;
  return Math.floor(random_number);
}

function initializeGame() {
  initializeValues();
  initializeTexts();
  initializeCrystals();
}

function initializeValues() {
  scoreToGet = getRandomNumberInRange(19, 120);
  currentScore = 0;
}

function initializeTexts() {
  $("#score-to-get").text(scoreToGet);
  $("#current-score").text(currentScore);
  $("#wins").text(wins);
  $("#loses").text(loses);
}

function initializeCrystals() {
  for (var i = 0; i < 4; i++) {
    crystals[i] = getRandomNumberInRange(1, 12);
    $("#crystal-" + (i + 1)).attr("crystal-value", crystals[i]);
  }
}
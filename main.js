var studyBtn = document.querySelector('#study-button');
var studyImage = document.querySelector('#study-image');
var meditateBtn = document.querySelector('#meditate-button');
var meditateImage = document.querySelector('#meditate-image');
var exerciseBtn = document.querySelector('#exercise-button');
var exerciseImage = document.querySelector('#exercise-image');
var minInput = document.querySelector('.min-input');
var secInput = document.querySelector('.sec-input');
var nameCategory = document.querySelector('.enter-in-name-category');
var errorMessage = document.querySelector('#error-message');
var startActivityBtn = document.querySelector('.start-activity-button');
var buttonSelected = '';
var leftSection = document.querySelector('.left-section');
var timerSection = document.querySelector('#timer-page');
var timerStatus = document.querySelector('#timer-status');
var startTimerButton = document.querySelector('#timer-text');
var countdownTimer = document.querySelector('#time-remaining');
var timeLeft = 0;
var display = countdownTimer;
var activityInputTimerPage = document.querySelector('.input-activity-timer-page');
var buttonContainer = document.querySelector('.button-container')



buttonContainer.addEventListener('click', selectActivity)
minInput.addEventListener('input', allowMinOnly);
secInput.addEventListener('input', allowSecOnly);
startActivityBtn.addEventListener('click', fieldsCompleted)
startActivityBtn.addEventListener('mouseup', updateTimerColor);
timerStatus.addEventListener('click', startTimer);

function selectActivity(target) {
if(event.target.id === 'study-button' || event.target.id === 'study-image') {
    studyImage.src = "assets/study-active.svg";
    studyBtn.classList.add('study-selected');
    meditateImage.src = "assets/meditate.svg";
    meditateBtn.classList.remove('meditate-selected');
    exerciseImage.src = "assets/exercise.svg";
    exerciseBtn.classList.remove('exercise-selected');
    buttonSelected = 'study';
} else if (event.target.id === 'meditate-button' || event.target.id === 'meditate-image') {
    meditateImage.src = "assets/meditate-active.svg";
    meditateBtn.classList.add("meditate-selected");
    studyImage.src = "assets/study.svg";
    studyBtn.classList.remove('study-selected');
    exerciseImage.src = "assets/exercise.svg";
    exerciseBtn.classList.remove('exercise-selected');
    buttonSelected = 'meditate';
} else if (event.target.id === 'exercise-button' || event.target.id === 'exercise-image'){
    exerciseImage.src = "assets/exercise-active.svg";
    exerciseBtn.classList.add('exercise-selected');
    meditateImage.src = "assets/meditate.svg";
    meditateBtn.classList.remove ('meditate-selected');
    studyImage.src = "assets/study.svg";
    studyBtn.classList.remove ('study-selected');
    buttonSelected = 'exercise';
  }
}

function fieldsCompleted() {
  if (buttonSelected === '') {
    document.querySelector('#category-button-error').id="error-message";
  } else if (nameCategory.value === '' ) {
    document.querySelector('#no-error-message').id = "error-message";
  } else if (minInput.value === '' ) {
    document.querySelector('#min-input-error').id = "error-message";
  } else if (secInput.value === '') {
    document.querySelector('#sec-input-error').id = "error-message";
  } else {
    leftSection.classList.add('main-page-hide');
    timerSection.classList.remove('main-page-hide');
    activityInputTimerPage.innerHTML = nameCategory.value;
    setTimer();
  }
}


function updateTimerColor() {
  if (buttonSelected === 'exercise') {
    timerStatus.style.border = "2px solid #FD8078";
  } else if (buttonSelected === 'study') {
    timerStatus.style.border = "2px solid #B3FD78";
  } else {
    timerStatus.style.border = "2px solid #C278FD";
  }
}

function allowMinOnly() {
  if (minInput.value === "") {
    minInput.value = "";
  };
};

function allowSecOnly() {
  if (secInput.value === "") {
    secInput.value = "";
  };
};

function setTimer() {
  var min = parseInt(minInput.value)
  var sec = parseInt(secInput.value)
  var timer = min * 60 + sec;
  var timer = timer, minutes, seconds;
    minutes = parseInt(timer / 60, 10);
    seconds = parseInt(timer % 60, 10);
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    countdownTimer.innerText = minutes + ":" + seconds;
    return timeLeft = timer;
 };

function startTimer() {
  var countdown = setInterval(function() {
    var timer = parseInt(timeLeft), minutes, seconds;
    if (--timer >= 0) {
      minutes = parseInt(timer / 60, 10);
      seconds = parseInt(timer % 60, 10);
      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;
      countdownTimer.innerText = minutes + ":" + seconds;
      timeLeft = parseInt(timeLeft) - 1;
    } else {
      window.clearInterval(countdown)
      startTimerButton.innerHTML = 'Completed!';
      countdownTimer.innerHTML = "You F'n crushed it!";
      timerStatus.insertAdjacentHTML('afterend', '<button id="log-activity-button">Log Activity</button>');
     }
  }, 1000);
}

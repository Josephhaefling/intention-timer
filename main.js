var studyBtn = document.querySelector('#study-button');
var studyImage = document.querySelector('#study-image');
var meditateBtn = document.querySelector('#meditate-button');
var meditateImage = document.querySelector('#meditate-image');
var exerciseBtn = document.querySelector('#exercise-button');
var exerciseImage = document.querySelector('#exercise-image');
var minInput = document.querySelector('.min-input');
var secInput = document.querySelector('.sec-input');
var enterInNameCategory = document.querySelector('.enter-in-name-category');
var errorMessage = document.querySelector('#error-message');
var startActivityBtn = document.querySelector('.start-activity-button');
var buttonSelected = '';
var hideLeftSection = document.querySelector('.left-section');
var timerSection = document.querySelector('#timer-page');
var timerStatus = document.querySelector('#timer-status');
var timeLeft;


studyBtn.addEventListener('click', studyClicked);
meditateBtn.addEventListener('click', meditateClicked);
exerciseBtn.addEventListener('click', exerciseClicked);
minInput.addEventListener('input', numOnly);
secInput.addEventListener('input', secOnly);
startActivityBtn.addEventListener('click', fieldsCompleted)
startActivityBtn.addEventListener('mouseup', activityTimerColor);


function studyClicked() {
  studyImage.src = "assets/study-active.svg";
  studyBtn.classList.add('study-selected');
  meditateImage.src = "assets/meditate.svg";
  meditateBtn.classList.remove('meditate-selected');
  exerciseImage.src = "assets/exercise.svg";
  exerciseBtn.classList.remove('exercise-selected');
  buttonSelected = 'study';
}

function meditateClicked() {
  meditateImage.src = "assets/meditate-active.svg";
  meditateBtn.classList.add("meditate-selected");
  studyImage.src = "assets/study.svg";
  studyBtn.classList.remove('study-selected');
  exerciseImage.src = "assets/exercise.svg";
  exerciseBtn.classList.remove('exercise-selected');
  buttonSelected = 'meditate';
}

function exerciseClicked() {
  exerciseImage.src = "assets/exercise-active.svg";
  exerciseBtn.classList.add('exercise-selected');
  meditateImage.src = "assets/meditate.svg";
  meditateBtn.classList.remove ('meditate-selected');
  studyImage.src = "assets/study.svg";
  studyBtn.classList.remove ('study-selected');
  buttonSelected = 'exercise';
}

function fieldsCompleted() {
  if (buttonSelected === '' || enterInNameCategory.value === '' || minInput.value === '' ||  secInput.value === ''){
    document.querySelector('#no-error-message').id = "error-message";
  } else {
    hideLeftSection.classList.add('main-page-hide');
    timerSection.classList.remove('main-page-hide');
    setTimer();
  }
}


function activityTimerColor() {
  if (buttonSelected === 'exercise') {
    timerStatus.style.border = "2px solid #FD8078";
  } else if (buttonSelected === 'study') {
    timerStatus.style.border = "2px solid #B3FD78";
  } else {
    timerStatus.style.border = "2px solid #C278FD";
  }
}

function numOnly() {
  if (minInput.value === "") {
    minInput.value = "";
  };
};

function secOnly() {
  if (secInput.value === "") {
    secInput.value = "";
  };
};


var startTimerButton = document.querySelector('#timer-text');
var countdownTimer = document.querySelector('#time-remaining');


startTimerButton.addEventListener('click', startTimer);

// function setTimer(duration, display) {
//   var timer = duration, minutes, seconds;
//   minutes = parseInt(timer / 60, 10);
//       seconds = parseInt(timer % 60, 10);
//       minutes = minutes < 10 ? "0" + minutes : minutes;
//       seconds = seconds < 10 ? "0" + seconds : seconds;
//       countdownTimer.textContent = minutes + ":" + seconds;
//     function startTimer(duration, display) {
//           console.log(timer);
//           console.log(duration);
//           setInterval(function() {
//             if (--timer < 0) {
//               timer = duration;
//             }
//           }, 1000);
//       }
//     }

// function startTimer() {
//     var duration = duration;
//     var timer = timer;
//     console.log(timer);
//     console.log(duration);
//     setInterval(function() {
//       if (--timer <0) {
//         timer = duration;
//       }
//     }, 1000);
// }

function setTimer() {
  var min = parseInt(minInput.value)
  var sec = parseInt(secInput.value)
  var timer = min * 60 + sec;
     display = countdownTimer;
     // var timer = timer, minutes, seconds;
     minutes = parseInt(timer / 60, 10);
         seconds = parseInt(timer % 60, 10);
         minutes = minutes < 10 ? "0" + minutes : minutes;
         seconds = seconds < 10 ? "0" + seconds : seconds;
         countdownTimer.textContent = minutes + ":" + seconds;
         timeLeft = ;
 };

function startTimer(timeLeft) {
  console.log(timeLeft);
   var timer = parseInt(timeLeft), minutes, seconds;
   minutes = parseInt(timer / 60, 10);
       seconds = parseInt(timer % 60, 10);
       minutes = minutes < 10 ? "0" + minutes : minutes;
       seconds = seconds < 10 ? "0" + seconds : seconds;
       countdownTimer.textContent = minutes + ":" + seconds;
           console.log(display);
           console.log(timeLeft);
           setInterval(function() {
             if (--timer < 0) {
               countdownTimer.textContent = timer;
             }
           }, 1000);
       }

var studyBtn = document.querySelector('#study-button');
var studyIcon = document.querySelector('#study-icon');
var meditateBtn = document.querySelector('#meditate-button');
var meditateIcon = document.querySelector('#meditate-icon');
var exerciseBtn = document.querySelector('#exercise-button');
var exerciseIcon = document.querySelector('#exercise-icon');

studyBtn.addEventListener('click', studyClicked);
meditateBtn.addEventListener('click', meditateClicked);
exerciseBtn.addEventListener('click', exerciseClicked);

function studyClicked() {
  studyIcon.src = "assets/study-active.svg";
  studyBtn.style.border = "1px #b2fd78 solid";
  meditateIcon.src = "assets/meditate.svg";
  exerciseIcon.src = "assets/exercise.svg";
}

function meditateClicked() {
  meditateIcon.src = "assets/study-active.svg";
  meditateBtn.style.border = "1px #b2fd78 solid";
  studyIcon.src = "assets/study.svg";
  exerciseIcon.src = "assets/exercise.svg";
}

function exerciseClicked() {
  exerciseIcon.src = "assets/study-active.svg";
  exerciseBtn.style.border = "1px #b2fd78 solid";
  meditateIcon.src = "assets/meditate.svg";
  studyIcon.src = "assets/study.svg";

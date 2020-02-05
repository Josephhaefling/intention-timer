var studyBtn = document.querySelector('#study-button');
var studyIcon = document.querySelector('#study-icon');
var meditateBtn = document.querySelector('#meditate-button');
var exerciseBtn = document.querySelector('#exercise-button');

studyBtn.addEventListener('click', btnSelected);
meditateBtn.addEventListener('click', btnSelected);
exerciseBtn.addEventListener('click', btnSelected);

function btnSelected() {
  studyIcon.src = "assets/study-active.svg";
}

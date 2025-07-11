let startTime = 0;
let elapsedTime = 0;
let timerInterval;

const display = document.getElementById('display');
const startBtn = document.getElementById('start');
const pauseBtn = document.getElementById('pause');
const resetBtn = document.getElementById('reset');
const lapBtn = document.getElementById('lap');
const lapsList = document.getElementById('laps');

function timeToString(time) {
  let diffInHrs = time / 3600000;
  let hh = Math.floor(diffInHrs);

  let diffInMin = (diffInHrs - hh) * 60;
  let mm = Math.floor(diffInMin);

  let diffInSec = (diffInMin - mm) * 60;
  let ss = Math.floor(diffInSec);

  let diffInMs = (diffInSec - ss) * 1000;
  let ms = Math.floor(diffInMs);

  return `${String(hh).padStart(2, '0')}:${String(mm).padStart(2, '0')}:${String(ss).padStart(2, '0')}.${String(ms).padStart(3, '0')}`;
}

function start() {
  startTime = Date.now() - elapsedTime;
  timerInterval = setInterval(() => {
    elapsedTime = Date.now() - startTime;
    display.textContent = timeToString(elapsedTime);
  }, 10);
}

function pause() {
  clearInterval(timerInterval);
}

function reset() {
  clearInterval(timerInterval);
  display.textContent = "00:00:00.000";
  elapsedTime = 0;
  lapsList.innerHTML = "";
}

function lap() {
  const li = document.createElement('li');
  li.textContent = timeToString(elapsedTime);
  lapsList.appendChild(li);
}

// Event listeners
startBtn.addEventListener('click', () => {
  start();
});

pauseBtn.addEventListener('click', () => {
  pause();
});

resetBtn.addEventListener('click', () => {
  reset();
});

lapBtn.addEventListener('click', () => {
  lap();
});

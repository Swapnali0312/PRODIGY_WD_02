let timer;
let running = false;
let hours = 0;
let minutes = 0;
let seconds = 0;

const stopwatchDisplay = document.getElementById('stopwatch');
const startStopBtn = document.getElementById('startStopBtn');
const resetBtn = document.getElementById('resetBtn');

function updateStopwatch() {
    seconds++;
    if (seconds === 60) {
        seconds = 0;
        minutes++;
        if (minutes === 60) {
            minutes = 0;
            hours++;
        }
    }

    stopwatchDisplay.textContent = 
        (hours < 10 ? "0" + hours : hours) + ":" + 
        (minutes < 10 ? "0" + minutes : minutes) + ":" + 
        (seconds < 10 ? "0" + seconds : seconds);
}

function startStopwatch() {
    if (!running) {
        timer = setInterval(updateStopwatch, 1000);
        running = true;
        startStopBtn.textContent = "Stop";
    } else {
        clearInterval(timer);
        running = false;
        startStopBtn.textContent = "Start";
    }
}

function resetStopwatch() {
    clearInterval(timer);
    running = false;
    hours = 0;
    minutes = 0;
    seconds = 0;
    stopwatchDisplay.textContent = "00:00:00";
    startStopBtn.textContent = "Start";
}

startStopBtn.addEventListener('click', startStopwatch);
resetBtn.addEventListener('click', resetStopwatch);

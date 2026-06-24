let allBtn = document.querySelector('.button-container');
let startBtn = document.querySelector('.start-btn')
let pauseBtn = document.querySelector('.pause-btn')
let resetBtn = document.querySelector('.reset-btn')
let secondDialer = document.getElementById('second-dialer')


allBtn.addEventListener("click", function (e) {
    console.log("clicked")
})

let timer = 50;
let timerInterval = null;

secondDialer.textContent = String(timer).padStart(2, '0');

function startTimer() {

    if (timerInterval) return;

    timerInterval = setInterval(() => {
        secondDialer.textContent = String(timer).padStart(2, '0');

        if (timer <= 0) {
            clearInterval(timerInterval);
            timerInterval = null;
            return;
        }

        timer--;
    }, 1000);
}

function pauseTimer() {
    clearInterval(timerInterval);
    timerInterval = null;
}

function resetTimer() {
    clearInterval(timerInterval);
    timerInterval = null;

    timer = 50;
    secondDialer.textContent = String(timer).padStart(2, '0');
}

startBtn.addEventListener("click", startTimer);
pauseBtn.addEventListener("click", pauseTimer);
resetBtn.addEventListener("click", resetTimer);
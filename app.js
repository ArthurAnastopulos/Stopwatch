window.onload = () => {
    let seconds = 00;
    let miliseconds = 00;
    let Interval;

    let appendSeconds = document.getElementById("seconds");
    let appendMiliseconds = document.getElementById("miliseconds");
    let btnStart = document.getElementById("start");
    let btnPause = document.getElementById("pause");
    let btnReset = document.getElementById("reset");

    btnStart.onclick = () => {
        clearInterval(Interval);
        Interval = setInterval(startTimer, 10);
    }

    btnPause.onclick = () => {
        clearInterval(Interval);
    }

    btnReset.onclick = () => {
        clearInterval(Interval);
        seconds = 00;
        miliseconds = 00;
        appendMiliseconds.innerHTML = "00";
        appendSeconds.innerHTML = "00";

    }

    const startTimer = () => {
        miliseconds++;

        if (miliseconds < 9) {
            appendMiliseconds.innerHTML = "0" + miliseconds;
        }
        if (miliseconds > 9) {
            appendMiliseconds.innerHTML = miliseconds;
        }
        if (miliseconds > 99) {
            seconds++;
            appendSeconds.innerHTML = "0" + seconds;
            miliseconds = 0;
            appendMiliseconds.innerHTML = "0" + miliseconds;
        }
        if (seconds > 9) {
            appendSeconds.innerHTML = seconds;
        }
    }
}
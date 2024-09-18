export function startTimer(duration, display) {
    let timer = duration,
        minutes,
        seconds;
    let intervalId = setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.innerHTML = `<b>${minutes}:${seconds}</b>`;

        const userId = localStorage.getItem('userId');

        if (--timer < 0) {
            clearInterval(intervalId);
            timer = 0;
            display.textContent = "The timer has run out!";
            fetch(`${window.baseUrl}/user-analytics/journey-ended/${userId}`).then(response => window.location.replace('./start-experience.html'));
        }
    }, 1000);

    return intervalId;
}

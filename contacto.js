const getRemaintime = deadline => {
    let now = new Date(),
        remainTime = (new Date(deadline) - now + 1000) / 1000,
        remainSeconds = ('0' + Math.floor(remainTime % 60)).slice(-2),
        remainMinutes = ('0' + Math.floor(remainTime / 60 % 60)).slice(-2),
        remainHours = ('0' + Math.floor(remainTime / 360 % 24)).slice(-2),
        remainDays = Math.floor(remainTime / (3600 * 24));

    return {
        remainTime,
        remainSeconds,
        remainMinutes,
        remainHours,
        remainDays
    }
};


const countdown = (deadline, elem, finalMessage) => {
    const el = document.getElementById(elem);
    const timerUpdate = setInterval(() => {
        let tiempo = getRemaintime(deadline);
        el.innerHTML = `${tiempo.remainDays}d:${tiempo.remainHours}h:${tiempo.remainMinutes}m:${tiempo.remainSeconds}s:`;
        if (tiempo.remainTime <= 1) {
            clearInterval(timerUpdate);
            el.innerHTML = finalMessage;
        }

    }, 1000)
};

countdown('Jul 1 2023 14:47:10 GMT-0300', 'clock', 'GRACIAS POR VISITAR MI SITIO');










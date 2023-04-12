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
        el.innerHTML = `${tiempo.remainDays}
       Días ~ ${tiempo.remainHours}
        Horas ~ ${tiempo.remainMinutes}
        Minutos ~ ${tiempo.remainSeconds}
        Segundos `;
        if (tiempo.remainTime <= 1) {
            clearInterval(timerUpdate);
            el.innerHTML = finalMessage;
        }

    }, 1000)
};

countdown('May 25 2023 23:59:00 GMT-0300', 'clock', 'GRACIAS POR VISITAR MI SITIO Y...<br>¡¡¡FELÍZ ANIVERSARIO!!!');










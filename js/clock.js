const clock = document.querySelector('#currClock');

function showClock(){
    const currTime = new Date();
    const hour = currTime.getHours();
    const minute = currTime.getMinutes();
    const second = currTime.getSeconds();
    const hourText = hour.toString().padStart(2, '0');
    const minuteText = minute.toString().padStart(2, '0');
    const secondText = second.toString().padStart(2, '0');

    clock.innerHTML = `${hourText}:${minuteText}:${secondText}`;
}

showClock();
setInterval(showClock, 1000);

function clock() {
    const date = new Date();

    const hours = date.getHours();

    const hourDegree = (hours % 24) * 15; // 24 hours = 360 degrees, each hour is 15 degrees

    document.querySelector('.hour').style.transform = `translateX(-50%) translateY(-100%) rotate(${hourDegree}deg)`;
}

setInterval(clock, 1000);
clock(); // Initial call to set the time immediately

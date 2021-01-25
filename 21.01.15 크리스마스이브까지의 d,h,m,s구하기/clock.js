
   //clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours}:${minutes<10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
// You're gonna need this
const NINE_HOURS_MILLISECONDS = 32400000;
const clockTitle = document.querySelector(".js-title");

function getTime() {
  // Don't delete this.
    const xmasDay = new Date("2021-12-24:00:00:00+0900");
    const nowTiem = new Date();
    const dDay = xmasDay - nowTiem;
    const days = parseInt(dDay / (1000 * 60 * 60 * 24));
    const hours = parseInt((dDay / (1000 * 60 * 60)) % 24 );
    const minutes = parseInt((dDay / (1000 * 60)) % 60 );
    const seconds = parseInt((dDay / 1000) % 60);
    clockTitle.innerText = `${days<10 ? `0${days}` : days}d ${hours < 10 ? `0${hours}`: hours}h ${minutes < 10 ? `0${minutes}` : minutes}m ${seconds < 10 ? `0${seconds}` : seconds}s`
}

function init() {
    getTime();
    setInterval(getTime, 1000);
}
init();

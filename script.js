clock();
digitalTime();
function clock() {
    const date = new Date();

    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    hours *= 30;
    minutes *= 6;
    seconds *= 6;

    document.getElementById('clock__hour').style.transform = `rotate(${hours}deg)`;
    document.getElementById('clock__minute').style.transform = `rotate(${minutes}deg)`;
    document.getElementById('clock__second').style.transform = `rotate(${seconds}deg)`;


}

function digitalTime() {
    const date = new Date();

    let hours = date.getHours();
    let minutes = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
    let seconds = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();

    document.getElementById('digital__hour').innerText = `${hours}:`
    document.getElementById('digital__minutes').innerText = `${minutes}:`
    document.getElementById('digital__seconds').innerText = `${seconds}`


}

const digitalMain = document.getElementById('digital__main')
const clockMain = document.getElementById('clock__container')
const clockHour = document.getElementById('clock__hour')
const clockMins = document.getElementById('clock__minute')
const clockSeconds = document.getElementById('clock__second')
const clockDot = document.getElementById('clock__dot')
digitalMain.style = `cursor:pointer;`



const randomRGB = () => {
    const randomValueOne = Math.floor(Math.random() * 255);
    const randomValueTwo = Math.floor(Math.random() * 255);
    const randomValueThree = Math.floor(Math.random() * 255);


    return `rgb(${randomValueOne}, ${randomValueTwo}, ${randomValueThree})`;
}


setInterval(() => {
    clock(); digitalTime();



    document.body.style.background = `linear-gradient(45deg, ${randomRGB()},${randomRGB()})`

    digitalMain.style.color = `${randomRGB()}`;
    clockMain.style.background = `${randomRGB()}`;
    clockHour.style.background = `${randomRGB()}`;
    clockMins.style.background = `${randomRGB()}`;
    clockSeconds.style.background = `${randomRGB()}`;
    clockDot.style.background = `${randomRGB()}`;





}, 1000);
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
    let minutes = date.getMinutes() < 10 ? '0' + date.getMinutes(): date.getMinutes();
    let seconds = date.getSeconds() < 10 ? '0' + date.getSeconds(): date.getSeconds();

    document.getElementById('digital__hour').innerText = `${hours}:`
    document.getElementById('digital__minutes').innerText = `${minutes}:`
    document.getElementById('digital__seconds').innerText = `${seconds}`


}


setInterval(() => {clock(); digitalTime()}, 1000);
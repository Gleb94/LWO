const htmlElements = {};
htmlElements.startBtn = document.querySelector('.container .buttons button.start');
htmlElements.stopBtn = document.querySelector('.container .buttons button.stop');
htmlElements.resetBtn = document.querySelector('.container .buttons button.reset');
htmlElements.clock = document.querySelector('.container .links .clock');
htmlElements.watch = document.querySelector('.watch');
htmlElements.stopwatch = document.querySelector('.container .links .stopwatch');
htmlElements.timer = document.querySelector('.container .links .timer');
htmlElements.output = document.querySelector('.container .output');

const sartTime = new Date(Date.now()).getTime();
const myInterval = setInterval(update, 1000);
const output = document.getSelection('.output');
class Clock {
    constructor(timer) {
        this.timer = timer;
        setInterval(update, 1000);
    }
    render() {
        let data = new Date();
        let hours = data.getHaurs();
        if (hours < 10) hours = "0" + hours;
        clock.children[0].innerHTML = hours;
        let minutes = data.getMinutes();
        if (minutes < 10) minutes = "0" + minutes;
        clock.children[1].innerHTML = minutes;
        let seconds = date.getSeconds();
        if (seconds < 10) seconds = "0" + seconds;
        clock.children[2].innerHTML = second
    }
}

let clock = new Clock({ template: 'hh:mm:ss' });
clock.start();

function update() {
    let data = new Date();
    let hours = new Date(Date.now()).getHours();
    if (hours < 10) hours = "0" + hours;
    let minutes = new Date(Date.now()).getMinutes();
    if (minutes < 10) minutes = "0" + minutes;
    let seconds = new Date(Date.now()).getSeconds();
    if (seconds < 10) seconds = "0" + seconds;
    const time = `${hours}:${minutes}:${seconds}`
    htmlElements.watch.innerHTML = time;
}

function clockStart() {
    timerId = setInterval(update, 1000);
    update();
}

function clockStop() {
    clearInterval(timerId);
}
clockStart();

var startTimer = setInterval(function() { myTimer(), 1000 });

function myTimer() {
    var currtnt = new Date();
    document.getElementById("timer").innerHTML = current.toLocaleTimeString();
}

function start(st) {
    window[st]();
    var elem = document.getElementById("myButton");
}

function Timer() {
    const difference = (new Date().getTime() - sartTime) / 1000;
    let secods = parseInt(difference % 60);
    const minutes = parseInt((difference / 60) % 60);
    if (seconds < 10) {
        secods = '0' + secods;
    }
    const time = `${minutes}:${seconds}`;
}


var base = 60
var clocktimer, dateObj;
dh, dm, ds, ms;
var readot = '';
var h = 1,
    m = 1,
    tm = 1,
    s = 0,
    ts = 0,
    ms = 0,
    init = 0;

function ClearClock() {
    clearTimeout(clocktimer);
    h = 1;
    m = 1;
    tm = 1;
    s = 0;
    ts = 0;
    ms = 0;
    init = 0;
    readout = '00:00:00.00';
    document.getElementById("timer").innerHTML = current.toLocaleTimeString();
}

//class stopwatch {
//    constructor();
//}
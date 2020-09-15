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


var base = 60 //секундолмер
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
    readout = '00:00:00';
    document.getElementById("stopwatch").innerHTML = current.toLocaleTimeString();
}

function startTimer() {
    var cdateObj = new Date();
    var t = (cdateObj.getTime() - dateObj.getTime()) - (s * 1000);
    if (t > 999) { s++; }
    if (s >= (m * base)) {
        ts = 0;
        m++;
    } else {
        ts = parseInt((ms / 100) + s);
        if (ts >= base) { ts = ts - ((m - 1) * base); }
    }
    if (m > (h * base)) {
        tm = 1;
        h++;
    } else {
        tm = parseInt((ms / 100) + m);
        if (tm >= base) { tm = tm - ((h - 1) * base); }
    }
    ms = Math.round(t / 10);
    if (ms > 99) { ms = 0; }
    if (ms == 0) { ms = '00'; }
    if (ms > 0 && ms <= 9) { ms = '0' + ms; }
    if (ts > 0) { ds = ts; if (ts < 10) { ds = '0' + ts; } } else { ds = '00'; }
    dm = tm - 1;
    if (dm > 0) { if (dm < 10) { dm = '0' + dm; } } else { dm = '00'; }
    dh = h - 1;
    if (dh > 0) { if (dh < 10) { dh = '0' + dh; } } else { dh = '00'; }
    readout = dh + ':' + dm + ':' + ds + '.' + ms;
    document.MyForm.stopwatch.value = readout;
    clocktimer = setTimeout("StartTIME()", 1);
}

function StartStop() {
    if (init == 0) {
        ClearСlock();
        dateObj = new Date();
        StartTIME();
        init = 1;
    } else {
        clearTimeout(clocktimer);
        init = 0;
    }
}

let timerInput = document.getElementById("time"); // Таймер
let buttonRun = document.getElementById("button");
let timerShow = document.getElementById("timer");

buttonRun.addEventListener('click', function() {
    timeMinut = parseInt(timerInput.value) * 60
})

timer = setInterval(function() {
    seconds = timeMinut % 60
    minutes = timeMinut / 60 % 60
    hour = timeMinut / 60 / 60 % 60
    if (timeMinut <= 0) {
        clearInterval(timer);
        alert("Время закончилось");
    } else {
        let strTimer = `${Math.trunc(hour)}:${Math.trunc(minuts)}:${seconds}`;
        timerShow.innerHTML = strTimer;
    }
    --timeMinut;
}, 1000)

//setTimeout(() => alert("Мир"));

//alert("Привет");
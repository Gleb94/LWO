import { Clock } from "./Modules/clock.js";
import { StopWatchStart } from "./Modules/stopwatch.js";
import { Timer } from "./Modules/timer.js";
const htmlElements = {};
htmlElements.startBtn = document.querySelector(".container .buttons button.start");
htmlElements.stopBtn = document.querySelector(".container .buttons button.stop");
htmlElements.resetBtn = document.querySelector(".container .buttons button.reset");
htmlElements.startBtnTimer = document.querySelector(".container-timer .buttons button.start2");
htmlElements.stopBtnTimer = document.querySelector(".container-timer .buttons button.stop2");
htmlElements.resetBtnTimer = document.querySelector(".container-timer .buttons button.reset2");
htmlElements.clock = document.querySelector(".container .links .clock");
htmlElements.watch = document.querySelector(".watch");
htmlElements.stopwatch = document.querySelector(".container .links .stopwatch");
htmlElements.timer = document.querySelector(".container .links .timer");
htmlElements.output = document.querySelector(".container .output");
htmlElements.containerClock = document.querySelector(".container-clock");
htmlElements.containerTimer = document.querySelector(".container-timer");
htmlElements.containerStopWatch = document.querySelector(".container-stopWatch");

document.getElementById("button1").style.color = "gray";
document.getElementById("button2").style.color = "gray";
document.getElementById("button3").style.color = "gray";

document.getElementById("button1").onclick = function() {
    this.style.color = "blue";
    document.getElementById("button2").style.color = "gray";
    document.getElementById("button3").style.color = "gray";
    let clock = new Clock({ template: 'h:m:s' });
    clock.start();
};

document.getElementById("button2").onclick = function() {
    this.style.color = "blue";
    document.getElementById("button1").style.color = "gray";
    document.getElementById("button3").style.color = "gray";
    let stopWatchStart = new StopWatchStart({ template: 'h:m:s' });
    stopWatchStart.render();
    htmlElements.stopBtn.removeAttribute("hidden");
    htmlElements.startBtn.removeAttribute("hidden");
    htmlElements.resetBtn.removeAttribute("hidden");
    htmlElements.startBtn.addEventListener("click", stopWatchStart.runStopWatch);
    htmlElements.stopBtn.addEventListener("click", stopWatchStart.stopStopWatch);
    htmlElements.resetBtn.addEventListener("click", stopWatchStart.resetStopWatch);
};

document.getElementById("button3").onclick = function() {
    this.style.color = "blue";
    document.getElementById("button1").style.color = "gray";
    document.getElementById("button2").style.color = "gray";
    let timer = new Timer({ template: 'h:m:s' });
    timer.render();
    htmlElements.startBtnTimer.addEventListener("click", timer.runTimer);
    htmlElements.stopBtnTimer.addEventListener("click", timer.stopTimer);
    htmlElements.resetBtnTimer.addEventListener("click", timer.resetTimer);

};
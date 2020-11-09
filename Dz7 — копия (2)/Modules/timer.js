const htmlElements = {
    startBtn: document.querySelector(".container-timer .buttons button.start"),
    stopBtn: document.querySelector(".container-timer .buttons button.stop"),
    resetBtn: document.querySelector(".container-timer .buttons button.reset"),
    watch: document.querySelector(".container-timer .watch"),
    timer: document.querySelector("container .links .timer"),
};

export class Timer {
    constructor({ template }) {
        self = this
        this.template = template;
        // this.hours = hours
        // this.minutes = minutes
        // this.seconds = seconds
        // this.timerId = timerId
    }


    self;
    hours = '00';
    minutes = '05';
    seconds = '00';
    timerId;
    render() {
        clearInterval(this.timerId);
        self.hours = '00';
        self.minutes = '05';
        self.seconds = '00';
        const output = this.template
            .replace('h', self.hours)
            .replace('m', self.minutes)
            .replace('s', self.seconds);
        this.output = output
        htmlElements.watch.innerHTML = output;
    }

    runStopWatch2() {
        clearInterval(self.timerId)
        self.timerId = setInterval(self.updateStopWatch2.bind(self), 1000);
    }

    stopStopWatch2() {
        self.timerId = clearInterval(self.timerId);
    }

    resetStopWatch2() {
        clearInterval(self.timerId);
        self.render();
    }

    updateStopWatch2() {
        this.seconds--;
        if (this.seconds <= 0) {
            this.seconds = 59;
            this.minutes--;
            if (this.minutes <= -1) {
                this.minutes = 59;
                this.hours--;
            }
            if (this.hours === 24) {
                this.hours = 0;
            }
        }
        if (this.hours < 10 && this.hours.length !== 2) this.hours = "0" + this.hours;
        if (this.minutes < 10 && this.minutes.length !== 2) this.minutes = "0" + this.minutes;
        if (this.seconds < 10 && this.seconds.length !== 2) this.seconds = "0" + this.seconds;
        const time = `${this.hours}:${this.minutes}:${this.seconds}`;
        htmlElements.watch.innerHTML = time;
    }
}
class Clock extends HTMLElement{
    constructor(){
        super();
        this._shadowDOM = this.attachShadow({mode: "open"});
        this.date = this.getAttribute("date");
        this.hour = this.getAttribute("hour");
        this.minute = this.getAttribute("minute");
        this.second = this.getAttribute("second");
    }
    render() {
        let dateToday = new Date();
        
        let dates = dateToday.getDate();
        let dates_left = Number(this.date) - Number(dates)
        
        let hours = dateToday.getHours();
        let hours_left = Number(this.hour) - Number(hours)
        
        let mins = dateToday.getMinutes();
        let mins_left = Number(this.minute) - Number(mins)
        
        let secs = dateToday.getSeconds();
        let secs_left = Number(this.second) - Number(secs)
        if (secs_left < 0) {
            secs_left *= -1
            mins_left -= 1
        }
        if (mins_left < 0) {
            mins_left *= -1
            hours_left -= 1
        }
        if (hours_left < 0) {
            hours_left *= -1
            dates_left -= 1
        }
        
        if (hours < 10) hours = "0" + hours;
        if (mins < 10) mins = "0" + mins;
        if (secs < 10) secs = "0" + secs;
        
        let currentTime = dates_left + ":" + hours_left + ":" + mins_left + ":" + secs_left;
        
        console.log(currentTime);
    }
    connectedCallBack(){
        this._shadowDOM.innerHTML = `
        <div class="countdown-inner">
            <span class="timer day">
                <span class="timer-inner">
                    <b></b>
                    <span>Days</span>
                </span>
            </span>
            <span class="timer hour">
                <span class="timer-inner">
                    <b></b>
                    <span>Hours</span>
                </span>
            </span>
            <span class="timer min">
                <span class="timer-inner">
                    <b></b>
                    <span>Mins</span>
                </span>
            </span>
            <span class="timer sec">
                <span class="timer-inner">
                    <b></b>
                    <span>Secs</span>
                </span>
            </span>
        </div>
        `
    }
    start() {
        this.render();
        this.timer = setInterval(() => this.render(), 1000);
    }
}
window.customElements.define("clock-timer", Clock)
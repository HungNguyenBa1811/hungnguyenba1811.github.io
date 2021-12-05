const clockStyle = `
    .cock{}
`
class Clock extends HTMLElement {
    constructor() {
        super();
        this._shadowDOM = this.attachShadow({ mode: 'open' })
        this.btn = this.getAttribute('btn')
        this.timer = this.getAttribute('timer')
        this._shadowDOM.innerHTML = `
            ${clockStyle}
            <div class="stopwatch">
                <span id="mins"></span>
                <span>:</span>
                <span id="secs"></span>
                <button></button>
                <button></button>
                <button></button>
            </div>
        `
    }
    start() {
        var myTimer = 0
        var timeElapsedMins = 0
        var timeElapsedSecs = 0
        myTimer = setInterval(() => {
            timeElapsedSecs++
            if(timeElapsed >= 60) {
                timeElapsedSecs = 0
                timeElapsedMins++
            }
            if(timeElapsedMins < 10) {
                timeElapsedMins = '0' + timeElapsedMins
            }
            if(timeElapsedSecs < 10) {
                timeElapsedSecs = '0' + timeElapsedSecs
            }
            document.querySelector('.mins').innerHTML = timeElapsedMins
            document.querySelector('.secs').innerHTML = timeElapsedSecs
        }, 1000)
    }
    stop() {
        
        clearInterval(myTimer);
    }
    stopAll() {

    }
}
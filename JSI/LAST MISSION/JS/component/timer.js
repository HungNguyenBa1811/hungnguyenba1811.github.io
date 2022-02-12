const style =  `
.timer {
    background: #f4f6f7;
    display: inline-block;
    vertical-align: middle;
    text-align: left;
    min-width: 30px;
    border-radius: 5px;
    margin: 0 2px 5px;
    padding: 20px 8px 0;
    font-size: 0.85rem;
}
.timer b {
    display: block;
    line-height: 1;
    font-size: 1.6rem;
    font-weight: 500;
    color: #000;
}
.timer span {
    line-height: 1;
}
`
class Clock extends HTMLElement {
    constructor() {
        super();

        this._shadowDOM = this.attachShadow({ mode: 'open' });

        // Set the date
        let countDownDate = new Date("Jan 5, 2024 15:37:25").getTime();
        console.log(this._shadowDOM)
        // Update the count down every 1 second
        
            setInterval( () => {
                // Get today's date and time
                let now = new Date().getTime();

                // Find the distance between now and the count down date
                let distance = countDownDate - now;

                // Time calculations for days, hours, minutes and seconds
                let days = Math.floor(distance / (1000 * 60 * 60 * 24));
                let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                let seconds = Math.floor((distance % (1000 * 60)) / 1000);

                // Output the result
                console.log(days + "d " + hours + "h " + minutes + "m " + seconds + "s ")
                this._shadowDOM.innerHTML = `
                    <style>
                        ${style}
                    </style>
                    <div class="countdown-inner">
                        <span class="timer day">
                            <span class="timer-inner">
                                <b>${days}</b>
                                <span>Days</span>
                            </span>
                        </span>
                        <span class="timer hour">
                            <span class="timer-inner">
                                <b>${hours}</b>
                                <span>Hours</span>
                            </span>
                        </span>
                        <span class="timer min">
                            <span class="timer-inner">
                                <b>${minutes}</b>
                                <span>Mins</span>
                            </span>
                        </span>
                        <span class="timer sec">
                            <span class="timer-inner">
                                <b>${seconds}</b>
                                <span>Secs</span>
                            </span>
                        </span>
                    </div>
                `
            }, 1000);
        }
    
}
window.customElements.define("timer-countdown", Clock)
const clockStyle = `
    .cock{}
`;
class Clock extends HTMLElement {
  constructor() {
        super();
        this._shadowDOM = this.attachShadow({ mode: "open" });
        this.btn = this.getAttribute("btn");
        this.timer = this.getAttribute("timer");
    }
    connectedCallback() {
        this._shadowDOM.innerHTML = `
                <style>
                    ${clockStyle}
                </style>
                <div class="stopwatch">
                    <span id="mins"></span>
                    <span>:</span>
                    <span id="secs"></span>
                    <button></button>
                    <button></button>
                    <button></button>
                </div>
            `;
    }
    render() {
        let date = new Date();

        let mins = date.getMinutes();
        if (mins < 10) mins = "0" + mins;

        let secs = date.getSeconds();
        if (secs < 10) secs = "0" + secs;

        let output = this.template
        .replace("m", mins)
        .replace("s", secs);

        console.log(output);
    }

    stop() {
        clearInterval(this.timer);
    }

    start() {
        this.render();
        this.timer = setInterval(() => this.render(), 1000);
    }
}
window.customElements.define("clock", Clock);

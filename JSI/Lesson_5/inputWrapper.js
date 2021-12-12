const style = `
    .err {
        display: none;
        color: red;
    }
    input {
        border-radius: 3px;
        width: 80%;
        border: 1px solid 0;
        padding: 12px 5px;
    }
`
class InputWrapper extends HTMLElement {
    constructor() {
        super();
        this._shadowDOM = this.attachShadow({ mode: 'open' })
    }
    connectedCallback() {
        this.type = this.getAttribute('type')
        this.placeholder = this.getAttribute('placeholder')
        this.err = this.getAttribute('err')
        this._shadowDOM.innerHTML = `
            <style>
                ${style}
            </style>
            <div class="input-wrapper">
                <input type="${this.type}" placeholder="${this.placeholder}" required>
                <div class="err">${this.err}</div>
            </div>
        `
    }
}
window.customElements.define('input-wrapper', InputWrapper)
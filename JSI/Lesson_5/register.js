const style = `
    .register-container {
        background-image: url('https://c.tenor.com/FC-Hk1iXUikAAAAM/shang-abi.gif');
        background-repeat: no-repeat;
        background-size: 100vh;
        display: flex;
        justify-content: flex-end;
    }
    .register-form {
        width: 35%;
        background: #fff;
        height: 100vh;
    }
    h1 {
        color: #333;
        text-align: center;
    }
    button {
        color: #fff;
        padding: 10px 15px;
        border-radius: 5px;
    }
`
class RegisterScreen extends HTMLElement {
    constructor() {
        super();
        this._shadowDOM = this.attachShadow({ mode: 'open' })
    }
    connectedCallback() {
        this._shadowDOM.innerHTML = `
            <style>
                ${style}
            </style>
            <div class="register-container">
                <div class="register-form">
                    <h1>JSI-03</h1>
                    <input-wrapper type="text" placeholder="Enter your first name" err=""></input-wrapper>
                    <input-wrapper type="text" placeholder="Enter your last name" err=""></input-wrapper>
                    <input-wrapper type="text" placeholder="Enter your email" err="This email has already been taken"></input-wrapper>
                    <input-wrapper type="password" placeholder="Type your password"></input-wrapper>
                    <input-wrapper type="password" placeholder="Retype your password" err="Wrong password"></input-wrapper>
                    <button>Register</button>
                    <a>Already have an account? Login</a>
                </div>
            </div>
        `
    }
}
window.customElements.define('register-screen', RegisterScreen)
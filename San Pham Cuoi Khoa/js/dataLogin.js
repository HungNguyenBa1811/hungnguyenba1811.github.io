let accountList = []
var signIn = false

let store = () => {
    let name = document.getElementById('name');
    let psw = document.getElementById('psw');
    let lowerCase = /[a-z]/g;
    let upperCase = /[A-Z]/g;
    if(name.value.length == 0){
        alert('Please fill in your username');
    }else if(psw.value.length == 0){
        alert('Please fill in your password');
    }else if(psw.value.length < 6){
        alert('Minimum of 6');
    }else if(!psw.value.match(upperCase)){
        alert('please add at least 1 uppercase letter');
    }else if(!psw.value.match(lowerCase)){
        alert('please add at least 1 lowercase letter');
    }else{
        localStorage.setItem('username', name.value);
        localStorage.setItem('password', psw.value);
        alert('Your account has been created!!')
        name.value = ""
        psw.value = ""
    }
}

let check = () => {
    let storedName = localStorage.getItem('username')
    let storedPsw = localStorage.getItem('password')

    let userName = document.querySelector('#userName')
    let userPsw = document.querySelector('#userPsw')

    if(userName.value == storedName && userPsw.value == storedPsw){
        alert('You are logged in!')
        signIn = true
        console.log(signIn)
    }else{
        alert('Login failed!')
    }
}

let backToHomePage = () => {
    window.location = "./index.html"
}
console.log(signIn)
// Check flag
let sign_ball = document.getElementById('sign')
let reg_ball = document.getElementById('reg')
let out_ball = document.getElementById('ball')
if(signInNew == true){
    sign_ball.addEventListener('click', function(){
        sign_ball.setAttribute('href', '#')
    })
    reg_ball.addEventListener('click', function(){
        reg_ball.setAttribute('href', '#')
    })
    out_ball.addEventListener('click', function(){
        signIn = false
    })
}
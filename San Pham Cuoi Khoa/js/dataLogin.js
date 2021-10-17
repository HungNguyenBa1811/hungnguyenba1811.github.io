let booleans = localStorage.getItem('Logged_in');
if(booleans === true){
    let signIn = booleans;
    localStorage.setItem('Logged_in', signIn)
    var active = JSON.parse(localStorage.getItem('Active'))
    localStorage.setItem('')
}else{
    let signIn = false;
    localStorage.setItem('Logged_in', signIn)
    var active = []
}
let accountData = localStorage.getItem('Account List')
if(accountData){
    var accountList = JSON.parse(accountData)
}else{
    var accountList = []
}

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
        let account = {
            username: name.value,
            password: psw.value,
        }
        accountList.push(account);
        localStorage.setItem('Account List', JSON.stringify(accountList));
        // localStorage.setItem('username', name.value);
        // localStorage.setItem('password', psw.value);
        alert('Your account has been created!!')
        name.value = ""
        password.value = ""
        account = ""
    }
}
console.log(accountList.length);
let check = () => {
    for (let i = 0; i < accountList.length; i++) {
        let storedName = accountList[i].username
        let storedPsw = accountList[i].password

        let userName = document.querySelector('#userName')
        let userPsw = document.querySelector('#userPsw')

        if(userName.value == storedName && userPsw.value == storedPsw){
            alert('You are logged in!')
            signIn = true
            let activeAccount = {
                username: userName.value,
                password: userPsw.value
            }
            active.push(activeAccount)
            localStorage.setItem('Active', JSON.stringify(active))
            localStorage.setItem('Logged_in', signIn)
            setTimeout(backToHomePage(), 3000)
        }else{
            alert('Login failed! Try again')
        }
    }
}

let backToHomePage = () => {
    window.location = "./index.html"
}
// console.log(signIn)
// Check flag
let sign_ball = document.getElementById('sign')
let reg_ball = document.getElementById('reg')
let out_ball = document.getElementById('ball')
let signInStatus = booleans
if(signInStatus == true){
    sign_ball.style.display = "none"
    reg_ball.style.display = "none"
    out_ball.style.display = "block !important"
    out_ball.addEventListener('click', function(){
        signIn = false
        localStorage.clear()
        window.localStorage.getItem('Logged_in', signIn)
    })
}else if(signInStatus === false){
    localStorage.removeItem('Logged_in')
}
function redirect_1(){
    window.location = './signupPage.html'
}
function redirect_2(){
    window.location = './loginPage.html'
}
function cancel(){
    window.location = './index.html'
}
document.getElementById('btn-login').addEventListener('mousedown', changeColor);
document.getElementById('btn-login').addEventListener('mouseup', changeColorBack);
function changeColor(){
    document.getElementById('btn-login').style.backgroundColor = '#BBE1FA'
}
function changeColorBack(){
    document.getElementById('btn-login').style.backgroundColor = '#0F4C75'
}

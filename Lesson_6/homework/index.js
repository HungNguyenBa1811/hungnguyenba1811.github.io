let popup = document.querySelector('.login-popup');
window.onclick = function(event){
    if(event.target == popup){
        popup.style.display = 'none'
    }
}
function close(){
    document.querySelector('#popup').style.display = 'none';
}

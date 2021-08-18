function redirect_1(){
    window.location = './signupPage.html'
}
function redirect_2(){
    window.location = './loginPage.html'
}
function redirect_3(){
    window.location = 'https://www.google.com.vn/'
}
function cancel(){
    window.location = './index.html'
}
if(window.innerHeight > window.innerWidth || screen.availHeight > screen.availWidth){
    document.getElementById('body').style.display = 'none';
    setTimeout( function(){
        alert("Please rotate your device or being rickrolled in 5 seconds");
    }, 1234);
    setTimeout( function(){
        window.location = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
    }, 5000)
}
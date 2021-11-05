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

//prank
setInterval(function(){
    if(window.outerHeight > window.outerWidth || screen.availHeight > screen.availWidth){
        document.getElementById('body').style.display = 'none';
        setTimeout( function(){
            alert("Please rotate your device and reload the page, or being rickrolled");
        }, 234);
        setTimeout( function(){
            window.location = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
        }, 3000)
    }else{
        document.getElementById('body').style.display = 'inherit'
    }
}, 3000)

setInterval(function(){
    if(window.innerWidth < 1145){
        document.querySelector('.landing').style.padding = "110px";
        document.querySelector('.head').style.fontSize = '32px'
    }else{
        document.querySelector('.landing').style.padding = "150px";
        document.querySelector('.head').style.fontSize = '35px'
    }
}, 500)
import {products} from './data.js';

var myIndex = 0;
carousel();

function carousel() {
    let i;
    let x = document.getElementsByClassName("mySlide");
    let y = document.getElementsByClassName("slide-text");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";  
    }
    myIndex++;
    if (myIndex > x.length) {
        myIndex = 1
    }    
    x[myIndex-1].style.display = "block"
    setTimeout(carousel, 8000); // Change image every 5 seconds
}
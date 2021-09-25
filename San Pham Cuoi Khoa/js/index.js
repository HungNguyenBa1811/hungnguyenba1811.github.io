import {products} from './data.js';

var slideIndex = 0;
carousel();

function carousel() {
    let i;
    let x = document.getElementsByClassName("mySlide");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" whiteballs", "");
    }
    slideIndex++;
    if (slideIndex > x.length) {slideIndex = 1}
    x[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += "w3-white";
    setTimeout(carousel, 5000); // Change image every 5 seconds
}
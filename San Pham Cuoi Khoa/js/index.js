import {products} from './data.js';

var slideIndex;

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlide");
    let dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace("active", "");
    }
 
    slides[slideIndex].style.display = "block";  
    dots[slideIndex].className += "active";
    
    slideIndex++;

    if (slideIndex > slides.length - 1) {
        slideIndex = 0
    }    
    
    setTimeout(showSlides, 5000);
}
showSlides(slideIndex = 0);

function currentSlide(n) {
    showSlides(slideIndex = n);
}
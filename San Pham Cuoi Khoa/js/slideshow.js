let slideIndex = 0;
carousel();

function carousel() {
  let i;
  let x = document.getElementsByClassName("mySlide");
  for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
  }
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active-ball", "");
  }
  slideIndex++;
  if (slideIndex > x.length) {
    slideIndex = 1
  }
  x[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active-ball";
  setTimeout(carousel, 20000); // Change image every 20 seconds
}

let currentSlide = (n) => {
  carousel(slideIndex = n);
}
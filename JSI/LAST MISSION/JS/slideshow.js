let slideIndex = 0;
carousel();

function carousel() {
  let i;
  let x = document.getElementsByClassName("mySlide");
  for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
  }
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slideIndex++;
  if (slideIndex > x.length) {
    slideIndex = 1
  }
  x[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  setInterval(carousel, 20000); // Change image every 20 seconds
}

let currentSlide = (n) => {
  carousel(slideIndex = n);
}
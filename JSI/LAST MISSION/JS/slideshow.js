// let slideIndex = 0;
// carousel();

// function carousel() {
//   let i;
//   let x = document.getElementsByClassName("mySlide");
//   for (i = 0; i < x.length; i++) {
//       x[i].style.display = "none";
//   }
//   let dots = document.getElementsByClassName("dot");
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slideIndex++;
//   if (slideIndex > x.length) {
//     slideIndex = 1
//   }
//   x[slideIndex-1].style.display = "block";
//   dots[slideIndex-1].className += " active";
//   setInterval(carousel, 20000); // Change image every 20 seconds
// }

// let currentSlide = (n) => {
//   carousel(slideIndex = n);
// }
// $(".slideshow").owlCarousel({
//   autoplay: 3000,
//   loop: true,
//   items: 1,
//   dots: true,
//   nav: false,
// })
// $(".ptowl").owlCarousel({
//   loop: true,
//   nav: false,
//   dots: false,
//   responsive:{
//       0:{
//           items:1
//       },
//       600:{
//           items:3
//       },
//       1000:{
//           items:5
//       }
//   }
// });
// console.log("hello")
// $(".pd-tab-1").owlCarousel({
//   loop: true,
//   autoWidth:true,
//   items: 4,
//   nav: true,
//   dots: false,
//   responsive:{
//       0:{
//           items: 1
//       },
//       767:{
//           items: 2
//       },
//       992:{
//           items: 2
//       },
//       1199:{
//           items: 2
//       }
//   }
// })
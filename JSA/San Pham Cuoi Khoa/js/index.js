// Toggle through function
  function myFunction() {
    document.querySelector(".sub-menu").classList.toggle("show");
  }
  function myFunction2() {
    document.querySelector(".sub-menu-2").classList.toggle("show");
  }
  function myFunction3() {
    document.querySelector(".cart-list").classList.toggle("show");
  }

  // Close the dropdown if the user clicks outside of it
  window.onclick = function (event) {
    if (!event.target.matches('.dropdown-content') || !event.target.matches('.dropdown-content-2') || !event.target.matches('.cart-list')) {
      let dropdowns = document.querySelector(".sub-menu");
      let i;
      for (i = 0; i < dropdowns.length; i++) {
        let openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
      let dropdowns_2 = document.querySelector(".sub-menu-2");
      let k;
      for (k = 0; k < dropdowns_2.length; k++) {
        let openDropdown_2 = dropdowns_2[k];
        if (openDropdown_2.classList.contains('show')) {
          openDropdown_2.classList.remove('show');
        }
      }
      let dropdowns_3 = document.querySelector(".cart-list");
      let l;
      for (l = 0; l < dropdowns_3.length; l++) {
        let openDropdown_3 = dropdowns_3[l];
        if (openDropdown_3.classList.contains('show')) {
          openDropdown_3.classList.remove('show');
        }
      }
    }
  }

  // Toggle 2
  let tog_1 = document.getElementsByClassName("product-container-feature-1")
  let tog_2 = document.getElementsByClassName("product-container-feature-2")
  let item_tog_1 = document.getElementsByClassName('elem-1')
  let item_tog_2 = document.getElementsByClassName('elem-2')
  // create function
  let toggle_01 = () => {

    tog_2[0].className = tog_2[0].className.replace("nolongerexist", " visible-haha")
    tog_1[0].className = tog_1[0].className.replace("visible-haha", " nolongerexist")
    item_tog_1[0].className = item_tog_1[0].className.replace(" active-list", "")
    item_tog_2[0].className += " active-list"

  }
  let toggle_02 = () => {

    tog_1[0].className = tog_1[0].className.replace("nolongerexist", " visible-haha")
    tog_2[0].className = tog_2[0].className.replace("visible-haha", " nolongerexist")
    item_tog_2[0].className = item_tog_2[0].className.replace(" active-list", "")
    item_tog_1[0].className += " active-list"

  }
  // add event
  let tg_1 = document.getElementsByClassName('toggle-1')
  for (let i = 0; i < tg_1.length; i++) {
    tg_1[i].addEventListener('click', toggle_01)
  }
  let tg_2 = document.getElementsByClassName('toggle-2')
  for (let i = 0; i < tg_2.length; i++) {
    tg_2[i].addEventListener('click', toggle_02)
  }

  // Toggle Currency
  document.querySelector('.usd').addEventListener('click', function () {
    document.querySelector('.show').classList.remove('show')
  })

  // Scroll to top
  let scrollButton = document.getElementById("back-top")
  let scroll_1 = document.querySelector('.top-bar')
  scrollButton.addEventListener('click', function () {
    scroll_1.scrollIntoView()
  })

  // When the user scrolls down 20px from the top of the document, show the button
  window.onscroll = function () { scrollFunction() };

  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      scrollButton.style.display = "block";
    } else {
      scrollButton.style.display = "none";
    }
  }

  // Scroll to element
  document.querySelector('.g-kb').addEventListener('click', function () {
    document.querySelector('.scr-1').scrollIntoView()
  })
  document.querySelector('.g-hp').addEventListener('click', function () {
    document.querySelector('.scr-2').scrollIntoView()
  })
  document.querySelector('.g-cs').addEventListener('click', function () {
    document.querySelector('.scr-3').scrollIntoView()
  })
  document.querySelector('.g-ms').addEventListener('click', function () {
    document.querySelector('.scr-4').scrollIntoView()
  })
  document.querySelector('.g-hw').addEventListener('click', function () {
    document.querySelector('.scr-5').scrollIntoView()
  })
  document.querySelector('.g-ft').addEventListener('click', function () {
    document.querySelector('.scr-sp').scrollIntoView()
  })

// Audio playback
// let audio = document.querySelector("#myaudio")
// audio.volume = 0.1;

// // Search bar
// let input_search = document.getElementById('input');
// function getInputValue(){
//   mainProd.innerHTML = '';
//   let inputVal = input_search.ariaValueMax.toLowerCase()
//   for(let i = 0; i < productsData.length; i++ ){
//     let y = productsData[i].name.toLowerCase()
//     if(y == inputVal){
//       // update table

//     }
//   }
// }
// let productsList = document.getElementById('productsList')
// function searchResult(name){
//   console.log(name)
//   // insert HTML
// }
// let arrayName = [];
// function fillArr(){
//   for(let i = 0; i < productsData.length; i++){
//     // arrayName.push()
//   }
//   for(let i = 0; i < productsData.length; i++){
//     // search result
//   }
// }
// console.log(fillArr())
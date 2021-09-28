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
      dots[i].className = dots[i].className.replace(" active-ball", "");
    }
    slideIndex++;
    if (slideIndex > x.length) {slideIndex = 1}
    x[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active-ball";
    setTimeout(carousel, 7654); // Change image every 7.654 seconds
}

let addToCartBtn = document.querySelectorAll(".add-to-cart");
let showNumProduct = document.querySelector(".cart-item-count");
let keys  = Object.keys(localStorage)
let cart = []
let numProduct = 0
if(keys.length){
    cart = JSON.parse(localStorage.getItem('cart'))
    numProduct = localStorage.getItem('numProduct')
}
showNumProduct.innerHTML = numProduct;
// Increse num product
for (let x of addToCartBtn) {
  x.onclick = () => {
    ++numProduct;
    showNumProduct.innerHTML = numProduct;
    let product = {
      name: "",
      image: "",
      price: "",
    };
    let productDom = x.parentElement.children;
    product.name = productDom[2].innerHTML;
    product.price = productDom[0].innerHTML;
    product.image = ""
    cart.push(product)
    localStorage.setItem('cart',JSON.stringify(cart))
    localStorage.setItem('numProduct',numProduct)
  };
}
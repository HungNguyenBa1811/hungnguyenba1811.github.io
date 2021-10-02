let addToCartBtn = document.querySelectorAll(".add-to-cart");
let showNumProduct = document.querySelector(".cart-item-count");
let keys  = Object.keys(localStorage)
let cart = []
let numProduct = 0;
if(keys.length){
  cart = JSON.parse(localStorage.getItem('cart'))
  numProduct = localStorage.getItem('numProduct')
}
showNumProduct.innerHTML = numProduct;
// Increse num product
for (let y of addToCartBtn) {
  y.onclick = () => {
    ++numProduct;
    showNumProduct.innerHTML = numProduct;
    let product = {
      name: "",
      image: "",
      price: "",
    };
    let productDom = y.parentElement.children;
    console.log(productDom[0])
    // product.name = productDom[2].innerHTML;
    // product.price = productDom[0].innerHTML;
    // product.image = ""
    // cart.push(product)
    // localStorage.setItem('cart',JSON.stringify(cart))
    // localStorage.setItem('numProduct',numProduct)
  };
}

let item = document.querySelector('.product-container')
let cartParse = JSON.parse(localStorage.getItem('productsCart'))


console.log('cartParse', cartParse);
item.addEventListener('click', function(event) {
    let item = event.target.value;
    console.log('Item: ', item);
    cartParse.push(`${item.id}`);
    localStorage.setItem('productsCart', JSON.stringify(cartParse));
    let cartFood = document.querySelector('.item-choose')
    cartFood.innerHTML += `<p class="foody">${item}</p>`
})

function resetCart() {
    document.querySelector('.food-choose').innerHTML = ''
}
// Toggle
function myFunction() {
  document.querySelector(".sub-menu").classList.toggle("show");
}
function myFunction2() {
  document.querySelector(".sub-menu-2").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropdown-content') || !event.target.matches('.dropdown-content-2')) {
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
  }
}
// Click event
let usd = document.querySelector('.usd')
let eur = document.querySelector('.eur')
let vnd = document.querySelector('.vnd')

usd.addEventListener('click', function(){
  document.querySelector('.selected-country')
})
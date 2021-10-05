let addToCartBtn = document.querySelectorAll(".btn-cart");
let showNumProduct = document.querySelector(".cart-item-count");
let keys  = Object.keys(localStorage)
let cart = []
let numProduct = 0;
let numPrice = 0;

// Math.round( *100)/100;
// Increase num product
// for (let y of addToCartBtn) {
//   y.addEventListener('click', () => {
//     ++numProduct;
//     showNumProduct.innerHTML = numProduct;
//     let product = {
//       name: "",
//       image: "",
//       price: "",
//     };
//     let productDom = y.parentElement.children;
//     console.log(productDom[0])
//     // product.name = productDom[2].innerHTML;
//     // product.price = productDom[0].innerHTML;
//     // product.image = ""
//     // cart.push(product)
//     // localStorage.setItem('cart',JSON.stringify(cart))
//     // localStorage.setItem('numProduct',numProduct)
//   })
// }

let addNumProduct = () => {
  ++numProduct;
  showNumProduct.innerHTML = numProduct;
};

// let item = document.querySelector('.product-container')
// let cartParse = JSON.parse(localStorage.getItem('productsCart'))

//showPro
let mainProd = document.getElementById('main-content');
//fnc list
function showList(productsData){

    for(let prod of productsData){
        let imageUrl = prod.imageUrl;
        let name = prod.name;
        let brand = prod.brand;
        let price = prod.price;
        let size = prod.size;
        let sex = prod.sex;
        let scent = prod.scent;
        product(imageUrl,name, brand,price,size,sex,scent);
    }
}
// console.log(showList);
showList(productsData);
// fnc prod
function product(imageUrl,name, brand,price,size,sex,scent){

    // console.log(mainProd)
    mainProd.insertAdjacentHTML('beforeend',`
    <div class="main-item">
        <div class="main-pic">
            <img wirdth="170" height="170" src="${imageUrl}" alt="${name}"/>
        </div>
        <div class="title">
            <b>${brand}</b><br/>
            <span>${price}</span>
          <button>buy</button>
        </div>
    </div>
    `
    );
}

// console.log('cartParse', cartParse);
// item.addEventListener('click', function(event) {
//     let item = event.target.value;
//     console.log('Item: ', item);
//     cartParse.push(`${item}`);
//     localStorage.setItem('productsCart', JSON.stringify(cartParse));
//     let cartFood = document.querySelector('.item-choose')
//     cartFood.innerHTML += `<p class="product">${item}</p>`
// })

// function resetCart() {
//     document.querySelector('.food-choose').innerHTML = ''
// }
// Toggle
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
window.onclick = function(event) {
  if (!event.target.matches('.dropdown-content') || !event.target.matches('.dropdown-content-2') || !event.target.matches('.cart-list') ) {
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
// Click event
let usd = document.querySelector('.usd')
let eur = document.querySelector('.eur')
let vnd = document.querySelector('.vnd')

usd.addEventListener('click', function(){
  document.querySelector('.selected-country')
})
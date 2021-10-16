let addToCartBtn = document.querySelectorAll(".btn-cart");
let showNumProduct = document.querySelector(".cart-item-count");
// let keys  = Object.keys(localStorage)

var storageKey = 'Cart';
let dataCart = localStorage.getItem(storageKey);
let cart;
if(dataCart){
  cart = JSON.parse(dataCart);
}else{
  cart = [];
}

let productsData = localStorage.getItem('products')
console.log(JSON.parse(productsData))

// let item = document.querySelector('.items')
// let cart = document.querySelector('.container-right')
let cartParse = JSON.parse(localStorage.getItem('cart'))
for(let y of addToCartBtn){
  y.addEventListener('click', function(event){
    alert(event.target.value);
    let item = event.target.value;
    console.log('Item: ', item);
    cartParse.push(`${item}`);
    localStorage.setItem('cart', JSON.stringify(cartParse));
    // let cartFood = document.querySelector('.food-choose')
  })
}

let numLocal = localStorage.getItem('numProduct')
if(numLocal){
  // if product has already been counted
  var numProduct = numLocal // get products count from local
  showNumProduct.innerHTML = numLocal
}else{
  // set product count default = 0
  var numProduct = 0
  localStorage.setItem('numProduct', numProduct)
}

let money = Number(document.getElementsByClassName('bigmoney')[0].innerHTML)
let moneyLocal = localStorage.getItem('cartPrice')
if(moneyLocal) {
  money = moneyLocal
}else{
  money = 0;
  localStorage.setItem('cartPrice', money)
}

// let productsData = JSON.parse(localStorage.getItem(products))
// console.log(productsData)
// Math.round( *100)/100;

let addNumProduct = (price, name, img, company) => {
  // Increase products
  ++numProduct
  showNumProduct.innerHTML = numProduct
  localStorage.setItem('numProduct', numProduct)

  // Get quantity
  let quantity_prd = prompt('Xin vui lòng nhập số sản phẩm cần mua: ')
  let notNumberFormat = /[^0-9]/g;

  if(quantity_prd >= 50){
    alert('Kho hàng hiện còn 49 sản phẩm')
    quantity_prd = 49;
    alert('Đã thêm vào giỏ hàng của bạn!')
  }
  else if(quantity_prd.match(notNumberFormat)){
    alert("You typed the wrong input!")
    window.location = "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
  }
  else{
    alert('Đã thêm vào giỏ hàng của bạn!')
    ++numProduct;
    localStorage.setItem('numProduct', numProduct)
    showNumProduct.innerHTML = localStorage.getItem('numProduct');
  }


  // Get money
  let pay = document.getElementsByClassName('bigmoney')[0]
  let pay_2 = document.getElementsByClassName('money')[0]
  let pricing = document.getElementsByClassName('pricing')[0]
  let money = Number(document.getElementsByClassName('bigmoney')[0].innerHTML)
  localStorage.setItem('numProduct', numProduct)
  let formatted = new Intl.NumberFormat().format(money)     // Format the price
  
  money += Math.round(price * quantity_prd * 100) / 100
  pay.innerHTML = formatted
  pay_2.innerHTML = '$' + formatted
  pricing = price



  let product_info = {
    imageURL: `${img}`,
    name: `${name}`,
    company: `${company}`,
    priceOriginal: `${price}`,
    quantity_prd: `${quantity_prd}`,
    total: `${quantity_prd * price}`,
  }
  cart.push(`${JSON.stringify(product_info)}`)
  render();
  product_info = ''
  localStorage.setItem(storageKey, JSON.stringify(cart));


  // Insert table
  // let count_table = document.getElementsByClassName('count')[0]
  // count_table.insertAdjacentHTML('beforebegin', `
  //   <tr>
  //     <td class="text-center">
  //       <a href="#">
  //         <img 
  //           src="${img}"
  //           class="cart-image">
  //       </a>
  //     </td>
  //     <td class="text-left info-item">
  //       <a href="#" class="cart-name">
  //         ${name}
  //       </a>
  //       <p class="cart-quantity"> × ${quantity_prd}</p>
  //       <p class="cart-price">
  //         <span class="pricing">${'$' + price}</span>
  //       </p>
  //     </td>
  //     <td class="text-center cart-close">
  //       <button type="button" onclick="removeItem()" title="Remove" class="btn btn-danger btn-xs">
  //         <i class="fas fa-times-circle"></i>
  //       </button>
  //     </td>
  //   </tr>
  //   `
  // )

  // Cart table
  // let table_cart = document.getElementsByClassName('table-cart')[0]
  // table_cart.insertAdjacentHTML('beforeend', `
//   <tbody>
//   <tr>
//       <td class="text-center">
//           <img 
//               src="${img}"
//               class="cart-image">
//       </td>
//       <td class="text-center">
//           <a href="" class="cart-name">
//             ${name}
//           </a>
//           <br>
//           <small>${company}</small>
//       </td>
//       <td class="text-left">
//           <div class="input-group btn-block" style="max-width: 200px;">
//               <input type="text" value="${quantity_prd}" class="form-control">
//               <span class="input-group-btn">
//                   <button type="button" class="btn btn-danger" title="Remove">
//                       <i class="fa fa-times-circle"></i>
//                   </button>
//               </span>
//           </div>
//       </td>
//       <td class="text-right">
//           <span class="money">${price}</span>
//       </td>
//       <td class="text-right">
//           <span class="money">${money}</span>
//       </td>
//   </tr>
// </tbody>
  // `)


  // let product_info_str = JSON.stringify(product_info)
  // console.log(product_info)
  // console.log(product_info_str)

  // Cart changes 
  $('.table').removeClass('table-align');
  let hide = document.getElementsByClassName('checkout-lists')
  let show = document.getElementsByClassName('has-scroll')
  hide[0].className = hide[0].className.replace(" hide", " show")
  show[0].className = show[0].className.replace(" show", " hide")
};

showNumProduct.innerHTML = localStorage.getItem('numProduct');

function render(){
  let content = cart.map(function (img, name, quantity_prd, price) {
      return `
      <tr>
        <td class="text-center">
          <a href="#">
            <img 
              src="${img}"
              class="cart-image">
          </a>
        </td>
        <td class="text-left info-item">
          <a href="#" class="cart-name">
            ${name}
          </a>
          <p class="cart-quantity"> × ${quantity_prd}</p>
          <p class="cart-price">
            <span class="pricing">${'$' + price}</span>
          </p>
        </td>
        <td class="text-center cart-close">
          <button type="button" onclick="removeItem()" title="Remove" class="btn btn-danger btn-xs">
            <i class="fas fa-times-circle"></i>
          </button>
        </td>
      </tr>
      `;
  });
  document.getElementsByClassName('count')[0].innerHTML = content.join(' ');
}


// let item = document.querySelector('.product-container')
// let cartParse = JSON.parse(localStorage.getItem('productsCart'))

// //showPro
// let mainProd = document.getElementById('main-content');
// //fnc list
// function showList(productsData){

//     for(let prod of productsData){
//         let imageUrl = prod.imageUrl;
//         let name = prod.name;
//         let brand = prod.brand;
//         let price = prod.price;
//         let size = prod.size;
//         let sex = prod.sex;
//         let scent = prod.scent;
//         product(imageUrl,name, brand,price,size,sex,scent);
//     }
// }
// // console.log(showList);
// showList(productsData);
// // fnc prod

// console.log('cartParse', cartParse);
// item.addEventListener('click', function(event) {
//     let item = event.target.value;
//     console.log('Item: ', item);
//     cartParse.push(`${item}`);
//     localStorage.setItem('productsCart', JSON.stringify(cartParse));
//     let cartFood = document.querySelector('.item-choose')
//     cartFood.innerHTML += `<p class="product">${item}</p>`
// })


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
for(let i = 0; i < tg_1.length; i++){
  tg_1[i].addEventListener('click', toggle_01)
}
let tg_2 = document.getElementsByClassName('toggle-2')
for(let i = 0; i < tg_2.length; i++){
  tg_2[i].addEventListener('click', toggle_02)
}

// Toggle Currency
document.querySelector('.usd').addEventListener('click', function(){
  document.querySelector('.show').classList.remove('show')
})

// Scroll to top
let scrollTop = document.getElementById("back-top")
let scroll_1 = document.querySelector('.top-bar')
scrollTop.addEventListener('click', function(){
  scroll_1.scrollIntoView()
})

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
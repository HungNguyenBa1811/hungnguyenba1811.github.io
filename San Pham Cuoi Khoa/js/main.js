import {products_keyboard} from './data.js';

let productsCart = []
let productsCartString = JSON.stringify(productsCart);
localStorage.setItem('productsCart', productsCartString);

let productsString = JSON.stringify(products_keyboard)
console.log(productsString);
localStorage.setItem('products', productsString);

let productsData = localStorage.getItem('products')
console.log(JSON.parse(productsData))

let items = document.querySelectorAll('.product-container')
let x;
for (x of products_keyboard){
  items.innerHTML += `
        <div class="item">
            <div class="product-view">
                <img src= ${x.img} alt="No image" class="img-icon">
                <button class="btn" type="input" value= ${x.name}>Add to list</button>
            </div>
            <div class="content">
                <h3> ${x.name} </h3>
                <h4> ${x.company} </h4>
                <p> ${x.price} </p>
            </div>
        </div>
  `
}
import {products} from "./data.js";

let items = document.querySelector('.item-container')
let items_1 = document.querySelector('.item-container-1')
let content = () => `
        <div class="layout">

            <div class="company-name">
                <p>${x.company}</p>
            </div>
            <div class="prod-name">
                <p>${x.name}</p>
            </div>
            <div class="price">
                <span class="old-price">${x.oldPrice}</span>
                <br>
                <span class="sale-off">${x.saleOff + "OFF"}</span>    
            </div>
        </div>
        `
let x;
for (x of products){
    if(x.type === 'keyboard'){
        items.innerHTML += content();
    }else if(x.type === 'headphone'){
        items_1.innerHTML += content();
    }
    
}
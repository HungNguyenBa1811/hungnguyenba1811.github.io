import {products} from './data.js';

// let productsCart = []
// let productsCartString = JSON.stringify(productsCart);
// localStorage.setItem('productsCart', productsCartString);

// let keyboardString = JSON.stringify(products)
// localStorage.setItem('keyboard', keyboardString);

let items_keyboard = document.querySelector('.product-container-1')
let items_headphone = document.querySelector('.product-container-2')
let items_chair = document.querySelector('.product-container-3')

var keyboard_product = products.filter(function(keyboard){
    return keyboard.type == `keyboard`;
});

var headphone_product = products.filter(function(headphone){
    return headphone.type == `headphone`;
});

var chair_product = products.filter(function(chair){
    return chair.type == `chair`;
});

console.log(keyboard_product)
console.log(headphone_product)
console.log(chair_product)

function update_keyboardproduct(){
    items_keyboard.innerHTML = '';

    for(let keyboardYES of keyboard_product){
        items_keyboard.insertAdjacentHTML('beforeend', `
        <div class="owl-item active" style="width: 240px;">
            <div class="row_items">
                <div class="product-layout product-grid">
                    <div class="product-thumb transition">
                        <div class="image swatches-image-container">
                            <a href="#" class="">
                                <img 
                                    class="img-responsive img-default-image img-cate-1951471894587-1543060429425"
                                    src="${keyboardYES.img}">
                            </a>  
                            <div class="action-link"> 
                                <button class="btn-quickview quickview" type="button" title="Quick View">
                                    <i class="icon-eye"></i><span>Quick View</span>
                                </button>
                            </div>
                        </div>
                        <!-- image -->
                        <div class="product-inner">
                            <div class="product-caption swtch">
                                <div class="manu-rating">
                                    <p class="manufacture-product">
                                        <a>${keyboardYES.company}</a>
                                    </p>
                                </div>
                                <h4 class="product-name">
                                    ${keyboardYES.name}
                                </h4>
                                <div class="price-container">
                                    <p class="price">
                                        <span class="price-new" value=${'$' + Math.round((keyboardYES.oldPrice * (1 - keyboardYES.saleOffValue)) * 100) / 100}>${'$' + Math.round((keyboardYES.oldPrice * (1 - keyboardYES.saleOffValue)) * 100) / 100}</span>
                                        <span class="price-old">${'$' + keyboardYES.oldPrice}</span>
                                    </p>
                                    <div class="label-product l_sale">
                                        <span>${keyboardYES.saleOff + ' OFF'}</span>
                                    </div>
                                </div>
                                <!-- price-container -->
                            </div>
                            <div class="product-intro">
                                <div class="action-link2">
                                    <button class="btn-cart" type="button" title="" onclick="addNumProduct()" value=${keyboardYES.name}>
                                        <i class="far fa-shopping-cart"></i><span>Add to Cart</span>
                                    </button>
                                    <button class="btn-wishlist btn btn-default wishlist-btn" type="button">
                                        <i class="far fa-heart"></i><span>Add to Wish List</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    <!-- caption -->
                    </div>
                <!-- product-thumb -->
                </div>
                <!-- product-layout -->
            </div>
        </div>`
        )
    }
}
function update_headphoneproduct(){
    items_headphone.innerHTML = '';

    for(let headphoneYES of headphone_product){
        items_headphone.insertAdjacentHTML('beforeend', `
        <div class="owl-item active" style="width: 240px;">
            <div class="row_items">
                <div class="product-layout product-grid">
                    <div class="product-thumb transition">
                        <div class="image swatches-image-container">
                            <a href="#" class="">
                                <img 
                                    class="img-responsive img-default-image img-cate-1951471894587-1543060429425"
                                    src="${headphoneYES.img}">
                            </a>  
                            <div class="action-link"> 
                                <button class="btn-quickview quickview" type="button" title="Quick View">
                                    <i class="icon-eye"></i><span>Quick View</span>
                                </button>
                            </div>
                        </div>
                        <!-- image -->
                        <div class="product-inner">
                            <div class="product-caption swtch">
                                <div class="manu-rating">
                                    <p class="manufacture-product">
                                        <a>${headphoneYES.company}</a>
                                    </p>
                                </div>
                                <h4 class="product-name">
                                    ${headphoneYES.name}
                                </h4>
                                <div class="price-container">
                                    <p class="price">
                                        <span class="price-new" value=${'$' + Math.round((headphoneYES.oldPrice * (1 - headphoneYES.saleOffValue)) * 100) / 100}>${'$' + Math.round((headphoneYES.oldPrice * (1 - headphoneYES.saleOffValue)) * 100) / 100}</span>
                                        <span class="price-old">${'$' + headphoneYES.oldPrice}</span>
                                    </p>
                                    <div class="label-product l_sale">
                                        <span>${headphoneYES.saleOff + ' OFF'}</span>
                                    </div>
                                </div>
                                <!-- price-container -->
                            </div>
                            <div class="product-intro">
                                <div class="action-link2">
                                    <button class="btn-cart" type="button" title="" onclick="addNumProduct()" value=${headphoneYES.name}>
                                        <i class="far fa-shopping-cart"></i><span>Add to Cart</span>
                                    </button>
                                    <button class="btn-wishlist btn btn-default wishlist-btn" type="button">
                                        <i class="far fa-heart"></i><span>Add to Wish List</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    <!-- caption -->
                    </div>
                <!-- product-thumb -->
                </div>
                <!-- product-layout -->
            </div>
        </div>`
        )
    }
}
function update_chairproduct(){
    items_chair.innerHTML = '';

    for(let chairYES of chair_product){
        items_chair.insertAdjacentHTML('beforeend', `
        <div class="owl-item active" style="width: 240px;">
            <div class="row_items">
                <div class="product-layout product-grid">
                    <div class="product-thumb transition">
                        <div class="image swatches-image-container">
                            <a href="#" class="">
                                <img 
                                    class="img-responsive img-default-image img-cate-1951471894587-1543060429425"
                                    src="${chairYES.img}">
                            </a>  
                            <div class="action-link"> 
                                <button class="btn-quickview quickview" type="button" title="Quick View">
                                    <i class="icon-eye"></i><span>Quick View</span>
                                </button>
                            </div>
                        </div>
                        <!-- image -->
                        <div class="product-inner">
                            <div class="product-caption swtch">
                                <div class="manu-rating">
                                    <p class="manufacture-product">
                                        <a>${chairYES.company}</a>
                                    </p>
                                </div>
                                <h4 class="product-name">
                                    ${chairYES.name}
                                </h4>
                                <div class="price-container">
                                    <p class="price">
                                        <span class="price-new" value=${'$' + Math.round((chairYES.oldPrice * (1 - chairYES.saleOffValue)) * 100) / 100}>${'$' + Math.round((chairYES.oldPrice * (1 - chairYES.saleOffValue)) * 100) / 100}</span>
                                        <span class="price-old">${'$' + chairYES.oldPrice}</span>
                                    </p>
                                    <div class="label-product l_sale">
                                        <span>${chairYES.saleOff + ' OFF'}</span>
                                    </div>
                                </div>
                                <!-- price-container -->
                            </div>
                            <div class="product-intro">
                                <div class="action-link2">
                                    <button class="btn-cart" type="button" title="" onclick="addNumProduct()" value=${chairYES.name}>
                                        <i class="far fa-shopping-cart"></i><span>Add to Cart</span>
                                    </button>
                                    <button class="btn-wishlist btn btn-default wishlist-btn" type="button">
                                        <i class="far fa-heart"></i><span>Add to Wish List</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    <!-- caption -->
                    </div>
                <!-- product-thumb -->
                </div>
                <!-- product-layout -->
            </div>
        </div>`
        )
    }
}

update_keyboardproduct()
update_headphoneproduct()
update_chairproduct()
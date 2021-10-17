import {products} from './data.js';

let productsString = JSON.stringify(products)
localStorage.setItem('products', productsString);

let items_keyboard = document.querySelector('.product-container-1')
let items_headphone = document.querySelector('.product-container-2')
let items_chair = document.querySelector('.product-container-3')
let items_mouse = document.querySelector('.product-container-4')
let items_hardware = document.querySelector('.product-container-5')
let items_feature_1 = document.querySelector('.product-container-feature-1')
let items_feature_2 = document.querySelector('.product-container-feature-2')

var keyboard_product = products.filter(function(keyboard){
    return keyboard.type == `keyboard`;
});

var headphone_product = products.filter(function(headphone){
    return headphone.type == `headphone`;
});

var chair_product = products.filter(function(chair){
    return chair.type == `chair`;
});

var mouse_product = products.filter(function(mouse){
    return mouse.type == `mouse`;
});

var hardware_product = products.filter(function(hardware){
    return hardware.type == `hardware`;
});

var feature_product = products.filter(function(feature){
    return feature.special == `Best Selling`;
});

var cheap_product = products.filter(function(cheap){
    return cheap.special == `Cheapest`;
});

let content = (x) => `
    <div class="owl-item active" style="width: 240px;">
        <div class="row_items">
            <div class="product-layout product-grid">
                <div class="product-thumb transition">
                    <div class="image swatches-image-container">
                        <a href="#" class="">
                            <img 
                                class="img-responsive img-default-image"
                                src="${x.img}"
                                class="img-1">
                            <div class="img-2"></div>
                        </a>  
                        <div class="action-link"> 
                            <button class="btn-quickview quickview" type="button" title="Quick View" onclick="window.open('${x.img}', '_blank')">
                                <i class="fas fa-eye"></i><span>Quick View</span>
                            </button>
                        </div>
                    </div>
                    <!-- image -->
                    <div class="product-inner">
                        <div class="product-caption swtch">
                            <div class="manu-rating">
                                <p class="manufacture-product">
                                    <a>${x.company}</a>
                                </p>
                            </div>
                            <h4 class="product-name">
                                ${x.name}
                            </h4>
                            <div class="price-container">
                                <p class="price">
                                    <span class="price-new">$${Math.round((x.oldPrice * (1 - x.saleOffValue)) * 100) / 100}</span>
                                    <span class="price-old">$${x.oldPrice}</span>
                                </p>
                                <div class="label-product l_sale">
                                    <span>${x.saleOff + ' OFF'}</span>
                                </div>
                            </div>
                            <!-- price-container -->
                        </div>
                        <div class="product-intro">
                            <div class="action-link2">
                                <button class="btn-cart" type="button"  onclick='setData( "${x.name}", "${x.img}"," ${x.company}", ${Math.round((x.oldPrice * (1 - x.saleOffValue)) * 100) / 100}, "${x.id}") ' >
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

let update_keyboardproduct = () => {
    items_keyboard.innerHTML = '';

    for(let x of keyboard_product){
        items_keyboard.insertAdjacentHTML('beforeend', content(x))
    }
}

let update_headphoneproduct = () => {
    items_headphone.innerHTML = '';

    for(let x of headphone_product){
        items_headphone.insertAdjacentHTML('beforeend', content(x))
    }
}

let update_chairproduct = () => {
    items_chair.innerHTML = '';

    for(let x of chair_product){
        items_chair.insertAdjacentHTML('beforeend', content(x))
    }
}

let update_mouseproduct = () => {
    items_mouse.innerHTML = '';

    for(let x of mouse_product){
        items_mouse.insertAdjacentHTML('beforeend', content(x))
    }
}

let update_hardwareproduct = () => {
    items_hardware.innerHTML = '';

    for(let x of hardware_product){
        items_hardware.insertAdjacentHTML('beforeend', content(x))
    }
}

let update_featureproduct1 = () => {
    items_feature_1.innerHTML = '';

    for(let x of feature_product){
        items_feature_1.insertAdjacentHTML('beforeend', content(x))
    }
}

let update_featureproduct2 = () => {
    items_feature_2.innerHTML = '';

    for(let x of cheap_product){
        items_feature_2.insertAdjacentHTML('beforeend', content(x))
    }
}

update_keyboardproduct()
update_headphoneproduct()
update_chairproduct()
update_mouseproduct()
update_hardwareproduct()
update_featureproduct1()
update_featureproduct2()
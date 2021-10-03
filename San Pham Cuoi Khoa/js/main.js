import {products} from './data.js';

let productsCart = []
let productsCartString = JSON.stringify(productsCart);
localStorage.setItem('productsCart', productsCartString);

let keyboardString = JSON.stringify(products)
localStorage.setItem('keyboard', keyboardString);

let items_keyboard = document.querySelector('.product-container-1')
let items_headphone = document.querySelector('.product-container-2')
let x;
for (x of products_keyboard){
    if(x.type === 'keyboard'){
        items_keyboard.innerHTML += `
        <div class="owl-item active" style="width: 240px;">
            <div class="row_items">
                <div class="product-layout product-grid">
                    <div class="product-thumb transition">
                        <div class="image swatches-image-container">
                            <a href="#" class="">
                                <img 
                                    class="img-responsive img-default-image img-cate-1951471894587-1543060429425"
                                    src="${x.img}">
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
                                        <a>${x.company}</a>
                                    </p>
                                </div>
                                <h4 class="product-name">
                                    ${x.name}
                                </h4>
                                <div class="price-container">
                                    <p class="price">
                                        <span class="price-new">${'$' + Math.round((x.oldPrice * (1 - x.saleOffValue)) * 100) / 100}</span>
                                        <span class="price-old">${'$' + x.oldPrice}</span>
                                    </p>
                                    <div class="label-product l_sale">
                                        <span>${x.saleOff + ' OFF'}</span>
                                    </div>
                                </div>
                                <!-- price-container -->
                            </div>
                            <div class="product-intro">
                                <div class="action-link2">
                                    <button class="btn-cart add-to-cart" type="button" title="" onclick="" value='${x.name}'>
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
        </div>
      `
    }else if(x.type === 'headphone'){
        items_headphone.innerHTML += `
        <div class="owl-item active" style="width: 240px;">
            <div class="row_items">
                <div class="product-layout product-grid">
                    <div class="product-thumb transition">
                        <div class="image swatches-image-container">
                            <a href="#" class="">
                                <img 
                                    class="img-responsive img-default-image img-cate-1951471894587-1543060429425"
                                    src="${x.img}">
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
                                        <a>${x.company}</a>
                                    </p>
                                </div>
                                <h4 class="product-name">
                                    ${x.name}
                                </h4>
                                <div class="price-container">
                                    <p class="price">
                                        <span class="price-new">${'$' + Math.round((x.oldPrice * (1 - x.saleOffValue)) * 100) / 100}</span>
                                        <span class="price-old">${'$' + x.oldPrice}</span>
                                    </p>
                                    <div class="label-product l_sale">
                                        <span>${x.saleOff + ' OFF'}</span>
                                    </div>
                                </div>
                                <!-- price-container -->
                            </div>
                            <div class="product-intro">
                                <div class="action-link2">
                                    <button class="btn-cart add-to-cart" type="button" title="" onclick="" value='${x.name}'>
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
        </div>
        `
    }
}
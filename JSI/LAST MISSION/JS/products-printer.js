import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getFirestore, getDocs , collection } from 'https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration

const firebaseConfig = {
    apiKey: "AIzaSyApWwoJ3mGbwXJkh4eiiIi_DC-zpBUzRm8",
    authDomain: "organic-store-2dff9.firebaseapp.com",
    projectId: "organic-store-2dff9",
    storageBucket: "organic-store-2dff9.appspot.com",
    messagingSenderId: "1079383200282",
    appId: "1:1079383200282:web:2a370bcfa756b18819b7a3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();

let dataProduct = localStorage.getItem('Products-list')

let items_tab_1 = document.querySelector(".pd-tab-1")
let items_tab_2 = document.querySelector(".pd-tab-2")
let items_tab_3 = document.querySelector(".pd-tab-3")

let HTMLContent_Grid_1 = (x) =>
`
    <div class="item pd_t1">
        <div class="products-grid">
            <div class="product-item">
                <div class="product-item-info">	
                    <div class=" product-item-images">
                        <span class="hot-sale">${x.saleOff} off</span>
                        <a href="" class="product-item-photo">
                            
                            <span class="product-image-container" style="width:198px;">
                                <span class="product-image-wrapper" style="padding-bottom: 100%;">
                                    <img
                                        class="product-image-photo"
                                        src="${x.imgUrl}"
                                        width="150"
                                        height="150"
                                        alt="">
                                </span>
                            </span>

                        </a>
                    </div>
                    <div class="product-item-details">

                        <strong class="product-item-name">
                            <a href="" class="product-item-link">
                                ${x.name}
                            </a>
                        </strong>

                        <div class="price-box price-final_price">

                            <span class="special-price">

                                <span class="price-container price-final_price tax weee">
                                    <span class="price-label">Special Price</span>
                                    <span class="price-wrapper">
                                        <span class="price">$${Math.round((x.oldPrice * (1 - x.saleOffValue)) * 100) / 100}</span>
                                    </span>
                                </span>
                                    
                            </span>
                                    
                            <span class="old-price">
                                    
                                <span class="price-container price-final_price tax weee">
                                    <span class="price-label">Regular Price</span>
                                    <span class="price-wrapper">
                                        <span class="price">$${x.oldPrice}</span>
                                    </span>
                                </span>

                            </span>
                        
                        </div>

                        <div class="product-item-actions">

                            <div class="add-to-links-secondary">

                                <a href="#" class="action wishlist" onclick="window.open('${x.imgUrl}', '_blank')">
                                </a>

                            </div>
                            <div class="add-to-cart-primary">
                                <button class="action tocart primary" id="${x.id}" type="button" title="Add to Cart">
                                    <span>Add to Cart</span>
                                </button>
                            </div>	

                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
`
console.log("hello")



if(dataProduct){
    var products_list = JSON.parse(dataProduct);
    console.log("Have products")
}else{
    let products = []
    const querySnapshot = await getDocs(collection(db, "products-list"));
    querySnapshot.forEach((doc) => {
        products.push(doc.data())
    });
    const products_fetch = products.sort( (a,b) => a["index"] - b["index"] )
    const productsString = JSON.stringify(products_fetch)

    localStorage.setItem('Products-list', productsString);
    dataProduct = localStorage.getItem('Products-list')
    var products_list = JSON.parse(dataProduct);

    console.log("No products, setting up...")
}
console.log(products_list)

var products_tab_1 = products_list.filter( (organic) => organic.special == `Tab_1` );
var products_tab_2 = products_list.filter( (organic) => organic.special == `Tab_2` );
var products_tab_3 = products_list.filter( (organic) => organic.special == `Tab_3` );
var products_fruit_1 = products_list.filter( (organic) => organic.special == `Fruit_1` );
var products_fruit_2 = products_list.filter( (organic) => organic.special == `Fruit_2` );
var products_spice = products_list.filter( (organic) => organic.special == `Spicy` )

console.log(products_fruit_1)

var resetCarousel = (tabs, class_tab) => {
    tabs.innerHTML = '';
    let owl = $(class_tab)
    owl.trigger('destroy.owl.carousel', [0]);
}
var setCarousel = (class_carousel,boolean) => {
    $(class_carousel).owlCarousel({
        loop: true,
        items: 4,
        nav: boolean,
        dots: false,
        responsive:{
            0:{
                items: 1
            },
            1000:{
                items: 4
            }
        }
    })
}

let update_tab_1 = () => {
    resetCarousel(items_tab_1, ".pd-tab-1")

    for(let x of products_tab_1){
        items_tab_1.insertAdjacentHTML('beforeend', HTMLContent_Grid_1(x))
    }
    setCarousel(".pd-tab-1", true)

}
let update_tab_2 = () => {
    resetCarousel(items_tab_1, ".pd-tab-1")

    for(let x of products_tab_2){
        items_tab_1.insertAdjacentHTML('beforeend', HTMLContent_Grid_1(x))
    }
    setCarousel(".pd-tab-1", true)

}
let update_tab_3 = () => {

    resetCarousel(items_tab_1, ".pd-tab-1")

    for(let x of products_tab_3){
        items_tab_1.insertAdjacentHTML('beforeend', HTMLContent_Grid_1(x))
    }
    setCarousel(".pd-tab-1", true)

}
let update_fruit_1 = () => {
    for(let x of products_fruit_1){
        items_tab_2.insertAdjacentHTML('beforeend', HTMLContent_Grid_1(x))
    }
    setCarousel(".pd-tab-2", false)
}
let update_spicy = () => {
    for(let x of products_spice){
        items_tab_3.insertAdjacentHTML('beforeend', HTMLContent_Grid_1(x))
    }
    setCarousel(".pd-tab-3", false)
}
update_tab_1()
update_fruit_1()
update_spicy()

document.querySelector("#tab_1_1").addEventListener("click", update_tab_1)
document.querySelector("#tab_1_2").addEventListener("click", update_tab_2)
document.querySelector("#tab_1_3").addEventListener("click", update_tab_3)

// Slideshow
$(".slideshow").owlCarousel({
    autoplay: 3000,
    loop: true,
    items: 1,
    dots: true,
    nav: false,
})
$(".ptowl").owlCarousel({
    loop: true,
    nav: false,
    dots: false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
});
// $(".pd-tab-1").owlCarousel({
//     loop: true,
//     
//     items: 4,
//     nav: true,
//     dots: false,
//     responsive:{
//         0:{
//             items: 1
//         },
//         600:{
//             items: 2
//         },
//         1000:{
//             items: 4
//         }
//     }
// })
console.log(document.querySelectorAll(".owl-item:not(.cloned) .pd_t1"))
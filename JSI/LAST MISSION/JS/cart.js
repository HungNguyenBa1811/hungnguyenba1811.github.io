// let cart;
// let dataMoney = localStorage.getItem('Total')

// if (dataMoney) {
//     var money = dataMoney
// } else {
//     var money = 0
// }

// Get DATA
// function getData() {
//     let userData = JSON.parse(localStorage.getItem("Current Data"))
//     // let localKeys = Object.keys(localStorage);
//     // if (localKeys.indexOf("Cart") != -1) {
//     //     cart = JSON.parse(localStorage.getItem("Cart"));
//     //     let empty = document.querySelector(".has-scroll");
//     //     empty.className = empty.className.replace("show", " hide");
//     // } else {
//     //     cart = [];
//     // }
// }

// Set DATA
var cart;
let dataCart = localStorage.getItem("Cart")
if(dataCart){
    cart = JSON.parse(dataCart)
} else {
    cart = []
}

let addCartBtn = document.querySelectorAll(".tocart");
let deleteBtn = document.querySelectorAll(".delete");

// ADD DATA
for(let i = 0, j = addCartBtn.length; i<j ; i++){
    addCartBtn[i].addEventListener("click", () => {
        alert('Added ' + addCartBtn[i].title + ' to your cart')
        let products = JSON.parse(localStorage.getItem('Products-list'))
        for(let x = 0, y = products.length; x<y ;x++){
            if(products[x]["id"] === addCartBtn[i].id){
                var push_item = {
                    name: products[x].name,
                    imgUrl: products[x].imgUrl,
                    price: Math.round(products[x].oldPrice*(1-products[x].saleOffValue) * 100) / 100,
                    id: products[x].id,
                    quantity: 1
                }
                if(cart.length > 0){
                    for(let num = 0; num < cart.length; num++){
                        if(push_item.name === cart[num]["name"]){
                            push_item.quantity = cart[num].quantity + 1;
                            cart.splice(num,1)
                        }
                    }
                    cart.push(push_item)
                    localStorage.setItem("Cart",JSON.stringify(cart))
                } else {
                    cart.push(push_item)
                    localStorage.setItem("Cart",JSON.stringify(cart))
                }
                break;
            }
        }
        render()
    })
}

// Delete DATA
function removeItem(Id) {
    for (let i = 0; i < cart.length; i++) {
        if (cart[i].id === `${Id}`) {
            cart.splice(i, 1);
        }
    }
    localStorage.setItem("Cart", JSON.stringify(cart))
    render();
}

// RENDER
function render(){

    let money = 0
    document.querySelector(".counter-number").innerHTML = cart.length
    document.querySelector(".count").innerHTML = cart.length
    document.querySelector("#mini-cart").innerHTML = ""

    for(products of cart){
        money += products.price * products.quantity
        document.querySelector("#mini-cart").innerHTML += `
            <li class="item product product-item" id="${products.id}">
                <div class="product">

                    <a class="product-item-photo" href="#" title="${products.name}">
                        <span class="product-image-container" style="width: 76px;">
                            <span class="product-image-wrapper" style="padding-bottom: 100%;">
                                <img
                                    class="product-image-photo"
                                    src="${products.imgUrl}"
                                    alt="${products.name}"
                                    style="width: 76px; height: 76px;">
                            </span>
                        </span>
                    </a>

                    <div class="product-item-details">
                        <strong class="product-item-name">
                            <a href="#">${products.name}</a>
                        </strong>
                        <div class="product-item-pricing">
                            <div class="price-container">
                                <span class="price-wrapper">
                                    <span class="price-excluding-tax">
                                         <span class="minicart-price">
                                            <span class="price">$${products.price}</span>
                                        </span>
                                    </span>
                                </span>
                            </div>
    
                            <div class="details-qty qty">
                                <label class="label">Qty</label>
                                <input type="number" size="4" class="item-qty cart-item-qty" maxlength="12" value="${products.quantity}" disabled="disabled">
                            </div>
                        </div>

                        <div class="product actions">
                            <div class="primary">
                                <a class="action edit" href="${products.imgUrl}" title="View item">
                                    <span>View</span>
                                </a>
                            </div>
                            <div class="secondary">
                                <a href="#" class="action delete" type="button" onclick="removeItem( '${products.id}' )" title="Remove item">
                                    <span>Remove</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </li>
        `
    }

    document.querySelector(".price").innerHTML = `$${Math.round(money * 100) / 100}`

    if(document.querySelector(".cart.item")){
        for(products of cart){
            document.querySelector(".cart.item").insertAdjacentHTML("beforeend", `
                <tr class="item-info">
                    <td class="col item">
                        <a href="#" title="" class="product-item-photo">

                            <span class="product-image-container" style="width:165px;">
                                <span class="product-image-wrapper"
                                    style="padding-bottom: 100%;">
                                    <img
                                        class="product-image-photo"
                                        src="${products.imgUrl}"
                                        width="165"
                                        height="165"
                                        alt="${products.name}">
                                </span>
                            </span>

                        </a>
                        <div class="product-item-details">
                            <strong class="product-item-name">
                                <a href="#">${products.name}</a>
                            </strong>
                        </div>
                    </td>

                    <td class="col price">

                        <span class="price-excluding-tax">
                            <span class="cart-price">
                                <span class="price">${products.price}</span>
                            </span>
                        </span>
                    </td>

                    <td class="col qty">
                        <div class="field qty">
                            <label class="label" for="qty-${products.id}">
                                <span>Qty</span>
                            </label>
                            <div class="control qty">
                                <input id="" name="qty-${products.id}" value="${products.quantity}" type="number" size="4" title="Qty" class="input-text qty" maxlength="12" disabled="disabled">
                            </div>
                        </div>
                    </td>

                    <td class="col subtotal">

                        <span class="price-excluding-tax">
                            <span class="cart-price">
                                <span class="price">$${Math.round(products.price * products.quantity * 100) / 100}</span>
                            </span>
                        </span>

                    </td>
                </tr>
                <tr class="item-actions">
                    <td colspan="100">
                        <div class="actions-toolbar">
                            <a href="#" title="Remove item" class="action action-delete">
                                <span> Remove item </span>
                            </a>
                        </div>
                    </td>
                </tr>
            `) 
        }
    }

    if(document.querySelector(".price-total")){
        document.querySelector(".price-total").innerHTML = '$' + money
        document.querySelector(".price-tax").innerHTML = '$' + Math.round(money * 11) / 100
        document.querySelector(".price-final").innerHTML = '$' + Math.round(money * 111) / 100
    }
}
render()
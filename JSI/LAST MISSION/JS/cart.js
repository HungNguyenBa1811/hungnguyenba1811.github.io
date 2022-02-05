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
let deleteBtn = document.querySelectorAll(".delete")

for(let i = 0, j = addCartBtn.length; i<j ; i++){
    addCartBtn[i].addEventListener("click", () => {
        alert(addCartBtn[i].id)
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


// function setData(name, imageURL, company, price, id) {
//     let item = {
//         name: name,
//         image: imageURL,
//         company: company,
//         price: price,
//         id: id,
//     };
//     money += Math.round(Number(price) * 100) / 100; // Money Increasing
//     showMoney.innerHTML = Math.round(money * 100) / 100; // push money
//     cartShowMoney.innerHTML = Math.round(money * 100) / 100; // push cart money
//     cart.push(item); // push item
//     alert('Đã thêm vào giỏ hàng!')

//     localStorage.setItem("Total", Math.round(money * 100) / 100);
//     localStorage.setItem("Cart", JSON.stringify(cart));

//     render();
// }

// // Delete DATA
function removeItem(Id) {
    for (let i in cart) {
        if (cart[i].id === Id) {
            {
                cart.splice(i, 1);
                break;
            }
        }
    }
    render();
}
// // Render
// function render() {
//     getData();
//     document.querySelector(".cart-item-count").innerHTML = cart.length;
//     document.querySelector(".show-cart-item").innerHTML = "";
//     for (let x of cart) {
//         document.querySelector(".show-cart-item").innerHTML += `
//         <tr>
//             <td class="text-center">
//                 <a href="#">
//                 <img 
//                     src="${x.image}"
//                     class="cart-image">
//                 </a>
//             </td>
//             <td class="text-left info-item">
//                 <a href="#" class="cart-name">
//                 ${x.name}
//                 </a>
//                 <p class="cart-quantity"> × 1</p>
//                 <p class="cart-price">
//                 <span class="pricing">${"$" + x.price}</span>
//                 </p>
//             </td>
//             <td class="text-center cart-close">
//                 <button type="button" onclick ='removeItem("${x.id}")' title="Remove" class="btn btn-danger btn-xs">
//                 <i class="fas fa-times-circle"></i>
//                 </button>
//             </td>
//         </tr>
//         `;
//         document.querySelector(".table-cart").innerHTML += `
//             <tr>
//                 <td class="text-center">
//                     <img 
//                         src="${x.image}"
//                         class="cart-image">
//                 </td>
//                 <td class="text-center">
//                     <a href="" class="cart-name">
//                         ${x.name}
//                     </a>
//                     <br>
//                     <small>${x.company}</small>
//                 </td>
//                 <td class="text-left">
//                     <div class="input-group btn-block" style="max-width: 200px;">
//                         <input type="text" value="1" class="form-control">
//                         <span class="input-group-btn">
//                         </span>
//                     </div>
//                 </td>
//                 <td class="text-right">
//                     <span class="money">${x.price}</span>
//                 </td>
//                 <td class="text-right">
//                     <span class="money">${x.price}</span>
//                 </td>
//             </tr>
//             `
//     }
// }
// render();
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
                                <input type="number" size="4" class="item-qty cart-item-qty" maxlength="12" value="${products.quantity}">
                            </div>
                        </div>

                        <div class="product actions">
                            <div class="primary">
                                <a class="action edit" href="#" title="Edit item">
                                    <span>Edit</span>
                                </a>
                            </div>
                            <div class="secondary">
                                <a href="#" class="action delete" type="button" onclick="removeItem("${products.id}")" title="Remove item">
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
}
render()
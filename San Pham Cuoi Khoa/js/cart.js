let cart
// Get DATA
function getData() {
    let localKeys = Object.keys(localStorage)
    if (localKeys.indexOf('Cart') != -1) {
        cart = JSON.parse(localStorage.getItem('Cart'))
    } else {
        cart = []
    }
}

// Set DATA
let addCartBtn = document.querySelectorAll('.btn-cart')
function setData(name, imageURL, company, price) {
    let item = {
        name: name,
        image: imageURL,
        company: company,
        price: price,
    }
    cart.push(item) // push item
    localStorage.setItem('Cart', JSON.stringify(cart))
    let empty = document.querySelector('.has-scroll')
    empty.className = empty.className.replace("show", " hide")
    render()
}
// Delete DATA
function removeItem(name) {
    for (let i in cart) {
        if (cart[i].name == name) {
            {
                cart.splice(i, 1)
                break
            }
        }
        localStorage.setItem('Cart', JSON.stringify(cart))
        render()
    }
}
// Render
function render() {
    getData()
    document.querySelector('.cart-item-count').innerHTML = cart.length
    document.querySelector('.show-cart-item').innerHTML = "";
    // for (let x of cart) {
    //     document.querySelector('.show-cart-item').innerHTML +=
    //     `
    //     <div class="cart-item">
    //         <div class="cart-item-preview">
    //             <img src="${x.image}" class="cart-image">
    //         </div>
    //         <div class="cart-item-name">
    //             ${x.name}
    //         </div>
    //         <div class="cart-item-price">
    //            ${x.price}
    //         </div>
    //         <div style="cursor:pointer" onclick ='removeItem("${x.name}")'>
    //             <i class="fas fa-times-circle"></i>
    //         </div>
    //     </div>`
    // }
    for (let x of cart) {
        document.querySelector('.show-cart-item').innerHTML += `
        <tr>
            <td class="text-center">
                <a href="#">
                <img 
                    src="${x.image}"
                    class="cart-image">
                </a>
            </td>
            <td class="text-left info-item">
                <a href="#" class="cart-name">
                ${x.name}
                </a>
                <p class="cart-quantity"> × 1</p>
                <p class="cart-price">
                <span class="pricing">${'$' + x.price}</span>
                </p>
            </td>
            <td class="text-center cart-close">
                <button type="button" onclick ='removeItem("${x.name}")' title="Remove" class="btn btn-danger btn-xs">
                <i class="fas fa-times-circle"></i>
                </button>
            </td>
        </tr>
        `
    }
}
render()

// TOGGLE cart
// if(localStorage.getItem('Cart').length > 0){



// }
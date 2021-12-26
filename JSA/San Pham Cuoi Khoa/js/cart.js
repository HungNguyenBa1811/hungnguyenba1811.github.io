let cart;
let showMoney = document.querySelector(".bigmoney")
let cartShowMoney = document.querySelector(".money")
let cartShowMoney2 = document.getElementsByClassName("money")[1]
let dataMoney = localStorage.getItem('Total')

if (dataMoney) {
    var money = dataMoney
    cartShowMoney.innerHTML = dataMoney
    cartShowMoney2.innerHTML = dataMoney
    showMoney.innerHTML = money
} else {
    var money = 0
    cartShowMoney.innerHTML = '0.00'
}

console.log(cartShowMoney.innerHTML)
// Get DATA
function getData() {
    let localKeys = Object.keys(localStorage);
    if (localKeys.indexOf("Cart") != -1) {
        cart = JSON.parse(localStorage.getItem("Cart"));
        let empty = document.querySelector(".has-scroll");
        empty.className = empty.className.replace("show", " hide");
    } else {
        cart = [];
    }
}

// Set DATA
let addCartBtn = document.querySelectorAll(".btn-cart");
function setData(name, imageURL, company, price, id) {
    let item = {
        name: name,
        image: imageURL,
        company: company,
        price: price,
        id: id,
    };
    money += Math.round(Number(price) * 100) / 100; // Money Increasing
    showMoney.innerHTML = Math.round(money * 100) / 100; // push money
    cartShowMoney.innerHTML = Math.round(money * 100) / 100; // push cart money
    cart.push(item); // push item
    alert('Đã thêm vào giỏ hàng!')

    localStorage.setItem("Total", Math.round(money * 100) / 100);
    localStorage.setItem("Cart", JSON.stringify(cart));

    render();
}

// Delete DATA
function removeItem(id) {
    for (let i in cart) {
        if (cart[i].id == id) {
            money -= cart[i].price
            {
                cart.splice(i, 1);
                break;
            }
        }
        console.log("Con lai: ", money)
        showMoney.innerHTML = Math.round(money * 100) / 100;
        cartShowMoney.innerHTML = Math.round(money * 100) / 100;
        cartShowMoney2.innerHTML = Math.round(money * 100) / 100;
        localStorage.setItem("Total", Math.round(money * 100) / 100);
        localStorage.setItem("Cart", JSON.stringify(cart));
        render();
    }
}
// Render
function render() {
    getData();
    document.querySelector(".cart-item-count").innerHTML = cart.length;
    document.querySelector(".show-cart-item").innerHTML = "";
    for (let x of cart) {
        document.querySelector(".show-cart-item").innerHTML += `
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
                <span class="pricing">${"$" + x.price}</span>
                </p>
            </td>
            <td class="text-center cart-close">
                <button type="button" onclick ='removeItem("${x.id}")' title="Remove" class="btn btn-danger btn-xs">
                <i class="fas fa-times-circle"></i>
                </button>
            </td>
        </tr>
        `;
        document.querySelector(".table-cart").innerHTML += `
            <tr>
                <td class="text-center">
                    <img 
                        src="${x.image}"
                        class="cart-image">
                </td>
                <td class="text-center">
                    <a href="" class="cart-name">
                        ${x.name}
                    </a>
                    <br>
                    <small>${x.company}</small>
                </td>
                <td class="text-left">
                    <div class="input-group btn-block" style="max-width: 200px;">
                        <input type="text" value="1" class="form-control">
                        <span class="input-group-btn">
                        </span>
                    </div>
                </td>
                <td class="text-right">
                    <span class="money">${x.price}</span>
                </td>
                <td class="text-right">
                    <span class="money">${x.price}</span>
                </td>
            </tr>
            `
    }
}
render();
let item = document.querySelector('.items')
let cart = document.querySelector('.container-right')
let cartParse = JSON.parse(localStorage.getItem('productsCart'))


console.log('cartParse', cartParse);
item.addEventListener('click', function(event) {
    alert(event.target.value);
    let item1 = event.target.value;
    console.log('item: ', item1);
    cartParse.push(`${item1.id}`);
    localStorage.setItem('productsCart', JSON.stringify(cartParse));
    cart.innerHTML += `<p>${item1}</p>`
})
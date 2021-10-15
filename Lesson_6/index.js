let item = document.querySelector('.items')
let cart = document.querySelector('.container-right')
let cartParse = JSON.parse(localStorage.getItem('productsCart'))


console.log('cartParse', cartParse);
item.addEventListener('click', function(event) {
    alert(event.target.value);
    let item = event.target.value;
    console.log('Item: ', item);
    cartParse.push(`${item}`);
    localStorage.setItem('productsCart', JSON.stringify(cartParse));
    let cartFood = document.querySelector('.food-choose')
    cartFood.innerHTML += `<p class="foody"> > ${item}</p>`
})

function resetCart() {
    localStorage.removeItem('productsCart')
    document.querySelector('.food-choose').innerHTML = ''
}
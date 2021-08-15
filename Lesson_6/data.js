let products = [

    {
        name: 'Pho',
        title: 'Mon ngon Ha Noi',
        img: './img/food.jpg'
    },

    {
        name: 'Bun-rieu',
        title: 'Mon ngon Ha Noi',
        img: './img/food.jpg'
    },

    {
        name: 'Bun-bo-Hue',
        title: 'Mon ngon Ha Noi',
        img: './img/food.jpg'
    },

    {
        name: 'Bun-oc',
        title: 'Mon ngon Ha Noi',
        img: './img/food.jpg'
    },

    {
        name: 'Banh-cuon',
        title: 'Mon ngon Ha Noi',
        img: './img/food.jpg'
    },

    {
        name: 'Banh-mi',
        title: 'Mon ngon Ha Noi',
        img: './img/food.jpg'
    },

];

// localStorage

let productsCart = []
let productsCartString = JSON.stringify(productsCart);
localStorage.setItem('productsCart', productsCartString);

let productsString = JSON.stringify(products)
console.log(productsString);
localStorage.setItem('products', productsString);

let productsData = localStorage.getItem('products')
console.log(JSON.parse(productsData))


let items = document.querySelector('.items')
for (product of products){
    items.innerHTML += `
        <div class="item">
            <div class="product-view">
                <img src= ${product.img} alt="No image" class="img-icon">
                <button class="btn" type="input" value= ${product.name}>Add to list</button>
            </div>
            <div class="content">
                <h3> ${product.name} </h3>
                <p> ${product.title} </p>
            </div>
        </div>
    `
}
let products = [
    {
        name: 'San Pham 1',
        price: 15000,
    },
    {
        name: 'San Pham 2',
        price: 12000,
    },
    {
        name: 'San Pham 3',
        price: 11000,
    },
    {
        name: 'San Pham 4',
        price: 13000,
    },
    {
        name: 'San Pham 5',
        price: 14000,
    }
]

// show
let prod = document.querySelector("#products")

function showProd(){
    prod.innerHTML = ''
    for(let i = 0; i < products.length; i++){
        prod.insertAdjacentHTML('beforeend', `
            <div>
                <b>${products[i].name}</b><br>
                <span>${products[i].price} VND</span>
            </div>
            <hr>
        `)
    }
}
showProd()

// Search
let input_search = document.querySelector("#input")

function getInputValue(){
    prod.innerHTML = ""
    let inputValue = input_search.value.toLowerCase()
    for(let i = 0; i < products.length; i++){
        let x = products[i].name.toLowerCase()
        if(x == inputValue){
            prod.insertAdjacentHTML("beforeend",`
                <div>
                    <b>${products[i].name}</b> <br>
                    <span>${products[i].price}</span>
                </div>
            `)
            result(products[i].name)
        }
    }
}

let products_list = document.querySelector("#products_list")
function result(name) {
    products_list.insertAdjacentHTML('beforeend',
    `
        <option value="${name}"></option>
    `
    )
}
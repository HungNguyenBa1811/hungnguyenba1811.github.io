let list_of_products = localStorage.getItem("Products-list")
if(list_of_products){
    let list_of_product = JSON.parse(list_of_products)

    let prod = document.querySelector(".results-list")

    let showProd = () => {
        prod.innerHTML = ''
        for(let i = 0; i < list_of_product.length; i++){
            prod.insertAdjacentHTML('beforeend', `
                <div style="z-index: 9999;">
                    <b>${list_of_product[i].name}</b><br>
                    <span> Price: $${Math.round( list_of_product[i].oldPrice * (1 - list_of_product[i].saleOffValue) * 100)/100}</span>
                </div>
                <hr>
            `)
        }
    }
    showProd()

    let input_search = document.querySelector("#search")
    input_search.addEventListener("click", () => {
        document.querySelector(".results-list").classList.toggle("show")
    })

    let searchBtn = document.querySelector("#searchBtn")
    searchBtn.addEventListener("click", () => {
        prod.innerHTML = ""
        let inputValue = input_search.value.toLowerCase()
        for(let i = 0; i < list_of_product.length; i++){
            let name = list_of_product[i].name.toLowerCase()
            if(name == inputValue){
                prod.insertAdjacentHTML("beforeend",`
                    <div>
                        <b>${list_of_product[i].name}</b> <br>
                        <span> Price: $${Math.round( list_of_product[i].oldPrice * (1 - list_of_product[i].saleOffValue) * 100)/100}</span>
                    </div>
                `)
            }
        }
    })
} else {
    alert("Rebuffing")
    setTimeout( () => window.location.reload() , 6420)
}
const style = `
    .someElementStyling{}
`

class ItemContainer extends HTMLElement {
    constructor(){
        super()
        this._shadowDom = this.attachShadow({ mode: 'open' })
        this.imgSrc = this.getAttribute('imgSrc')
        this.productName = this.getAttribute('productName')
        this.productPrice = this.getAttribute('productPrice')
        this.productSaleOff = this.getAttribute('SaleOff')
        this._shadowDom.innerHTML = `
            ${style}
            <div class="container">
                <div class="img-container">
                    <img src="${this.imgSrc}">
                </div>
                <div class="description">
                    <div class="product-name">
                        <h5>${this.productName}</h5>
                    </div>
                    <div class="product-price">
                        <span class="money">${this.productPrice}</span>
                        <span class="sale-off">${this.productSaleOff}</span>
                    </div>
                </div>
            </div>
        `
    }
}
window.customElements.define('item-container', ItemContainer)
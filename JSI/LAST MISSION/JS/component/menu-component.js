class MenuDropdown extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallBack() {
        this._shadowDOM = this.attachShadow({ mode: 'open' })
        this.parentDivId = this.getAttribute('parentDivId')
        this.parentDivClass = this.getAttribute('parentDivClass')
        this.category = this.getAttribute('category')
        this.popUpId = this.getAttribute('popUpId')
        this.blockId = this.getAttribute('blockId')
        this._shadowDOM.innerHTML = ``
    }
}
window.customElements.define('menu-dropdown', MenuDropdown)
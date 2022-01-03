class PopUpItemColumn extends HTMLElement {
    constructor(){
        super();
    }
    connectedCallBack(){
        this._shadowDOM = this.attachShadow({ mode: 'open' })
        this.NoOfColumn = this.getAttribute('NoOfColumn')
        this.mainItemName = this.getAttribute('mainItemName')
        this.urlMainItem = this.getAttribute('urlMainItem')
        this.urlSubItem_1 = this.getAttribute('urlSubItem_1')
        this.urlSubItem_2 = this.getAttribute('urlSubItem_2')
        this.urlSubItem_3 = this.getAttribute('urlSubItem_3')
        this.urlSubItem_4 = this.getAttribute('urlSubItem_4')
        this.urlSubItem_5 = this.getAttribute('urlSubItem_5')
        this.subItemName_1 = this.getAttribute('subItemName_1')
        this.subItemName_2 = this.getAttribute('subItemName_2')
        this.subItemName_3 = this.getAttribute('subItemName_3')
        this.subItemName_4 = this.getAttribute('subItemName_4')
        this.subItemName_5 = this.getAttribute('subItemName_5')
        this._shadowDOM.innerHTML = `
            <div class="column ${this.NoOfColumn}">
                <div class="itemMenu level1">
                    <a class="itemMenuName level1" href="${this.urlMainItem}">
                        <span>${this.mainItemName}</span>
                    </a>
                    <div class="itemSubMenu level1">
                        <div class="itemMenu level2">
                            <a class="itemMenuName level2" href="${this.urlSubItem_1}">
                                <span>${this.subItemName_1}</span>
                            </a>
                            <a class="itemMenuName level2" href="${this.urlSubItem_2}">
                                <span>${this.subItemName_2}</span>
                            </a>
                            <a class="itemMenuName level2" href="${this.urlSubItem_3}">
                                <span>${this.subItemName_3}</span>
                            </a>
                            <a class="itemMenuName level2" href="${this.urlSubItem_4}">
                                <span>${this.subItemName_4}</span>
                            </a>
                            <a class="itemMenuName level2" href="${this.urlSubItem_5}">
                                <span>${this.subItemName_5}</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        `
    }
}
window.customElements.define('Pop-up-column', PopUpItemColumn)
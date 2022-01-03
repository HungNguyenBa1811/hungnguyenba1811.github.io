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
        this._shadowDOM.innerHTML = `
        <div id="${this.parentDivId}" class="pt_menu readmore ${this.parentDivClass}">
            <div class="parentMenu">
                <a href="http://plazathemes.com/demo/boxstore/english5/vegetables.html" class="pt_cate ">
                    <span>${this.category}</span>
                    <span class="is_sale"></span>
                    <span class="is_new"></span>
                </a>
            </div>
            <div id="${this.popUpId}" class="popup" style="width: 1145px; top: 60px; left: 3px; display: none;">
                <div class="block1" id="${this.blockId}" style="width: 1145px;">
                    <Pop-up-column 
                        NoOfColumn="col1"
                        mainItemName=""
                        urlMainItem=""
                        subItemName_1="" urlSubItem_1=""
                        subItemName_2="" urlSubItem_2=""
                        subItemName_3="" urlSubItem_3=""
                        subItemName_4="" urlSubItem_4=""
                        subItemName_5="" urlSubItem_5="">
                    </Pop-up-column>
                    <Pop-up-column 
                        NoOfColumn="col2"
                        mainItemName=""
                        urlMainItem=""
                        subItemName_1="" urlSubItem_1=""
                        subItemName_2="" urlSubItem_2=""
                        subItemName_3="" urlSubItem_3=""
                        subItemName_4="" urlSubItem_4=""
                        subItemName_5="" urlSubItem_5="">
                    </Pop-up-column>
                    <Pop-up-column 
                        NoOfColumn="col3"
                        mainItemName=""
                        urlMainItem=""
                        subItemName_1="" urlSubItem_1=""
                        subItemName_2="" urlSubItem_2=""
                        subItemName_3="" urlSubItem_3=""
                        subItemName_4="" urlSubItem_4=""
                        subItemName_5="" urlSubItem_5="">
                    </Pop-up-column>
                    <Pop-up-column 
                        NoOfColumn="col4"
                        mainItemName=""
                        urlMainItem=""
                        subItemName_1="" urlSubItem_1=""
                        subItemName_2="" urlSubItem_2=""
                        subItemName_3="" urlSubItem_3=""
                        subItemName_4="" urlSubItem_4=""
                        subItemName_5="" urlSubItem_5="">
                    </Pop-up-column>
                    <div class="column col2">
                        <div class="itemMenu level1">
                            <a class="itemMenuName level1" href="http://plazathemes.com/demo/boxstore/english5/vegetables/weaters.html">
                                <span>weaters</span>
                            </a>
                            <div class="itemSubMenu level1">
                                <div class="itemMenu level2">
                                    <a class="itemMenuName level2" href="http://plazathemes.com/demo/boxstore/english5/vegetables/weaters/crochet.html">
                                        <span>Crochet</span>
                                    </a>
                                    <a class="itemMenuName level2" href="http://plazathemes.com/demo/boxstore/english5/vegetables/weaters/sleeveless.html">
                                        <span>Sleeveless</span>
                                    </a>
                                    <a class="itemMenuName level2" href="http://plazathemes.com/demo/boxstore/english5/vegetables/weaters/stripes.html">
                                        <span>Stripes</span>
                                    </a>
                                    <a class="itemMenuName level2" href="http://plazathemes.com/demo/boxstore/english5/vegetables/weaters/sweaters.html">
                                        <span>Sweaters</span>
                                    </a>
                                    <a class="itemMenuName level2" href="http://plazathemes.com/demo/boxstore/english5/vegetables/weaters/hoodies.html">
                                        <span>hoodies</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="column col3">
                        <div class="itemMenu level1">
                            <a class="itemMenuName level1" href="http://plazathemes.com/demo/boxstore/english5/vegetables/tops.html">
                                <span>Bottoms</span>
                            </a>
                            <div class="itemSubMenu level1">
                                <div class="itemMenu level2">
                                    <a class="itemMenuName level2" href="http://plazathemes.com/demo/boxstore/english5/vegetables/tops/heeled-sandals.html">
                                        <span>Heeled sandals</span>
                                    </a>
                                    <a class="itemMenuName level2" href="http://plazathemes.com/demo/boxstore/english5/vegetables/tops/polo-short-sleeve.html">
                                        <span>Polo Short Sleeve</span>
                                    </a>
                                    <a class="itemMenuName level2" href="http://plazathemes.com/demo/boxstore/english5/vegetables/tops/flat-sandals.html">
                                        <span>Flat sandals</span>
                                    </a>
                                    <a class="itemMenuName level2" href="http://plazathemes.com/demo/boxstore/english5/vegetables/tops/short-sleeve.html">
                                        <span>Short Sleeve</span>
                                    </a>
                                    <a class="itemMenuName level2" href="http://plazathemes.com/demo/boxstore/english5/vegetables/tops/long-sleeve.html">
                                        <span>Long Sleeve</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="column last col4">
                        <div class="itemMenu level1">
                            <a class="itemMenuName level1" href="http://plazathemes.com/demo/boxstore/english5/vegetables/bottoms.html">
                                <span>Bottoms</span>
                            </a>
                            <div class="itemSubMenu level1">
                                <div class="itemMenu level2">
                                    <a class="itemMenuName level2" href="http://plazathemes.com/demo/boxstore/english5/kids/bottoms/shorts.html">
                                        <span>Shorts</span>
                                    </a>
                                    <a class="itemMenuName level2" href="http://plazathemes.com/demo/boxstore/english5/kids/bottoms/dresses.html">
                                        <span>Dresses</span>
                                    </a>
                                    <a class="itemMenuName level2" href="http://plazathemes.com/demo/boxstore/english5/kids/bottoms/trousers.html">
                                        <span>Trousers</span>
                                    </a>
                                    <a class="itemMenuName level2" href="http://plazathemes.com/demo/boxstore/english5/kids/bottoms/jeans.html">
                                        <span>Jeans</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="clearBoth"></div>
                </div>
            </div>
        </div>
        `
    }
}
window.customElements.define('menu-dropdown', MenuDropdown)
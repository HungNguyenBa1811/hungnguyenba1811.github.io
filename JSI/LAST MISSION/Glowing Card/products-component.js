const style = `
.card{
    position: relative;
}

.card .face{
    width: 300px;
    height: 200px;
    transition:.4s;  
}

.card .face.face1{
    position: relative;
    background: #333;
    display: flex;
    justify-content: center;
    align-content:center;
    align-items: center;
    z-index: 1;
    transform: translateY(100px);
}
  
.card:hover .face.face1{
    transform: translateY(0);
    box-shadow:
        inset 0 0 60px whitesmoke,
        inset 20px 0 80px #f0f,
        inset -20px 0 80px #0ff,
        inset 20px 0 300px #f0f,
        inset -20px 0 300px #0ff,
        0 0 50px #fff,
        -10px 0 80px #f0f,
        10px 0 80px #0ff;  
}
  
.card .face.face1 .content{
    opacity: .2;
    transition:  0.5s;
    text-align: center;
}
  
.card:hover .face.face1 .content{
    opacity: 1; 
}
  
.card .face.face1 .content i{
    font-size: 3em;
    color: white;
    display: inline-block;
}
  
.card .face.face1 .content h3{
    font-size: 1em;
    color: white;
    text-align: center;
}
  
.card .face.face1 .content a{
    transition: .5s;
}
  
.card .face.face2{
    position: relative;
    background: whitesmoke;
    display: flex;
    font-size: 10px;
    align-items: center;
    justify-content: center;
    padding: 20px;
    box-sizing: border-box;
    box-shadow: 0 20px 50px rgba(0,0,0,.8);
    transform: translateY(-100px);
}
  
.card:hover .face.face2{
    transform: translateY(0);
}
  
.card .face.face2 .content p, a{
    font-size: 10pt;
    margin: 0 ;
    padding: 0;
    color:#333;
}
  
.card .face.face2 .content a{
    text-decoration:none;
    color: black;
    box-sizing: border-box;
    outline : 1px dashed #333;
    padding: 10px;
    margin: 15px 0 0;
    display: inline-block;
}
  
.card .face.face2 .content a:hover{
    background: #333 ;
    color: whitesmoke; 
    box-shadow: inset 0px 0px 10px rgba(0,0,0,0.5);
}`
class ProductsCard extends HTMLElement {
    constructor(){
        super();
        this._shadowDom = this.attachShadow({ mode: "open"})
        this.productName = this.getAttribute("productName")
        this.productImgUrl = this.getAttribute("productImgUrl")
        this.productPrice = this.getAttribute("productPrice")
        this.productSaleOff = this.getAttribute("productSaleOff")
        this._shadowDom.innerHTML = `
            <style>
                ${style}
            </style>
            <div class="card">

                <div class="face face1">

                    <div class="content">
                        <i class="fab fa-users"></i>            
                        <h3>Windows</h3>
                    </div>

                </div>

                <div class="face face2">

                    <div class="content">
                        <img
                            src="${this.productImgUrl}"
                            width="100px">
                        <h1>${this.productName}</h1>
                        <p>Price: $ ${this.productPrice}</p>
                        <p>(Sale Off ${this.productSaleOff})</p>
                    </div>

                </div>

            </div>
        `
    }
}
window.customElements.define('product-card', ProductsCard)
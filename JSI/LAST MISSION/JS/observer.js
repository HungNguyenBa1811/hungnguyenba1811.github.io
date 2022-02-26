import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/9.6.4/firebase-auth.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.4/firebase-app.js";
import { getDatabase, ref, child, get, update } from "https://www.gstatic.com/firebasejs/9.6.4/firebase-database.js"

const firebaseConfig = {
    apiKey: "AIzaSyApWwoJ3mGbwXJkh4eiiIi_DC-zpBUzRm8",
    authDomain: "organic-store-2dff9.firebaseapp.com",
    projectId: "organic-store-2dff9",
    storageBucket: "organic-store-2dff9.appspot.com",
    messagingSenderId: "1079383200282",
    appId: "1:1079383200282:web:2a370bcfa756b18819b7a3"
};      
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const dbRef = ref(getDatabase(app));

const myAccount = document.querySelector("#my_account")

let auth_false = document.querySelector("#auth_false")
let auth_check = document.querySelector(".auth-check")
let contact_information = document.querySelector(".contact_change")
let address_information = document.querySelector(".address_change")
let phone_change = document.querySelector(".phone_change")
let new_address = document.querySelector("#change-address")
let new_telephone = document.querySelector("#change-telephone")
let new_first_name = document.querySelector("#change-first-name")
let new_last_name = document.querySelector("#change-last-name")
let delAll = document.querySelector(".clear_cart")

onAuthStateChanged(auth, (user) => {
    if (user) {
        const uid = user.uid;
        
        let leakIP = localStorage.getItem("Leak IP")
        let updates = {}
        updates['/users/' + uid + '/ip/'] = leakIP
        update(dbRef, updates)
        
        myAccount.addEventListener("click", () => window.location.href = 'https://hungnguyenba1811.github.io/JSI/LAST%20MISSION/customer/myaccount.html')
        auth_false.innerHTML = "Sign Out"
        auth_false.setAttribute("href", "#")
        auth_false.addEventListener("click", () => {
            signOut(auth)
                .then(() => {
                    auth_false.innerHTML = "Sign In"
                    auth_false.setAttribute("href", "./login.html")
                    alert("Signed Out!!!!")
                    localStorage.clear()
                    window.location.reload()
                })
                .catch((error) => {
                    alert("Error: ", error)
                });
        })

        get(child(dbRef, `users/${uid}`))
            .then((snapshot) => {
                if (snapshot.exists()){
                    auth_check.innerHTML = `Welcome back, ${snapshot.val().first_name} ${snapshot.val().last_name}`
                    console.log(snapshot.val())
                    if(contact_information){
                        contact_information.innerHTML = `
                            <p style="font-size: 1.3rem; margin: 0;">Full Name: ${snapshot.val().first_name + snapshot.val().last_name}</p>
                            <p style="font-size: 1.3rem; margin-bottom: 10px;">Email: ${snapshot.val().email}</p>
                        `
                        if(!snapshot.val().shipping_address){
                            address_information.innerHTML = `
                                <p style="font-size: 1.3rem; margin-bottom: 10px;">You don't have shipping address.</p>
                            `
                        } else {
                            address_information.innerHTML = `
                                <p style="font-size: 1.3rem; margin-bottom: 10px;">Shipping Address: ${snapshot.val().shipping_address}</p>
                            `
                        }
                        if(!snapshot.val().phone_number){
                            phone_change.innerHTML = `
                                <p style="font-size: 1.3rem; margin-bottom: 10px;">You don't have a phone number.</p>
                            `
                        } else {
                            phone_change.innerHTML = `
                                <p style="font-size: 1.3rem; margin-bottom: 10px;">Phone Number: ${snapshot.val().phone_number}</p>
                            `
                        }
                    }
                    if(new_address){
                        new_address.value = snapshot.val().shipping_address
                        new_telephone.value = snapshot.val().phone_number
                    }else if(new_first_name){
                        new_first_name.value = snapshot.val().first_name
                        new_last_name.value = snapshot.val().last_name
                    }
                } else {
                    console.log("No user")
                }
            })

        get(child(dbRef, `users/${uid}/cart`))
            .then((snapshot) => {
                if (snapshot.exists()){
                    localStorage.setItem("Cart", snapshot.val())
                    var cart = JSON.parse(snapshot.val())
                } else {
                    localStorage.setItem("Cart", "[]")
                    var cart = JSON.parse(snapshot.val())
                }
            })

        let addCartBtn = document.querySelectorAll(".tocart");
        let deleteBtn = document.querySelectorAll(".del")

        for(let i = 0, j = addCartBtn.length; i<j;i++){

            addCartBtn[i].addEventListener("click", () => {
                console.log(JSON.parse(localStorage.getItem("Cart")))
                const updates = {}
                updates['/carts/' + uid + '/'] = JSON.stringify(cart)
                updates['/users/' + uid + '/cart/'] = JSON.stringify(cart)
                update(dbRef, updates)
            })

        }
        
        if(deleteBtn){
            for(let i = 0, j = deleteBtn.length; i<j;i++){
                deleteBtn[i].addEventListener("click", () => {
                    const updates = {}
                    updates['/carts/' + uid + '/'] = JSON.stringify(cart)
                    updates['/users/' + uid + '/cart/'] = JSON.stringify(cart)
                    update(dbRef, updates)
                })

            }
        }

        if (cart.length > 0) {

            let deleteCartBtn = document.querySelectorAll(".delete");

            for(let i = 0, j = cart.length; i<j; i++ ){
                deleteCartBtn[i].addEventListener("click", () => {
                    const updates = {}
                    updates['/carts/' + uid + '/'] = JSON.stringify(cart)
                    updates['/users/' + uid + '/cart/'] = JSON.stringify(cart)
                    update(dbRef, updates)
                })
            }
            if(delAll){
                delAll.addEventListener("click", () => {
                    const updates = {}
                    updates['/carts/' + uid + '/'] = JSON.stringify(cart)
                    updates['/users/' + uid + '/cart/'] = JSON.stringify(cart)
                    update(dbRef, updates)
                })
            }

        } else {
            const updates = {}
            updates['/carts/' + uid + '/'] = JSON.stringify(cart)
            updates['/users/' + uid + '/cart/'] = JSON.stringify(cart)
            update(dbRef, updates)
        }

    } else {
        if(document.querySelector(".mySlide") || document.querySelector("#view-cart") || document.querySelector(".page-layout-2columns-left")){
            setTimeout( () => {
                localStorage.clear()
                window.location.href = "https://hungnguyenba1811.github.io/JSI/LAST%20MISSION/login.html"
            }, 5000)
        }

        myAccount.addEventListener("click", () => {
            window.location.href = 'https://hungnguyenba1811.github.io/JSI/LAST%20MISSION/login.html'
        })
    }
});
import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/9.6.4/firebase-auth.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.4/firebase-app.js";
import { getDatabase, ref, child, get, update, push } from "https://www.gstatic.com/firebasejs/9.6.4/firebase-database.js"

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
let is_newsletter = document.querySelector("._newsletter")
let address_information = document.querySelector(".address_change")
let phone_change = document.querySelector(".phone_change")


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
                    auth_check.innerHTML = `Welcome back, ${snapshot.val().last_name + " " + snapshot.val().first_name}`
                    console.log(snapshot.val())
                    if(is_newsletter){
                        contact_information.innerHTML = `
                            <p style="font-size: 1.3rem; margin: 0;">First Name: ${snapshot.val().last_name}</p>
                            <p style="font-size: 1.3rem; margin-bottom: 10px;">Last Name: ${snapshot.val().first_name}</p>
                        `
                        address_information.innerHTML = `
                            <p style="font-size: 1.3rem; margin-bottom: 10px;">Email: ${snapshot.val().email}</p>
                        `
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
                } else {
                    console.log("No user")
                }
            })

        get(child(dbRef, `users/${uid}/cart`))
            .then((snapshot) => {
                if (snapshot.exists()){
                    localStorage.setItem("Cart", snapshot.val())
                } else {
                    localStorage.setItem("Cart", "[]")
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

            let deleteBtn = document.querySelectorAll(".delete");

            for(let i = 0, j = cart.length; i<j; i++ ){
                deleteBtn[i].addEventListener("click", () => {
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

        alert("Not Logged In!")
        setTimeout( ()=> {
            localStorage.clear()
            window.location.href = "./login.html"
        }, 10000)

        myAccount.addEventListener("click", () => {
            alert("Not Logged In!!!! Try creating an account!!!")
        })
    }
});
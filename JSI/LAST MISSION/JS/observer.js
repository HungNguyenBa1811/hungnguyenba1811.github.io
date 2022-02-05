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
const dbRef = ref(getDatabase());

const myAccount = document.querySelector("#my_account")
let auth_false = document.querySelector("#auth_false")

onAuthStateChanged(auth, (user) => {
    if (user) {
        const uid = user.uid;

        auth_false.innerHTML = "Sign Out"
        auth_false.setAttribute("href", "#")
        auth_false.addEventListener("click", () => {
            signOut(auth)
                .then(() => {
                    auth_false.innerHTML = "Sign In"
                    auth_false.setAttribute("href", "./login.html")
                    alert("Signed Out!!!!")
                    localStorage.clear()
                })
                .catch((error) => {
                    alert("Error: ", error)
                });
        })

        console.log("Current users: ", uid)

        get(child(dbRef, `users/${uid}`))
            .then((snapshot) => {
                if (snapshot.exists()) {
                    console.log(snapshot.val());
                    let parseData = JSON.stringify(snapshot.val())
                    localStorage.setItem("Current Data", parseData)
                } else {
                    console.log("No data available");
                }
            })
            .catch((error) => {
                console.error(error);
            });

        let addCartBtn = document.querySelectorAll(".tocart");
        for(let i = 0, j = addCartBtn.length; i<j;i++){
            addCartBtn[i].addEventListener("click", () => {
                console.log(JSON.parse(localStorage.getItem("Cart")))
                const updates = {}
                updates['/carts/' + uid + '/'] = JSON.stringify(cart)
                updates['/users/' + uid + '/cart/'] = JSON.stringify(cart)
                update(dbRef, updates)
            })
        }

    } else {
        console.log("Not Logged In!!!!")
        myAccount.addEventListener("click", () => {
            alert("Not Logged In!!!! Try to create an account!!!")
        })
    }
});
import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/9.6.4/firebase-auth.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.4/firebase-app.js";

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
                })
                .catch((error) => {
                    alert("Error: ", error)
                });
        })

        console.log("Current users: ", uid)
    } else {
        console.log("Not Logged In!!!!")
        myAccount.addEventListener("click", () => {
            alert("Not Logged In!!!! Try to create an account!!!")
        })
    }
});
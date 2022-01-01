import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getFirestore } from 'https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js'
import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js"

const firebaseConfig = {
    apiKey: "AIzaSyCJy22ZhlKtgNojJ9FoK-AWllLj4FJ71ts",
    authDomain: "jsi-03.firebaseapp.com",
    projectId: "jsi-03",
    storageBucket: "jsi-03.appspot.com",
    databaseURL: "https://jsi-03-default-rtdb.firebaseio.com/",
    messagingSenderId: "1051973732252",
    appId: "1:1051973732252:web:404e8537c723f2a8f8aa59"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth();
const user = auth.currentUser;

const signOutBtn = document.querySelector("#signOutBtn")
const signInBtn = document.querySelector('#signInBtn')
const signUpBtn = document.querySelector('#signUpBtn')

if (user) {
    const uid = user.uid;
    console.log(uid)
    signUpBtn.classList = "disappeared"
    signInBtn.classList = "disappeared"
    signOutBtn.classList = "appeared"
} else {
    signUpBtn.classList = "appeared"
    signInBtn.classList = "appeared"
    signOutBtn.classList = "disappeared"
}

signInBtn.addEventListener("click", () => window.location = "./login.html")

signUpBtn.addEventListener("click", () => window.location = "./signup.html")

signOutBtn.addEventListener("click", () => {
    signOut(auth)
        .then(() => {
            alert("Signed Out Successfully!!!")
            // Sign-out successful.
            signOutBtn.classList = "disappeared"
            
        })
        .catch((error) => {
            // An error happened.
            const errorMessage = error.message;
            alert(errorMessage)
        });
})
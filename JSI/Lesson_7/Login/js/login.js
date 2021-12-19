import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getFirestore } from 'https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js'
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js"

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

const logIn = document.querySelector('#logInBtn') 

logIn.addEventListener("click", () => {
    let email = document.querySelector("#emailBox").value
    let password = document.querySelector("#passwordBox").value

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            alert("Log In successfully!!!")
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage)
        });
})
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getFirestore } from 'https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js'
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js"

const firebaseConfig = {
    apiKey: "AIzaSyDkvgS326bGNeSU34aqBoeqyLtKW6Rf2WA",
    authDomain: "gaming-gear-project.firebaseapp.com",
    databaseURL: "https://gaming-gear-project-default-rtdb.firebaseio.com",
    projectId: "gaming-gear-project",
    storageBucket: "gaming-gear-project.appspot.com",
    messagingSenderId: "67679831371",
    appId: "1:67679831371:web:56766ea0c13fc7cfaa94ce"
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
            console.log(user)
            alert("Log In successfully!!!")
            window.location = '../index.html'
        })
        .catch((error) => {
            // const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage)
        });
})
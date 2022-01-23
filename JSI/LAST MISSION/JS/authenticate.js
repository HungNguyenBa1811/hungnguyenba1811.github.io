// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.4/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.4/firebase-auth.js"
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/9.6.4/firebase-database.js"

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
const database = getDatabase(app);
const auth = getAuth();

const signUp = document.querySelector("#signUpBtn")
signUp.addEventListener('click', () => {
    let email = document.querySelector("#email_address").value
    let password = document.querySelector("#password").value
    let passwordConfirm = document.querySelector("#password-confirmation").value
    let first_name = document.querySelector("#firstname").value
    let last_name = document.querySelector("#lastname").value
    
    if(password === passwordConfirm && password != null){
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            const uid = user.uid
            alert("User created!!!")
            console.log(user)
            function writeUserData(userId, email, password) {
                set(ref(database, 'users/' + userId), {
                    first_name: first_name,
                    last_name: last_name,
                    email: email,
                    password: password,
                });
            }
            writeUserData(uid, email, password)
        })
        .catch((error) => {
            // const errorCode = error.code;
            const errorMessage = error.message;
            // ..
            alert(errorMessage)
        });
    }
    else{
        alert("U Dumb Ass")
        window.location = "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    }
})
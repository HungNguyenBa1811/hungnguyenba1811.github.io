import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getFirestore } from 'https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js'
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js"

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
const auth = getAuth();
const db = getFirestore(app);
const provider = new GoogleAuthProvider();

const logIn = document.querySelector('#logInBtn')
const logInGoogle = document.querySelector('.facebook')
const signUp = document.querySelector("#signUpBtn")

auth.languageCode = 'it';

if(logIn){
    logIn.addEventListener("click", () => {
        let email = document.querySelector("#emailBox").value
        let password = document.querySelector("#passwordBox").value
    
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(user)
                console.log(user.uid)
                alert("Log In successfully!!!")
                setInterval(() => window.location = './userinfo.html', 3000)
            })
            .catch((error) => {
                // const errorCode = error.code;
                const errorMessage = error.message;
                alert(errorMessage)
            });
    })
    logInGoogle.addEventListener("click", () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                const user = result.user;
                console.log(user)
                console.log(token)
            })
            .catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                // ...
            });
    })

} else {
    signUp.addEventListener('click', () => {
        let email = document.querySelector("#emailBox").value
        let password = document.querySelector("#passwordBox").value
        // let username = document.querySelector('#usernameBox').value
    
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                const uid = user.uid

                alert("User created!!!")
                console.log(uid, passwordHash)
                function writeUserData(userId, email, password) {
                    set(ref(database, 'users/' + userId), {
                        // username: username,
                        email: email,
                        password: password,
                    });
                }
                writeUserData(uid, email, passwordHash)
                // ...
            })
            .catch((error) => {
                // const errorCode = error.code;
                const errorMessage = error.message;
                // ..
                alert(errorMessage)
            });
    })
    
}
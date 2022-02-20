// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.4/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/9.6.4/firebase-auth.js"
import { getDatabase, ref, set, child, get, update } from "https://www.gstatic.com/firebasejs/9.6.4/firebase-database.js"

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
const provider = new GoogleAuthProvider();
auth.languageCode = 'it';

const signUp = document.querySelector("#signUpBtn")
const signIn = document.querySelector("#signInBtn")
const signInFacebook = document.querySelector(".facebook")
const signInGoogle = document.querySelector(".google")

let leakIP = localStorage.getItem("Leak IP")

if(signUp !== null){
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
                    alert("User created")
                    console.log(user)
                    function writeUserData(userId, email, password, ip) {
                        set(ref(database, 'users/' + userId), {
                            first_name: first_name,
                            last_name: last_name,
                            email: email,
                            password: password,
                            ip: ip,
                        });
                        localStorage.setItem("Cart", [])
                    }
                    writeUserData(uid, email, password, leakIP)
                    setTimeout(() => window.location = "./index.html", 2000)
                    updateProfile(auth.currentUser, {
                        displayName: `${first_name} ${last_name}`
                    }) .then(() => {
                        console.log(first_name + " " + last_name)
                    }).catch((error) => {
                        alert(error)
                    });
                })
                .catch((error) => {
                    // const errorCode = error.code;
                    const errorMessage = error.message;
                    // ..
                    alert(errorMessage)
                });
        }
        else{
            alert("Error! Check your form!")
            window.location = "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
        }
    })
} else {
    signIn.addEventListener("click", () => {

        let email = document.querySelector("#email").value
        let password = document.querySelector("#pass").value

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                const uid = user.id
                console.log(user)
                alert("User Logged In")
                get(child(ref(getDatabase()), `/users/${uid}/cart`))
                    .then((snapshot) => {
                        if(snapshot.exists()){
                            console.log(snapshot.val())
                        } else {
                            console.log("No data")
                        }
                    })
                    .catch((error) => {
                        console.error(error)
                    })
                setTimeout(() => window.location = "./index.html", 1000)
            })
            .catch((error) => {
                const errorMessage = error.message;
                alert("Error: ", errorMessage)
            });
    })
    signInGoogle.addEventListener("click", () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const userToken = credential.accessToken;
                const user = result.user;

                const uid = user.uid
                const userName = user.displayName
                const userEmail = user.email

                function writeUserData2(token, userId, name, email, ip) {
                    set(ref(database, 'users/' + userId), {
                        first_name: name,
                        last_name: " ",
                        token: token,
                        email: email,
                        ip: ip,
                    });
                }
                get(child(ref(getDatabase()), `/users/${uid}`))
                    .then((snapshot) => {
                        if(snapshot.exists()){
                            console.log(snapshot.val())
                            const updates = {}
                            updates['/users/' + uid + '/token/'] = userToken
                            update(ref(database), updates)
                        } else {
                            writeUserData2(userToken, uid, userName, userEmail, leakIP)
                        }
                    })
                    .catch((error) => {
                        console.error(error)
                    })
                setTimeout(() => window.location = "./index.html", 1000)
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                const email = error.email;
                alert("Error: ", errorMessage)
                const credential = GoogleAuthProvider.credentialFromError(error);
            });
    })
}
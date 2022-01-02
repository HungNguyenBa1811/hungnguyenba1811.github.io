import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getFirestore } from 'https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js'
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js"
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-database.js"

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
const database = getDatabase(app)
const auth = getAuth();

const signUp = document.querySelector("#signUpBtn")

signUp.addEventListener('click', () => {
    let email = document.querySelector("#emailBox").value
    let password = document.querySelector("#passwordBox").value
    let firstName = document.querySelector('#firstNameBox').value
    let lastName = document.querySelector('#lastNameBox').value

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            const uid = user.uid
            alert("User created!!!")
            updateProfile(user,{
                displayName: `${firstName} ${lastName}`,
            })
            .then(() => {
                alert(`Name: ${firstName} ${lastName}`)
            })
            .catch((error) => {
                const errorMessage = error.message
                alert(errorMessage)
            });
            function writeUserData(userId, email, password) {
                const db = getDatabase();
                set(ref(db, 'users/' + userId), {
                    first_name: firstName,
                    last_name: lastName,
                    email: email,
                    password: password,
                });
            }
            writeUserData(uid, email, password)
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
            alert(errorMessage)
        });
})
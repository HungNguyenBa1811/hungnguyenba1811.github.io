import {
    getAuth,
    signInAnonymously,
    createUserWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    FacebookAuthProvider,
    signInWithPopup
} from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";
import {initializeApp} from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import {getFirestore} from 'https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCJy22ZhlKtgNojJ9FoK-AWllLj4FJ71ts",
    authDomain: "jsi-03.firebaseapp.com",
    projectId: "jsi-03",
    storageBucket: "jsi-03.appspot.com",
    messagingSenderId: "1051973732252",
    appId: "1:1051973732252:web:404e8537c723f2a8f8aa59"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth();

// Few setup methods

const email = document.querySelector("#emailBox");
const password = document.querySelector("#passwordBox");
const result = document.querySelector("#resultBox");

// signInAnonymously(auth)
//     .then(() => {
//         // Signed in..
//     })
//     .catch((error) => {
//         const errorCode = error.code;
//         const errorMessage = error.message;
//         // ...
//     });

createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => { // Signed in
        const user = userCredential.user;
        const uid = user.id;
        result.innerHTML = `
            <div>${user}</div>
            <div>${uid}</div>
        `
        // ...
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode)
        console.log(errorMessage)
        // ..
    });

signOut(auth)
    .then(() => {
        // Sign-out successful.
    })
    .catch((error) => {
        // An error happened.
    });

// onAuthStateChanged(auth, (user) => {
//     if (user) {
//         // User is signed in, see docs for a list of available properties
//         // https://firebase.google.com/docs/reference/js/firebase.User
//         const uid = user.uid;
//         const uname = user.displayName;
//         const email = user.email;
//         // ...
//     } else {
//         // User is signed out
//         // ...
//     }
// });

// const provider = new FacebookAuthProvider();
// provider.addScope("user_birthday");
// auth.languageCode = "it";

// signInWithPopup(auth, provider)
//     .then((result) => { // The signed-in user info.
//         const user = result.user;

//         // This gives you a Facebook Access Token. You can use it to access the Facebook API.
//         const credential = FacebookAuthProvider.credentialFromResult(result);
//         const accessToken = credential.accessToken;

//         // ...
//     })
//     .catch((error) => { // Handle Errors here.
//         const errorCode = error.code;
//         const errorMessage = error.message;
//         // The email of the user's account used.
//         const email = error.email;
//         // The AuthCredential type that was used.
//         const credential = FacebookAuthProvider.credentialFromError(error);

//         // ...
//     });

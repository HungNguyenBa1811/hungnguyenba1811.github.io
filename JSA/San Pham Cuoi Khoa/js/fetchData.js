// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getFirestore, doc, getDoc } from 'https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDkvgS326bGNeSU34aqBoeqyLtKW6Rf2WA",
    authDomain: "gaming-gear-project.firebaseapp.com",
    projectId: "gaming-gear-project",
    storageBucket: "gaming-gear-project.appspot.com",
    messagingSenderId: "67679831371",
    appId: "1:67679831371:web:56766ea0c13fc7cfaa94ce"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();

// get data
const docRef = doc(db, "user", "TWK99bWn1r6wGqg6Q63h")
const docSnap = await getDoc(docRef);

if (docSnap.exists()) {
    console.log("Document data:", docSnap.data()); // return array of data
} else {
    // doc.data() will be undefined in this case
    console.log("No such document!");
}

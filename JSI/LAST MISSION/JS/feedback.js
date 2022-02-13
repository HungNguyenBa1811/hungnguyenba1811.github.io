// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.4/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.6.4/firebase-auth.js"
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

const feedbackBtn = document.querySelector("#subscribeBtn")

feedbackBtn.addEventListener("click", () => {

    let feedbackName = document.querySelector(".feedback-name").value
    let feedbackEmail = document.querySelector(".feedback-email").value
    let feedback = document.querySelector(".feedback-text").value

    function writeFeedbackData(name, email, text) {
        set(ref(database, 'feedback/' + name), {
            email: email,
            feedback: text,
        });
    }

    if(feedbackName !== null && feedbackEmail !== null && feedback !== null){
        writeFeedbackData(feedbackName, feedbackEmail, feedback)
        alert("Thanks for using our website!")
    }
})
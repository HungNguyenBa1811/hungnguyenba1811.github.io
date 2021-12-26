import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getFirestore } from 'https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js'
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged, updateProfile } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js"

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
const seeInfo  = document.querySelector('#info')
const updateUser = document.querySelector('#updateInfoBtn')

if(logIn != null){
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
                // setInterval(() => window.location = './mainpage.html', 30000)
            })
            .catch((error) => {
                // const errorCode = error.code;
                const errorMessage = error.message;
                alert(errorMessage)
            });
    })
}

if(seeInfo != null){
    const user = auth.currentUser;
    const name = document.querySelector('#displayName')
    const phone = document.querySelector('#phoneNumber')
    seeInfo.addEventListener("click", () => {
        if(user){
            console.log(user)
            document.querySelector("#show").innerHTML = `
            <div>
                <h1>BASIC INFORMATION</h1>
                <h3>Name: ${user.displayName}</h3>
                <h4>Email: ${user.email}</h4>
                <h4>Password (Hashed): ${user.reloadUserInfo.passwordHash}</h4>
            </div>
            <div>
                <h1>MORE INFORMATION</h1>
                <h3>Access TOken: ${user.accessToken}</h3>
                <h3>User id: ${user.uid}</h3>
                <h4>Anonymous? ${user.isAnonymous}</h4>
                <h4>Email Verified? ${user.emailVerified}</h4>
                <h4>Phone Number: ${user.phoneNumber}</h4>
                <h4>Photo Url</h4>
                <img src="${user.photoURL}" alt="No Image found or maybe broken">
            </div>
        `
        }
        else{
            alert("Not logged in!")
        }
    })
    updateUser.addEventListener("click",() => {
        if(user){
            updateProfile(user, {
                displayName: name,
                phoneNumber: phone,
            })
            .then(() => {
                alert("Profile updated!")
            })
            .catch((error) => {
                const errorMessage = error.message
                alert(errorMessage)
                // An error occurred
                // ...
            });
        }
    })
}

// accessToken: "eyJhbGciOiJSUzI1NiIsImtpZCI6IjcxMTQzNzFiMmU4NmY4MGM1YzYxNThmNDUzYzk0NTEyNmZlNzM5Y2MiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vanNpLTAzIiwiYXVkIjoianNpLTAzIiwiYXV0aF90aW1lIjoxNjQwNDg5ODE5LCJ1c2VyX2lkIjoiOUFkMnA4alpwVFBGVENDWm5zQkc2YlRZV3BjMiIsInN1YiI6IjlBZDJwOGpacFRQRlRDQ1puc0JHNmJUWVdwYzIiLCJpYXQiOjE2NDA0ODk4MTksImV4cCI6MTY0MDQ5MzQxOSwiZW1haWwiOiJoYWxsb0BnYy5jbyIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJoYWxsb0BnYy5jbyJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.GY1ITn4uIxUIAyaCqq9SkF21BeRFHODGU6Ez_JNew8Am-5MiJrk1ZrDKKMzSWWS6UqalnpKJKmlqLO0-JQwCzVJXmOAiM8QMXOtTlaFVSMyW3yJISzt86jgIS3RpOzWcfoIviOWyn-XTzCiLnyLWP7yRzBoeSusLhizo4WW-88qq6bXFSb17vkjkV0seasE7cl7AyW3Dau0vfJ95WRQhfQWeCC_b_pAKsMhlpc2iC0sYdOhw9A5pRPdYJZTprMQAod3W8eHykHzQqgbeTKP_3e3YrI-hBqTOXuLF3tJiJBK34zlojDZl3tr6K-4LxcAfPgI721O9DX847oSlsXQGqQ"
// auth: AuthImpl {app: FirebaseAppImpl, config: {…}, currentUser: UserImpl, emulatorConfig: null, operations: Promise, …}
// displayName: "Hello1234"
// email: "hallo@gc.co"
// emailVerified: false
// isAnonymous: false
// metadata: UserMetadata {createdAt: '1640489819400', lastLoginAt: '1640489819400', lastSignInTime: 'Sun, 26 Dec 2021 03:36:59 GMT', creationTime: 'Sun, 26 Dec 2021 03:36:59 GMT'}
// phoneNumber: null
// photoURL: null
// proactiveRefresh: ProactiveRefresh {user: UserImpl, isRunning: true, timerId: 6, errorBackoff: 30000}
// providerData: [{…}]
// providerId: "firebase"
// reloadListener: null
// reloadUserInfo: {localId: '9Ad2p8jZpTPFTCCZnsBG6bTYWpc2', email: 'hallo@gc.co', passwordHash: 'UkVEQUNURUQ=', emailVerified: false, passwordUpdatedAt: 1640489819400, …}
// stsTokenManager: StsTokenManager {refreshToken: 'AFxQ4_q1XikX1veM3zYdsavMyhrO2KiN53e21qps45B2cBIB05…Q3C-5iq1dIz4zYIGVUfJbeNRhjwT2uwAFfolrZllV0OuoZdx4', accessToken: 'eyJhbGciOiJSUzI1NiIsImtpZCI6IjcxMTQzNzFiMmU4NmY4MG…tJiJBK34zlojDZl3tr6K-4LxcAfPgI721O9DX847oSlsXQGqQ', expirationTime: 1640493420729}
// tenantId: null
// uid: "9Ad2p8jZpTPFTCCZnsBG6bTYWpc2"
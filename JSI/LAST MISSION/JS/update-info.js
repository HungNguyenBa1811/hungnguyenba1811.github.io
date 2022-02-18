import { getAuth, onAuthStateChanged, updateProfile } from "https://www.gstatic.com/firebasejs/9.6.4/firebase-auth.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.4/firebase-app.js";
import { getDatabase, ref, child, get, update, push } from "https://www.gstatic.com/firebasejs/9.6.4/firebase-database.js"

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
const auth = getAuth();
const dbRef = ref(getDatabase(app));

const saveInfoBtn = document.querySelector(".save-info")
const saveAddressBtn = document.querySelector(".save-address")

onAuthStateChanged(auth, (user) => {
    if(user){
        const uid = user.uid

        if(saveInfoBtn){

            saveInfoBtn.addEventListener("click", () => {

                let new_first_name = document.querySelector("#change-first-name").value
                let new_last_name = document.querySelector("#change-last-name").value

                if(new_first_name && new_last_name){
                    const updates = {}
                    updates['/users/' + uid + '/first_name/'] = new_first_name
                    updates['/users/' + uid + '/last_name/'] = new_last_name
                    update(dbRef, updates)
    
                    updateProfile(auth.currentUser, {
                        displayName: `${new_first_name} ${new_last_name}`
                    })
                    .then(() => {
                        alert("User Updated")
                    })
                    .catch((error) => {
                        alert(error)
                    })
                    setTimeout( () => window.location.reload() , 1000)

                } else {
                    alert("STFU!")
                    window.location.href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
                }

            })
        } else {

            saveAddressBtn.addEventListener("click", () => {

                let new_address = document.querySelector("#change-address").value
                let new_telephone = document.querySelector("#change-telephone").value
                
                if(new_address && new_telephone){
                    const updates = {}
                    updates['/users/' + uid + '/phone_number/'] = new_telephone
                    updates['/users/' + uid + '/shipping_address/'] = new_address
                    update(dbRef, updates)
                    
                    alert("User Updated")
                    setTimeout( () => window.location.reload() , 1000)
                } else {
                    alert("STFU!")
                    window.location.href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
                }

            })

        }
    }
})
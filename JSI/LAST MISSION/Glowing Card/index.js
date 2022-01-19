// Import the functions you need from the SDKs you need
import "./products-component.js"
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getFirestore, doc, getDoc, collection, getDocs } from 'https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
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
const db = getFirestore();

// get data
// const docRef = doc(db, "products-list", "product-1")
// const docSnap = await getDoc(docRef);

// if (docSnap.exists()) {
//     console.log("Document data:", docSnap.data()); // return array of data
// } else {
//     // doc.data() will be undefined in this case
//     console.log("No such document!");
// }

let products = []
const querySnapshot = await getDocs(collection(db, "products-list"));
querySnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
  products.push(doc.data())
});
const products_list = products.sort( (a,b) => a["index"] - b["index"] )
console.log(products_list)

products_list.forEach((object) => {
    console.log(object["imgUrl"])
    document.querySelector(".container").innerHTML += `
        <product-card
            productName="${object["name"]}"
            productImgUrl="${object["imgUrl"]}"
            productPrice="${object["oldPrice"]}"
            productSaleOff="${object["saleOff"]}">
        </product-card>
    `
})
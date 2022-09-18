import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-app.js";
import { getDatabase, ref, child, get, set } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-database.js";

function shuffle(array) {
    let currentIndex = array.length, randomIndex;

    while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
    
        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
  
    return array;
}

const firebaseConfig = {
    apiKey: "AIzaSyBb4CDth7uBQdXCVUUxzqU3wgDV28qlhq8",
    authDomain: "liusday-d84a7.firebaseapp.com",
    projectId: "liusday-d84a7",
    storageBucket: "liusday-d84a7.appspot.com",
    messagingSenderId: "966212139067",
    appId: "1:966212139067:web:13f3fc9650cee6a9c4c41e"
};

var choice = 0
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const dbRef = ref(database);
    // set(ref(database, 'liusdatabase/'), {
    //     data: ["https://firebasestorage.googleapis.com/v0/b/liusday-d84a7.appspot.com/o/lan1.png?alt=media&token=84f63340-ff2c-4615-a4e9-69a4f638a84d","https://firebasestorage.googleapis.com/v0/b/liusday-d84a7.appspot.com/o/lan2.png?alt=media&token=e4d592c7-68a8-4aec-8039-93278130d915","https://firebasestorage.googleapis.com/v0/b/liusday-d84a7.appspot.com/o/lan3.png?alt=media&token=18deb770-f475-4fea-9089-f0b1a9f9656a","https://firebasestorage.googleapis.com/v0/b/liusday-d84a7.appspot.com/o/schannel1.png?alt=media&token=14f9295a-7356-4fad-9581-f1c4833f6e59","https://firebasestorage.googleapis.com/v0/b/liusday-d84a7.appspot.com/o/schannel2.png?alt=media&token=b0c4b44d-f2cd-4fc4-940a-23ca065cabfe","https://firebasestorage.googleapis.com/v0/b/liusday-d84a7.appspot.com/o/schannel3.png?alt=media&token=6c376cda-c190-49b7-9ca0-95022dc6883c","https://firebasestorage.googleapis.com/v0/b/liusday-d84a7.appspot.com/o/special.mp4?alt=media&token=3624f52d-7c32-4671-9b1e-a6545e031a28","Chúc bạn có Lan Nhi lần sau :(((","Chúc bạn có Đặng Thị Thu Hà lần sau :((("]
    // });
    get(child(dbRef, `liusdatabase/data/`)).then((snapshot) => {
    if (snapshot.exists()) {
        var liusdata = shuffle(snapshot.val())
        for(let i = 1; i < liusdata.length+1 ; i++){
            var classify =".liu" + i
            // var classify_img = "#img_liu" + i
            document.querySelector(classify).addEventListener("click", () => {
                choice += 1
                if(choice > 3){
                    window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                } else {

                    if(liusdata[i-1].length < 41){
                        alert(liusdata[i-1])
                        document.querySelector(`.liu${i}`).innerHTML = ""
                    } else {
                        // alert(liusdata[i-1])
                        document.querySelector(`.liu${i}`).innerHTML = ""
                        window.open(liusdata[i-1], '_blank')
                    }
                    
                }
            })
        }
    } else {
        console.log("No data available");
    }})
    .catch((error) => {
        console.log(error);
    });

var arr = [2, 11, 37, 42];

$("#card").flip({
    axis: 'y',
    trigger: 'click'
})

// let liu = ["https://firebasestorage.googleapis.com/v0/b/liusday-d84a7.appspot.com/o/lan1.png?alt=media&token=84f63340-ff2c-4615-a4e9-69a4f638a84d","https://firebasestorage.googleapis.com/v0/b/liusday-d84a7.appspot.com/o/lan2.png?alt=media&token=e4d592c7-68a8-4aec-8039-93278130d915","https://firebasestorage.googleapis.com/v0/b/liusday-d84a7.appspot.com/o/lan3.png?alt=media&token=18deb770-f475-4fea-9089-f0b1a9f9656a","https://firebasestorage.googleapis.com/v0/b/liusday-d84a7.appspot.com/o/schannel1.png?alt=media&token=14f9295a-7356-4fad-9581-f1c4833f6e59","https://firebasestorage.googleapis.com/v0/b/liusday-d84a7.appspot.com/o/schannel2.png?alt=media&token=b0c4b44d-f2cd-4fc4-940a-23ca065cabfe","https://firebasestorage.googleapis.com/v0/b/liusday-d84a7.appspot.com/o/schannel3.png?alt=media&token=6c376cda-c190-49b7-9ca0-95022dc6883c","https://firebasestorage.googleapis.com/v0/b/liusday-d84a7.appspot.com/o/special.mp4?alt=media&token=3624f52d-7c32-4671-9b1e-a6545e031a28","Chúc bạn có Lan Nhi lần sau :(((","Chúc bạn có Đặng Thị Thu Hà lần sau :((("]
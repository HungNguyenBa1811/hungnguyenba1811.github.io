import {getAuth, signInAnonymously, onAuthStateChanged, FacebookAuthProvider, signInWithPopup} from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";

const auth = getAuth();
signInAnonymously(auth).then(() => { // Signed in..
}).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ...
});

const auth = getAuth();
onAuthStateChanged(auth, (user) => {
    if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        // ...
    } else {
        // User is signed out
        // ...
    }
});

const provider = new FacebookAuthProvider();
provider.addScope("user_birthday");
auth.languageCode = "it";

const auth = getAuth();
signInWithPopup(auth, provider).then((result) => { // The signed-in user info.
    const user = result.user;

    // This gives you a Facebook Access Token. You can use it to access the Facebook API.
    const credential = FacebookAuthProvider.credentialFromResult(result);
    const accessToken = credential.accessToken;

    // ...
}).catch((error) => { // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.email;
    // The AuthCredential type that was used.
    const credential = FacebookAuthProvider.credentialFromError(error);

    // ...
});

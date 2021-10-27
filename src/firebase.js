import firebase from "firebase"

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCgo3sQ565DlWYYWHjNNQLrDYkkpmg0Kno",
    authDomain: "my-react-app-c82dd.firebaseapp.com",
    projectId: "my-react-app-c82dd",
    storageBucket: "my-react-app-c82dd.appspot.com",
    messagingSenderId: "618845056943",
    appId: "1:618845056943:web:ba4c3484331b9b2eb5895a"
});
const db = firebaseApp.firestore();
const auth = firebase.auth();

export{db,auth};
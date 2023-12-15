import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here

const firebaseConfig = {
    apiKey: "AIzaSyBEBpIMnhJE1bJdx2sEybMb6qPlGHf654I",
    authDomain: "pro78-c03fa.firebaseapp.com",
    projectId: "pro78-c03fa",
    storageBucket: "pro78-c03fa.appspot.com",
    messagingSenderId: "177351786663",
    appId: "1:177351786663:web:5c9fb1ad5535a15dd0db82"
  };



firebase.initializeApp(firebaseConfig);

export default firebase.firestore();



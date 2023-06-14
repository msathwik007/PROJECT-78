import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here

const firebaseConfig = {
    apiKey: "AIzaSyBVGwtrSnGGT_nhGtjBKUtCfCvFn2dDkJs",
    authDomain: "e-ride-20f1e.firebaseapp.com",
    projectId: "e-ride-20f1e",
    storageBucket: "e-ride-20f1e.appspot.com",
    messagingSenderId: "907594881149",
    appId: "1:907594881149:web:1bbb6a2cc6bbc278c9b914"
  };





firebase.initializeApp(firebaseConfig);

export default firebase.firestore();



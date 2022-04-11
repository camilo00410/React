import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDUsS-pTKkawUwiCgof6HRkKay1Dk-bhxM",
    authDomain: "react-app-first-a305e.firebaseapp.com",
    projectId: "react-app-first-a305e",
    storageBucket: "react-app-first-a305e.appspot.com",
    messagingSenderId: "70946424067",
    appId: "1:70946424067:web:63aa41f8fef2a3c1de5536"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


  const db = firebase.firestore();
  const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

  export {
      db,
      googleAuthProvider,
      firebase
  }
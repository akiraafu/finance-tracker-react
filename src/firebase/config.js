import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA3cfqSMCZiSSMzrEOQGUbzwKhVuqPsnL0",
  authDomain: "mymoney-3de24.firebaseapp.com",
  projectId: "mymoney-3de24",
  storageBucket: "mymoney-3de24.appspot.com",
  messagingSenderId: "203612188214",
  appId: "1:203612188214:web:37dbcd4781618fd1353297",
};

//init firebase
firebase.initializeApp(firebaseConfig);

//init service
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();

export { projectFirestore, projectAuth };

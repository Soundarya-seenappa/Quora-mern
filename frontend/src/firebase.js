import firebase from "firebase";
const firebaseConfig = {

  apiKey: "AIzaSyD6swFDrRNzF8RL34EX1Aj0Uzsfgj3iuLE",

  authDomain: "webchat-c0818.firebaseapp.com",

  projectId: "webchat-c0818",

  storageBucket: "webchat-c0818.appspot.com",

  messagingSenderId: "896327311101",

  appId: "1:896327311101:web:4472aaea4ca73297d76894",

  measurementId: "G-SJ8GNRBLZX"

};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const db = firebaseApp.firestore();

export { auth, provider };
export default db;

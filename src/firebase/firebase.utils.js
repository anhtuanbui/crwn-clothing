import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBlOS5B45a1_mYfwLHnD3575nJKrXJRiGY",
  authDomain: "crwn-db-bef97.firebaseapp.com",
  projectId: "crwn-db-bef97",
  storageBucket: "crwn-db-bef97.appspot.com",
  messagingSenderId: "1032183981260",
  appId: "1:1032183981260:web:0551282d8f157d20dcce69",
  measurementId: "G-Y3SH2Y9SLD",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapshot = await userRef.get();

  if(!snapshot.exists) {
    const {displayName, email} = userAuth;
    const createAt = new Date();

    try{
      await userRef.set({
        displayName,
        email,
        createAt,
        ...additionalData
      })
    }catch(error){
      console.log("error creating user", error.message);
    }
  }

  return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
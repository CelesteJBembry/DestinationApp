import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: 'AIzaXXXXXXXXXXXXXXXXXXXXXXX',
  authDomain: 'test-XXXX.firebaseapp.com',
  databaseURL: 'https://test-XXXXXX.firebaseio.com',
  projectId: 'test-XXXX',
  storageBucket: 'test-XXXX.appspot.com',
  messagingSenderId: 'XXXXXXX',
  appId: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
};

const provider = new firebase.auth.GoogleAuthProvider();
export const signInWithGoogle = () => {
  auth.signInWithPopup(provider);
};


firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const firestore = firebase.firestore();


export const generateUserDocument = async (user, additionalData) => {
  if (!user) return;
  const userRef = firestore.doc(`users/${user.uid}`);
  const snapshot = await userRef.get();
  if (!snapshot.exists) {
    const { email, displayName, photoURL } = user;
    try {
      await userRef.set({
        displayName,
        email,
        photoURL,
        ...additionalData
      });
    } catch (error) {
      console.error("Error creating user document", error);
    }
  }
  return getUserDocument(user.uid);
};
const getUserDocument = async uid => {
  if (!uid) return null;
  try {
    const userDocument = await firestore.doc(`users/${uid}`).get();
    return {
      uid,
      ...userDocument.data()
    };
  } catch (error) {
    console.error("Error fetching user", error);
  }
};


// var firebaseConfig = {
//     apiKey: "AIzaSyC8aLxjBPu4DWUP6LaKaKNqKPX4ysy6d7k",
//     authDomain: "destinyapp-a90ef.firebaseapp.com",
//     databaseURL: "https://destinyapp-a90ef.firebaseio.com",
//     projectId: "destinyapp-a90ef",
//     storageBucket: "destinyapp-a90ef.appspot.com",
//     messagingSenderId: "640223780524",
//     appId: "1:640223780524:web:84e0fa7976538b3b5b4909",
//     measurementId: "G-H38GFRBC2Y"
//   };
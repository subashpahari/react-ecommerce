import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
  apiKey: "AIzaSyBBRvmFAQ8zBHx1MBEfmoZ4jMMkHnXKnE4",
  authDomain: "ecommerce-react-c53c9.firebaseapp.com",
  projectId: "ecommerce-react-c53c9",
  storageBucket: "ecommerce-react-c53c9.appspot.com",
  messagingSenderId: "448191903800",
  appId: "1:448191903800:web:13810796b1d4cae28e4ecd",
  measurementId: "G-JY8NW5NKVX",
};
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});
export const signInWithGoogle = ()=> auth.signInWithPopup(provider);

export default firebase;
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyBgPW0DiZaWPD4W9O2wc_Fq22DZvEjnyX8',
  authDomain: 'hot-shopping.firebaseapp.com',
  projectId: 'hot-shopping',
  storageBucket: 'hot-shopping.appspot.com',
  messagingSenderId: '834323149608',
  appId: '1:834323149608:web:25d21630f3ff1d1594161d',
  measurementId: 'G-7KDSB8HVV0',
};

/**
 * This function will take the user OAuth object we got
 * back from the authentication library and store it in the db
 */

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { providerData } = userAuth;
    const { displayName, email, photoURL } = providerData[0];
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        photoURL,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log('Error creating user ==> ', error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

/**
 * This gives us access to the GoogleAuthProvider class
 * from the auth library
 */
const googleProvider = new firebase.auth.GoogleAuthProvider();
const twitterProvider = new firebase.auth.TwitterAuthProvider();
const gitHubProvider = new firebase.auth.GithubAuthProvider();

/**
 * What this means is that, we always want to trigger the google
 * pop up when ever we use the GoogleAuthProvider for Authentication
 * and Signin
 */
googleProvider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);
export const signInWithTwitter = () => auth.signInWithPopup(twitterProvider);
export const signInWithGithub = () => auth.signInWithPopup(gitHubProvider);

export default firebase;

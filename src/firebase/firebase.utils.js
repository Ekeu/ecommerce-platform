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

export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = firestore.collection(collectionKey);

  /**
   * Batch write ==> Group all our calls into one request
   */
  const batch = firestore.batch();

  objectsToAdd.forEach((obj) => {
    // Telling firebase give me a new document ref in this collection and randomly generate an id for me
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });

  /**
   * batch.commit() will fire off our batch request and it returns a Promise
   * and returns as a void value.
   */

  return await batch.commit();
};

export const convertCollectionsSnapshotToMap = (collections) => {
  const transformedCollection = collections.docs.map((doc) => {
    const { title, items } = doc.data();

    return {
      id: doc.id,
      routeName: encodeURI(title.toLowerCase()),
      title,
      items,
    };
  });
  return transformedCollection.reduce((acc, collection) => {
    acc[collection.title.toLowerCase()] = collection;
    return acc;
  }, {});
};

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      unsubscribe();
      resolve(userAuth)
    },reject)
  })
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

/**
 * This gives us access to the GoogleAuthProvider class
 * from the auth library
 */
export const googleProvider = new firebase.auth.GoogleAuthProvider();
export const twitterProvider = new firebase.auth.TwitterAuthProvider();
export const gitHubProvider = new firebase.auth.GithubAuthProvider();

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

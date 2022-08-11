import { initializeApp } from 'firebase/app';
import { 
    getAuth, 
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
} from 'firebase/auth';

import {
    getFirestore,
    doc, 
    getDoc,
    setDoc,
} from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDMuwohgZJq6vOx90sHVTHLvXQo4E54n2A",
    authDomain: "destiny-927de.firebaseapp.com",
    projectId: "destiny-927de",
    storageBucket: "destiny-927de.appspot.com",
    messagingSenderId: "163161026758",
    appId: "1:163161026758:web:b2f2a8ea47a6eaab4c27c7"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider =  new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: 'select_account'
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (authUser: any) => {
    const userDocRef = doc(db, 'users', authUser.uid);

    const userSnapshot = await getDoc(userDocRef);

    if (!userSnapshot.exists()) {
        const { displayName, email } = authUser;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
            });
        } catch (error) {
            console.log('error creating user', error);
        }
    }

    return userDocRef;
    
}
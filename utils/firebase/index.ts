import { FirebaseOptions, initializeApp } from 'firebase/app';
// Import the functions you need from the SDKs you need
// https://firebase.google.com/docs/web/setup#available-libraries
// import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig: FirebaseOptions = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_apiKey,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_authDomain,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_projectId,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_storageBucket,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_messagingSenderId,
  appId: process.env.NEXT_PUBLIC_FIREBASE_appId,

  measurementId: process.env.NEXT_PUBLIC_FIREBASE_measurementId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// export const analytics = getAnalytics(app);
export const firestore = getFirestore(app);

export default app;

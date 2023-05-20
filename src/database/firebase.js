import firebase from 'firebase/app';
import 'firebase/auth';

const app = firebase.initializeApp({
    apiKey: process.env.REACT_APP_FIREBASE_APP_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: proecess.env.REACT_APP_FIREBASE_APP_ID
});

// export authentication instance
export const auth = app.auth();

// export database instance
// to interact with the database
export const database = app.database();

// export storage instance
// to access storage
export const storage = app.storage();

// export general firebase app
export default app;
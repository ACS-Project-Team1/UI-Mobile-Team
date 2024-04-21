import { initializeApp } from 'firebase/app';
import { getAuth, signInWithCustomToken } from 'firebase/auth';

const firebaseConfig = {
  // Your Firebase configuration

  apiKey: "AIzaSyCqWh5Jqy5HkWb3DSII88LNevqCw4B8NCg",
  authDomain: "golftrack-950c5.firebaseapp.com",
  projectId: "golftrack-950c5",
  storageBucket: "golftrack-950c5.appspot.com",
  messagingSenderId: "318557414456",
  appId: "1:318557414456:web:d6b363a5a5f174612e72cd",
  measurementId: "G-C29T93JMMK"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth, signInWithCustomToken };

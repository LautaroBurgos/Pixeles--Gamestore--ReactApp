import {initializeApp} from "firebase/app";
import {getFirestore} from 'firebase/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyCcmpEZEjX-Lo7vrldLkxek7ShBmADJyOA",
    authDomain: "pixeles-gamestore-reactjs.firebaseapp.com",
    projectId: "pixeles-gamestore-reactjs",
    storageBucket: "pixeles-gamestore-reactjs.appspot.com",
    messagingSenderId: "653430420089",
    appId: "1:653430420089:web:b03f6097a4adb44479daa8"
  };
  const app = initializeApp(firebaseConfig);
  export const db= getFirestore(app);


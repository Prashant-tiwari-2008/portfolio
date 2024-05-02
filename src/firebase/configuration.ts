// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBZqMpWt0lI7ZhOCKj2x1S-MCC2ARNX23Q",
  authDomain: "portfolio-cd86c.firebaseapp.com",
  projectId: "portfolio-cd86c",
  storageBucket: "portfolio-cd86c.appspot.com",
  messagingSenderId: "948040241734",
  appId: "1:948040241734:web:149923b6971a9b7e76f047",
  measurementId: "G-2NK32GE3DC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);


export {analytics,db};
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAlWmoMBfeCLcwkyFu-txpBsLC7LWRSLZs",
  authDomain: "carrier-guidance-app-1e17d.firebaseapp.com",
  projectId: "carrier-guidance-app-1e17d",
  storageBucket: "carrier-guidance-app-1e17d.firebasestorage.app",
  messagingSenderId: "136292528332",
  appId: "1:136292528332:web:0942685e4cd073998fd269",
  measurementId: "G-WF1N4SEK21"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
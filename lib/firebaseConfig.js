// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAZpX3FrKuu4CdR4X19T2Da8naaZyBWKXY",
  authDomain: "pantry-tracker-3869c.firebaseapp.com",
  projectId: "pantry-tracker-3869c",
  storageBucket: "pantry-tracker-3869c.appspot.com",
  messagingSenderId: "404242075718",
  appId: "1:404242075718:web:93fd2f38464cfb1d743a47",
  measurementId: "G-JZLNDEXWCW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAF2BzWDzyXYBbTZRlTMe0-zAGSxpZWM3k",
  authDomain: "netflix-c162d.firebaseapp.com",
  projectId: "netflix-c162d",
  storageBucket: "netflix-c162d.appspot.com",
  messagingSenderId: "588028728072",
  appId: "1:588028728072:web:169398a18874e8ad4052bd",
  measurementId: "G-QBD06W18N7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();

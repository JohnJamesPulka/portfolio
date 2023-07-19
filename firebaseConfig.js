// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDcbZEPCpNLT8dUAzgiw2N8u04wNAyONIM",
  authDomain: "portfolio-b110b.firebaseapp.com",
  projectId: "portfolio-b110b",
  storageBucket: "portfolio-b110b.appspot.com",
  messagingSenderId: "150142907547",
  appId: "1:150142907547:web:42d4d0254d655efdb4423e",
  measurementId: "G-CEGEQTX1VG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
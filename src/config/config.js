// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB10PS7RUAwzvApdIijfBSWqV0uBONYLlI",
  authDomain: "altschool-exam-project-d5b35.firebaseapp.com",
  projectId: "altschool-exam-project-d5b35",
  storageBucket: "altschool-exam-project-d5b35.appspot.com",
  messagingSenderId: "74573243858",
  appId: "1:74573243858:web:0509553f8d2860e5a5140b",
  measurementId: "G-XBSXHGR351"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
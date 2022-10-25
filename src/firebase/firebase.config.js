/// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBtVvjBeFyZ62k9_OlrRA4hBv7FmbbafAg",
  authDomain: "details-course-app.firebaseapp.com",
  projectId: "details-course-app",
  storageBucket: "details-course-app.appspot.com",
  messagingSenderId: "945714988285",
  appId: "1:945714988285:web:c61518dd9219ae98796a94"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app
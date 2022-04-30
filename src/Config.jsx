// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBlOfhbSZQDK0xlWmRDM0F3SfNzRBi1Nvs",
  authDomain: "timenow-348514.firebaseapp.com",
  projectId: "timenow-348514",
  storageBucket: "timenow-348514.appspot.com",
  messagingSenderId: "837525921733",
  appId: "1:837525921733:web:431367bc18b3b677a7f5ac"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// initialize database
export const db = getDatabase(app);
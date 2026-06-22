// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
/// THIS IS VERY DENGER N CODE
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCK1wIgrIYdg4iLsNwOrVbOkVRL60OvTtg",
  authDomain: "fir-project-1-c9df4.firebaseapp.com",
  projectId: "fir-project-1-c9df4",
  storageBucket: "fir-project-1-c9df4.firebasestorage.app",
  messagingSenderId: "91548538384",
  appId: "1:91548538384:web:d9a0b106d4f2e69beb5c95",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

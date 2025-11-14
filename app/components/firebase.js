// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDg9OXz3mNVHoKcOy8T9frRd2zepBEMSY4",
  authDomain: "questudo-58f34.firebaseapp.com",
  projectId: "questudo-58f34",
  storageBucket: "questudo-58f34.firebasestorage.app",
  messagingSenderId: "24443994009",
  appId: "1:24443994009:web:82d239a3aaed365a735d08"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore()

export {db}
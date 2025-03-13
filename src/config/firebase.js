// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAtYAU95V-EHgVBnvQJOtj9wKrh4Spjdvw",
  authDomain: "invitaciones-19969.firebaseapp.com",
  projectId: "invitaciones-19969",
  storageBucket: "invitaciones-19969.firebasestorage.app",
  messagingSenderId: "923599926428",
  appId: "1:923599926428:web:522f12256bcc8b0b196959",
  measurementId: "G-TW7HVJHFH4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const db = getFirestore(app);

export { db }

export default app;
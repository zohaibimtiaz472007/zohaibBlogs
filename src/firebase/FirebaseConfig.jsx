// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCTbY--_299sZ79sii15H4waTJgVynf0y0",
  authDomain: "zohaib-s-blogs.firebaseapp.com",
  projectId: "zohaib-s-blogs",
  storageBucket: "zohaib-s-blogs.appspot.com",
  messagingSenderId: "174016275146",
  appId: "1:174016275146:web:4ac1dd4dec03f6843d4a33"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const fireDb = getFirestore(app)
export const storage = getStorage(app)




// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAKcOMq9Sx1dEglJc1kRYB3orCD4TRwAOI",
  authDomain: "proyecto-react-9036a.firebaseapp.com",
  projectId: "proyecto-react-9036a",
  storageBucket: "proyecto-react-9036a.appspot.com",
  messagingSenderId: "69184677167",
  appId: "1:69184677167:web:eba0f6b5b5cdba54b1adda"
};

initializeApp(firebaseConfig);

export const db = getFirestore()


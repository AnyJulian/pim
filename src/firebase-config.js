import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB9tMGiltVh9ZhDluT32VPDvyDAQoGr2Wo",
  authDomain: "pim2023-28f8f.firebaseapp.com",
  projectId: "pim2023-28f8f",
  storageBucket: "pim2023-28f8f.appspot.com",
  messagingSenderId: "882960998476",
  appId: "1:882960998476:web:c4b63e819dcb776e96d4e9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore();
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
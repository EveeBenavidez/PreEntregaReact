
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyCGqRTF7qEj-6WcOAbHMnU199xK5cWSVys",
  authDomain: "usuarios-7d85c.firebaseapp.com",
  projectId: "usuarios-7d85c",
  storageBucket: "usuarios-7d85c.appspot.com",
  messagingSenderId: "527002476098",
  appId: "1:527002476098:web:180892d9a75004df9217db"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const dbUsuarios = getFirestore(app);

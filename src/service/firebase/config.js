// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Objeto con info de la cuenta
const firebaseConfig = {
  apiKey: "AIzaSyA5LMIwO9UDzh_bPbuHNKvNkkVytLrLHZo",
  authDomain: "tiendazulu-bef9b.firebaseapp.com",
  projectId: "tiendazulu-bef9b",
  storageBucket: "tiendazulu-bef9b.appspot.com",
  messagingSenderId: "1076701220365",
  appId: "1:1076701220365:web:e66cbbc0960ff6a65b8f44"
};

// Inicializamos firebase y se pasa la configuracion como parametro
const app = initializeApp(firebaseConfig);


//exportamos la referencia para usar en nuestra app
export const db = getFirestore(app);
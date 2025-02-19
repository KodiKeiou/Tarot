// Importar las funciones necesarias del SDK
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database"; // Si usas Realtime Database
import { getFirestore } from "firebase/firestore"; // Si usas Firestore
import { getAuth } from "firebase/auth"; // Si usas autenticación

// Configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBXqi3MXa8vECYBuFtJCa_A5HDPK3Ud0ns",
  authDomain: "juego-bba10.firebaseapp.com",
  databaseURL: "https://juego-bba10-default-rtdb.firebaseio.com",
  projectId: "juego-bba10",
  storageBucket: "juego-bba10.firebasestorage.app",
  messagingSenderId: "818631334442",
  appId: "1:818631334442:web:5382beb62bf17b8c41c153",
  measurementId: "G-NJPGKB636F"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app); // Para usar Realtime Database
const firestore = getFirestore(app); // Para Firestore
const auth = getAuth(app); // Para autenticación

export { app, database, firestore, auth };

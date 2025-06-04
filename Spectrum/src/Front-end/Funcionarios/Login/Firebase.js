// Firebase.js
import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// 🔧 Configuração do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyB5wZHBtVj-pn0eq8gJW2dobBRhKR4Iaro",
  authDomain: "spectrum-7f226.firebaseapp.com",
  projectId: "spectrum-7f226",
  storageBucket: "Spectrum.com",
  messagingSenderId: "440897626415",
  appId: "1:440897626415:web:20b2b4d59f004c2aadc1da"
};

// Inicialização do Firebase
const app = initializeApp(firebaseConfig);

// Serviços do Firebase
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

// 🔹 Login com Google (async)
const login = async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    return result.user;
  } catch (error) {
    console.error("Erro no login com Google:", error);
    throw error;
  }
};

// 🔹 Cadastro com email e senha
const registerWithEmail = async (email, password) => {
  try {
    const result = await createUserWithEmailAndPassword(auth, email, password);
    return result.user;
  } catch (error) {
    console.error("Erro no cadastro:", error);
    throw error;
  }
};

// 🔹 Logout
const logout = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    console.error("Erro ao sair:", error);
  }
};

// 🔁 Exports
export {
  app,
  auth,
  provider,
  db,
  signInWithPopup, // <-- para permitir import direto onde precisar
  login,
  registerWithEmail,
  logout,
};

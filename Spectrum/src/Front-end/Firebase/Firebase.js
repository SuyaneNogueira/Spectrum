// Firebase/Firebase.js
import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider, 
  signInWithPopup,
  createUserWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
} from "firebase/auth";
import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

// 🔹 Configuração do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyB5wZHBtVj-pn0eq8gJW2dobBRhKR4Iaro",
  authDomain: "spectrum-7f226.firebaseapp.com",
  projectId: "spectrum-7f226",
  storageBucket: "spectrum-7f226.appspot.com",
  messagingSenderId: "440897626415",
  appId: "1:440897626415:web:20b2b4d59f004c2aadc1da"
};

// 🔹 Inicializa o Firebase
const app = initializeApp(firebaseConfig);

// 🔹 Serviços
const auth = getAuth(app);
const provider = new GoogleAuthProvider(); // This line creates the provider instance
const db = getFirestore(app);
const storage = getStorage(app);

// 🔹 Exports diretos de módulos do Firebase
export {
  auth,
  provider,
  db,
  storage,
  ref,
  uploadBytes,
  getDownloadURL,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
  GoogleAuthProvider, 
  doc,
  setDoc,
  getDoc
};

// 🔹 Função personalizada: login com Google
export const login = async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    return result.user;
  } catch (error) {
    console.error("Erro no login com Google:", error);
    throw error;
  }
};

// 🔹 Função personalizada: cadastro com email e senha
export const registerWithEmail = async (email, password) => {
  try {
    const result = await createUserWithEmailAndPassword(auth, email, password);
    return result.user;
  } catch (error) {
    console.error("Erro no cadastro:", error);
    throw error;
  }
};

// 🔹 Função personalizada: logout
export const logout = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    console.error("Erro ao sair:", error);
  }
};

// 🔹 Função personalizada: resetar senha
export const resetPassword = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email);
    console.log("Email de redefinição enviado");
  } catch (error) {
    console.error("Erro ao enviar redefinição de senha:", error);
    throw error;
  }
};
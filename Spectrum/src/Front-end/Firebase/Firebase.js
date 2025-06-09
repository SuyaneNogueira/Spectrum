import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// 🔧 Substitua pelas suas credenciais do Firebase
const firebaseConfig = {
   apiKey: "AIzaSyB5wZHBtVj-pn0eq8gJW2dobBRhKR4Iaro",
  authDomain: "spectrum-7f226.firebaseapp.com",
  projectId: "spectrum-7f226",
  storageBucket: "spectrum-7f226.firebasestorage.app",
  messagingSenderId: "440897626415",
  appId: "1:440897626415:web:20b2b4d59f004c2aadc1da"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);

// Serviços
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
export { signInWithPopup }; 

// 🔹 Login com Google
export const login = async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    return result.user;
  } catch (error) {
    console.error("Erro no login com Google:", error);
    throw error;
  }
};

// 🔹 Cadastro com email e senha
export const registerWithEmail = async (email, password) => {
  try {
    const result = await createUserWithEmailAndPassword(auth, email, password);
    return result.user;
  } catch (error) {
    console.error("Erro no cadastro:", error);
    throw error;
  }
};

// 🔹 Logout
export const logout = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    console.error("Erro ao sair:", error);
  }
};
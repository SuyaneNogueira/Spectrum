import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";

// Configurações do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDS9hr7VEvXaOVfKVZUmd1pwwMFaKBZED0",
  authDomain: "spectrum-tea.firebaseapp.com",
  projectId: "spectrum-tea",
  storageBucket: "spectrum-tea.appspot.com", // corrigido: era ".app", deveria ser ".appspot.com"
  messagingSenderId: "949098367871",
  appId: "1:949098367871:web:95fc885981126567a5a84a",
  measurementId: "G-M18MJ4VS0X"
};

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);

// Inicializa autenticação
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// Função de login com Google
const login = async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    return result.user;
  } catch (error) {
    console.error("Erro no login:", error);
  }
};

// Função de logout
const logout = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    console.error("Erro no logout:", error);
  }
};

export { auth, login, logout };

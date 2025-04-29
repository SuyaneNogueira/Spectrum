import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";

// Configurações do Firebase (copiadas do console)
const firebaseConfig = {
  apiKey: "AIzaSyDS9hr7VEvXaOVfKVZUmd1pwwMFaKBZED0",
  authDomain: "spectrum-tea.firebaseapp.com",
  projectId: "spectrum-tea",
  storageBucket: "spectrum-tea.firebasestorage.app",
  messagingSenderId: "949098367871",
  appId: "1:949098367871:web:95fc885981126567a5a84a",
  measurementId: "G-M18MJ4VS0X"
};

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Inicializa autenticação e provedor Google
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// Função de login
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
  await signOut(auth);
};

export { auth, login, logout };

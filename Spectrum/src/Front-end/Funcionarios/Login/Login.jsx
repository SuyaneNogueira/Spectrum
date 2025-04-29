import { useState } from "react";
import { login } from "../Firebase";
import "./Login.css";

function Login() {
  const [user, setUser] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

  const handleLogin = async () => {
    try {
      const loggedInUser = await login();
      if (loggedInUser) {
        setUser(loggedInUser);
        setShowPopup(true);
        setTimeout(() => {
          window.location.href = "/"; // Redireciona para a home do site
        }, 2000);
      }
    } catch (error) {
      console.error("Erro ao fazer login:", error);
    }
  };

  return (
    <div className="login-container">
      <h2>Bem-vindo ao Chat</h2>
      <button onClick={handleLogin}>Entrar com Google</button>
      {showPopup && (
        <div className="popup">
          <p>Login bem-sucedido! Redirecionando...</p>
        </div>
      )}
    </div>
  );
}

export default Login;

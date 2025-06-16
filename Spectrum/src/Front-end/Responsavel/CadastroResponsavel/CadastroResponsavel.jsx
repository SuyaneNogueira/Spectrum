import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './CadastroResponsavel.css'
function CadastroResponsavel() {
      const [termosAceitos, setTermosAceitos] = useState(false);
      const [nome, setNome] = useState('');
      const [email, setEmail] = useState('');
      const [senha, setSenha] = useState('');
      const [erro, setErro] = useState('');
      const navigate = useNavigate();
    
      const handleGoogleLogin = async () => {
        try {
          const result = await signInWithPopup(auth, provider);
          console.log('Login Google:', result.user);
          navigate('/Cadastro_Profissionais_Dois');
        } catch (error) {
          console.error('Erro no login com Google:', error);
        }
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
    
        if (!nome || !email || !senha) {
          setErro('Preencha todos os campos.');
          return;
        }
    
        if (!termosAceitos) {
          setErro('Você precisa aceitar os termos de uso.');
          return;
        }
    
        setErro('');
        navigate('loginResponsavel');
      };
  return (
    <div className='conteiner_geral'> 
    <div className='div_geral2'>    
          <div className="cadastro">
        <h1 className='titulo'>Cadastro</h1>
     <form onSubmit={handleSubmit} className="inputs_cadastro">
     <label>Nome</label>
       <input type="text" placeholder="Seu nome completo" value={nome} 
       onChange={(e) => setNome(e.target.value)}/>

     <label>Email</label>
       <input type="email" placeholder="Seu email" value={email} 
       onChange={(e) => setEmail(e.target.value)}/>

          <label>Senha</label>
          <input type="password" placeholder="Sua senha" value={senha} 
          onChange={(e) => setSenha(e.target.value)}/>

          <button type="button" className="google-button" onClick={handleGoogleLogin}>
            <span className="google">G</span><span className="google_google">oogle</span>
          </button>

          <div className="termos-container" onClick={() => setTermosAceitos(!termosAceitos)}>
            <div className={`termo-circulo ${termosAceitos ? 'ativo' : ''}`} />
            <span >Li e aceito os <Link className='termos' 
            to='/termos'>Termos de Uso</Link></span>
          </div>

          {erro && <div className="erro-mensagem">{erro}</div>}

          <button type="submit" className="Cadastro_button">Cadastrar</button>

          <div className="login-link">
            Já possui uma conta? <Link to='loginResponsavel'>Entrar</Link>
          </div>
        </form>
      </div>
        <div className="cadastro_imagem">
        <img src="/Spectrum.png" alt="Ilustração cérebro" />
      </div>
      </div>
    </div>
  )
}

export default CadastroResponsavel

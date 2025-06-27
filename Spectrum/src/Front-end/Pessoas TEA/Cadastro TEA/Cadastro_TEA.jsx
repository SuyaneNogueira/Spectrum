import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth, provider, signInWithPopup } from '../../Firebase/Firebase';
import './Cadastro_TEA.css'; // O CSS deste arquivo será atualizado
import Modal_Termos_de_Uso from '../../Profissionais/Modal Termos de Uso/Modal_Termos_de_Uso';

function Cadastro_TEA() {
 const [termosAceitos, setTermosAceitos] = useState(false);
 const [nome, setNome] = useState('');
 const [email, setEmail] = useState('');
 const [senha, setSenha] = useState('');
 const [erro, setErro] = useState('');
 const [termosAbertos, setTermosAbertos] = useState(false); // Renomeei de modalAberto para consistência
 const navigate = useNavigate();

 const salvarLocalmente = (usuario) => {
  const listaSalva = JSON.parse(localStorage.getItem('usuariosTEA')) || [];
  const novaLista = [...listaSalva, usuario];
  localStorage.setItem('usuariosTEA', JSON.stringify(novaLista));
 };

 const handleGoogleLogin = async () => {
  try {
   const result = await signInWithPopup(auth, provider);
   const usuarioGoogle = {
    id: Date.now(),
    nome: result.user.displayName || '',
    email: result.user.email || '',
    senha: 'autenticado_google',
   };
   salvarLocalmente(usuarioGoogle);
   navigate('/FormularioCadastroTea');
  } catch (error) {
   console.error('Erro no login com Google:', error);
  }
 };

const handleSalvar = async (e) => {
 if (!nome || !email || !senha) {
  e.preventDefault();
  setErro('Preencha todos os campos.');
  return;
 }

 if (!termosAceitos) {
  e.preventDefault();
  setErro('Você precisa aceitar os termos de uso.');
  return;
 }

 const novoUsuario = {
  id: Date.now(),
  nome,
  email,
  senha,
 };

 salvarLocalmente(novoUsuario);

 // Futuramente: salva no MySQL via API
 // await salvarNoBackend(novoUsuario);

 setErro('');
   navigate('/FormularioCadastroTea'); // Adicionei o navigate aqui para simular o fluxo
};

// Preparado para o back-end (MySQL)
const salvarNoBackend = async (usuario) => {
 try {
  const response = await fetch('http://localhost:3001/usuariosTEA', {
   method: 'POST',
   headers: { 'Content-Type': 'application/json' },
   body: JSON.stringify(usuario),
  });

  if (!response.ok) {
   throw new Error('Erro ao salvar no banco de dados');
  }

  console.log('Usuário salvo no backend com sucesso');
 } catch (error) {
  console.error('Erro ao salvar no back-end:', error);
 }
};

 return (
  <div className="cadastro-container-Tea">
   <div className="cadastro-form-section-do-Tea">
    <div className="h1-do-cadastro-legal-do-Tea">
     <h1>Cadastro</h1>
    </div>
    <form onSubmit={handleSalvar} className="cadastro-form-do-Tea"> {/* Mudado para onSubmit={handleSalvar} */}
     <label>Nome</label>
     <input
      type="text"
      placeholder="Digite seu nome completo"
      value={nome}
      onChange={(e) => setNome(e.target.value)}
     />

     <label>Email</label>
     <input
      type="email"
      placeholder="Digite seu email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
     />

     <label>Senha</label>
     <input
      type="password"
      placeholder="Digite sua senha"
      value={senha}
      onChange={(e) => setSenha(e.target.value)}
     />

     <button type="button" className="google-button-do-Tea" onClick={handleGoogleLogin}>
      <span className="google-g-do-Tea">G</span>
      <span className="google-oogle">oogle</span>
     </button>

     {/* NOVO BLOCO DOS TERMOS DE USO */}
     <div className="termos-container_interesse"> {/* Use a mesma classe do outro componente */}
      <div className={`termo-circulo_interesse ${termosAceitos ? 'ativo' : ''}`} onClick={() => setTermosAceitos(!termosAceitos)} />
      <p>
       Li e aceito os{' '}
       <span
        onClick={(e) => { e.stopPropagation(); setTermosAbertos(true); }} // Garante que clicar no texto só abre o modal
        style={{ color: '#710634', cursor: 'pointer' }}
       >
        Termos de Uso
       </span>
      </p>
     </div>
     {/* FIM DO NOVO BLOCO */}

     {erro && <div className="erro-mensagem-do-Tea">{erro}</div>}

     {/* Ajustei o Link para Button e adicionei o disabled e style diretamente aqui */}
     <div className='botao_proximo_interesse'> {/* Reutilizando a classe do outro componente */}
      <button
       type="submit" // Mudado para submit
       className="btn-proximo_interesse" // Reutilizando a classe
       disabled={!termosAceitos}
       style={{
        opacity: termosAceitos ? 1 : 0.6,
        cursor: termosAceitos ? 'pointer' : 'not-allowed'
       }}
      >
       Próximo
      </button>
     </div>

     <div className="login-link-do-Tea">
      Já possui uma conta? <Link to="/loginprofissionais">Entrar</Link>
     </div>
    </form>
   </div>

   <div className="cadastro-imagem-section-do-Tea">
    <img src="/Spectrum.png" alt="Logo" />
   </div>

   <Modal_Termos_de_Uso isOpen={termosAbertos} onClose={() => setTermosAbertos(false)} />
  </div>
 );
}

export default Cadastro_TEA;
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './LoginFuncionario.css'

function LoginFuncionario() { 

    const [inputNomeLogin, setInputNomeLogin] = useState('')
    const [inputEmailLogin, setInputEmailLogin] = useState('')
    const [inputSenhaLogin, setInputSenhaLogin] = useState('')

    const Navegar = useNavigate()
    function LoginSpectrum() {

    // detectar campos nao preenchidos no cadastro
    if (!inputNomeLogin || !inputEmailLogin || !inputSenhaLogin) {
        alert("Por favor, preencha todos os campos.");
        return;
      }
    
      // Pegando todos os cadastros salvos no localStorage
      const cadastrosSalvos = JSON.parse(localStorage.getItem('cadastros')) || [];
    
      // Verificando se existe um usuário com o email e senha informados
      const usuarioEncontrado = cadastrosSalvos.find(
        (user) =>
          user.email === inputEmailLogin &&
          user.senha === inputSenhaLogin &&
          user.nome === inputNomeLogin
      );
    
      if (usuarioEncontrado) {
        alert(`Seja bem-vindo(a) de volta, ${usuarioEncontrado.nome}`);
        Navegar('/');
      } else {
        alert("Email, senha ou nome incorretos. Verifique os dados.");
      }
    }
    
  return (
 <div className='background-login-funcionario'>
        <div className='login-funcionario'>
          
    <h2>Login</h2>
    {/* inicio  */}
    <div>
    <div>
    <p>Nome Completo:</p> <input  type="text" placeholder='Nome Completo' value={inputNomeLogin} onChange={(e) => setInputNomeLogin(e.target.value)}/>  
    </div>

    <div>
    <p>Email: </p> <input type="text" placeholder='seu@email.com' value={inputEmailLogin} onChange={(e) => setInputEmailLogin(e.target.value)} />
    </div>

    <div>
    <p>Senha:</p>  <input type="password" placeholder='minimo de 6 caracteres' value={inputSenhaLogin} onChange={(e) => setInputSenhaLogin(e.target.value)}  />
    </div>
    {/* fim  */}</div>

    <div>
    <div>
    <button onClick={LoginSpectrum}>Login</button>
    </div>
    <div>
    você ainda não possui cadastro? <button>Cadastre-se</button>
    </div>
    </div>
  
    </div>
  <div className='img-login-funcionario'>
    <div className='desbugar-imagem'>
<img className='imagem-imagem-login-fun' src="Spectrum.png" alt="" />
</div>
  </div>
</div>
)
  
}

export default LoginFuncionario

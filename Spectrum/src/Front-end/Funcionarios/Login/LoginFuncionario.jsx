import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
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
          <div className='tela-funcionarios'>
          <div className='container-login-funcionarios'>
    
    {/* inicio  */}<div className='todos-inputs-funcionarios'>
    <div className="alinhamento-funcionarios">
    <h2 className='titulo-login-funcionario'>Login</h2>
    <div className='conjunto-input-funcionario'>
    <p className='p-inputs-funcionario'>Nome:</p> 
    <input className='input1-funcionario' type="text" placeholder='Seu nome' value={inputNomeLogin} onChange={(e) => setInputNomeLogin(e.target.value)}/>  
    </div>

    <div className='conjunto-input-funcionario'>
    <p className='p-inputs-funcionario'>Email: </p> 
    <input className='input1-funcionario' type="text" placeholder='seu@email.com' value={inputEmailLogin} onChange={(e) => setInputEmailLogin(e.target.value)} />
    </div>

    <div className='conjunto-input-funcionario'>
    <p className='p-inputs-funcionario'>Senha:</p>  
    <input className='input1-funcionario' type="password" placeholder='minimo de 6 caracteres' value={inputSenhaLogin} onChange={(e) => setInputSenhaLogin(e.target.value)}  />
    </div> 
      </div>
      
    {/* fim  */}</div>

    <div className='botao-login-funcionario'>
      <div className='espaco-funcionario'></div>
    <div className='div-botao-logar-funcionarios'>
    <button className='botao-login-interesse' onClick={LoginSpectrum}>Login</button>
    </div>
    <div className='ja-possui-conta-funcionarios'>
    você ainda não possui cadastro? <Link to="/funcionarioC">Cadastre-se</Link>
    </div>
    </div>
  
    </div>
</div>
  <div className='img-login-funcionario'>
    <div className='desbugar-imagem'>
<img className='imagem-imagem-login-fun' src="Spectrum.png" alt="" />
</div>
  </div>
</div>
</div>
)
  
}

export default LoginFuncionario

import React from 'react'
import './Login_TEA.css'
import { Link } from 'react-router-dom'

function Login_TEA() {
  return (
    <div className='all-container-login-tea'>
      <div className='input-login-tea'>
        <div className='titulo-do-login-tea'>
            <h3>LOGIN</h3>
        </div>
            <div className='div-inputs-lindos-logintea'>
                   <div className='inputs-legal-tea-um'>
                        <p>Email:</p>
                        <input type="text"/>
                   </div>
                   <div className='inputs-legal-tea-dois'>
                      <p>Senha:</p>
                      <input type="text"/>
                   </div>
                   <div className='esqueceu-a-senha-tea'>
                    <p>Esqueceu sua senha?</p>
                   </div>
            </div>  
            <div className='teste-cadastro-google'>
                   <p>Cadastro google</p>
            </div>
            <div className='botão-login-tea-tea'>
                    <button className='botao-login-do-tea'>Login</button>
                    <div>
                      <p>Não possui cadastro? <Link to = "/cadastrotea" >Cadastre-se</Link> </p>
                    </div>
            </div>
            
      </div>
      <div className='img-login-tea'>
        <img className='imagem-do-login-tea' src="Spectrum.png" alt="" />
      </div>
    </div>
  )
}

export default Login_TEA

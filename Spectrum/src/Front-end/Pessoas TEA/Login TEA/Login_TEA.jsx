import React from 'react'
import './Login_TEA.css'
import { Link } from 'react-router-dom'

function Login_TEA() {
  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      console.log('Login Google:', result.user);
      navigate('/Cadastro_Profissionais_Dois');
    } catch (error) {
      console.error('Erro no login com Google:', error);
    }
  };

  return (
    <div className='all-container-login-tea'>
      <div className='input-login-tea'>
        <div className='titulo-do-login-tea'>
            <h3 className='h3-login-tea'>LOGIN</h3>
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
            <button type="button" className="google-button" onClick={handleGoogleLogin}>
            <span className="google-g">G</span><span className="google-oogle">oogle</span>
          </button>

         <p style={{ fontSize: '14px', textAlign: 'center', marginTop: '10px' }}>
           Ao se cadastrar, você concorda com os{' '}
            <span 
              onClick={() => setTermosAbertos(true)} 
             style={{ color: '#710634', textDecoration: 'none', cursor: 'pointer' }}
            >
            Termos de Uso
          </span>.
          </p>
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

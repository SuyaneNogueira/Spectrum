import React from 'react'

function Login_Responsavel() {
  return (
    <div>
            <div className='div-geral_login'>
        <div className='titulo'>
            <h3>Login</h3>
        </div>
            <div className='div-inputs-lindos-logintea'>
                   <div className='Email'>
                        <p>Email:</p>
                        <input type="text"/>
                   </div>
                   <div className='Senha'>
                      <p>Senha:</p>
                      <input type="text"/>
                   </div>
                   <div className='termosDeUso'>
                    <button>termos</button>
                   </div>
            </div>  
            <div className='div-button_login'>
                    <button className='button_login'>Login</button>
                    <div>
                      <p>Não possui cadastro?</p>
                    </div>
            </div>
            
      </div>
      <div className='imagem_loginR'>
        <img className='imagem_R' src="Spectrum.png" alt="" />
      </div>
    </div>
  )
}

export default Login_Responsavel

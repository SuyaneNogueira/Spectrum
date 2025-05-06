import React from 'react'
import './Tela_Inicial_TEA.css'

function Tela_Inicial_tEA() {
  return (
    <div className='container-inicial-tea'>
      <div className='navbar-tea-inicial'>
        <div className='img-navbar-tea-inicial'>
          <img src="tela de contrato.png" alt="" />
            </div>
               <div className='button-tea-inicial'>
                <button className='butao-custom-tea-inicial'>Informações</button>
                <button className='butao-custom-tea-inicial'>Estratégias</button>
                <button className='butao-custom-tea-inicial'>Especialistas</button>
                <button className='butao-custom-tea-inicial'>Chat</button>
          </div>
      </div>
      
      <div className='container-pagina-inicial-tea'>
        <div className='div-text-usuario'>
           <div>
            
           </div>
        </div>
        <div className='div-foto-perfil-e-butao'>

        </div>
      </div>

    </div>
  )
}

export default Tela_Inicial_tEA

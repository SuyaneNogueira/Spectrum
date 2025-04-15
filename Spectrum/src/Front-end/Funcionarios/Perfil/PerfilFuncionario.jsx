import React from 'react'
import './PerfilFuncionario.css'

function PerfilFuncionario() {
  return (
    <div className='container-geral-funcionarios'>
      <div className='nao-navbar-funcionario'>
        <div className='div-imagem-funcionarios'>
          <img src="tela de contrato.png" alt="" />
         </div>
         <div className='titulo-funcionarios-perfil'>
         <h1>Perfil do Funcionario</h1>
   </div>
     <div className='botao-perfil-funcionarios'>
       <button className='botao-voltar-perfil-funcionarios'>VOLTAR</button>
    </div>
</div>
    <div className='all-divs-funcionarios'>
       <div className='div-um-funcionarios'>  
          </div>
     <div className='div-dois-funcionarios'> 
   </div>       
</div>

    </div>
  )
}

export default PerfilFuncionario
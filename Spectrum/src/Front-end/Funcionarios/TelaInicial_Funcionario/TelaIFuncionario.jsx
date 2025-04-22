import React from 'react'
import '../NavBarFuncionario/NavbarFuncionario.jsx'
import './TelaIFuncionario.css'
import NavbarFuncionario from '../NavBarFuncionario/NavbarFuncionario.jsx'
function TelaIFuncionario() {
  return (
    <div className='tela-geral-funcionarios' >
 <NavbarFuncionario/>

  <div className='div-conjunto-geral'>
     <div className='div-button-um'>
     <button className='button-geral-funcionarios-um'>
      CHAT
      </button>
  </div>

<div className='div-button-dois'>
<button className='button-geral-funcionarios-dois'>
  ANOTAÇÕES
</button>
</div>
</div>
 
    </div>
  )
}

export default TelaIFuncionario

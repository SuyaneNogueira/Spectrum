import React from 'react'
import { Link} from 'react-router-dom'
import './Modal.css'
function Modal_cadastros() {
  return (
    <div className='modal_cadastro'>
        <div className='figo'>
      <div className='div-2'>
        <div className='entrar-como'>
           <h3>Entrar Como:</h3>   
        </div>
        <div className='todas_divs'>
        <div className='modal_div_todos'>
            <button className='tea'>Pessoa com TEA</button>
            {/* Pessoa_Tea */}
        </div>
        <div className='modal_div_todos'>
            <Link to='Especialista_Modal' className='especialista'>Especialista</Link>
            
        </div>
        <div className='modal_div_todos'>
            <button className='responsavel'>Responsavel por pessoa TEA</button>
            {/* Responsavel por pessoa TEA */}
        </div>
        <div className='modal_div_todos'>
            <Link to='Tenho_Interesse' className='interesse'>Tenho interesse</Link>
        
         </div>
          </div>   
        </div>
      </div>
    </div>
  )
}

export default Modal_cadastros

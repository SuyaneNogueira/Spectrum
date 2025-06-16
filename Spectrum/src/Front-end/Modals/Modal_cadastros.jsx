import React, { useState } from 'react';
import './Modal.css';
import { Link, useNavigate } from 'react-router-dom'

function Modal_cadastros({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <div className="modal-cadastro">
      <div className="modal_c">
        <div className='modal-arruma_c'>
        <div className="texts_principal_modal_c">
          <h2 className='titulo_modal_cadastro'>Entrar como</h2>
          <div className="links_modal_cadastro">
            <Link to="cadastroprofissionais" className='link_modal_c'>Especialista</Link>
            <Link to="cadastrotea" className='link_modal_c'>Pessoa com TEA</Link>
           <Link to="cadastrointeresse" className='link_modal_c'>Tenho interesse</Link>
            <Link to="cadastroResponsavel" className='link_modal_c'>Sou Responsável</Link>
          </div>
          
        </div>
          <div className='div_do_xzinho_c'>
            <button className='x_arruma_c' onClick={onClose}>X</button></div>
        </div>

        <div className='modal-arrumar'>
          {children}
        </div>
      </div>
    </div>
  );
}

export default Modal_cadastros;
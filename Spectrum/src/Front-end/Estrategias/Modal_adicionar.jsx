import React, { useState } from 'react';
import "./Modal_adicionar.css"; 

function Modal_adicionar({ isOpen, onClose, children }) {
    if (!isOpen) return null;

    return (

    <div className="modal-overlay-adicionar">
      
        <div className="elements-adicionar-estrategias">
        <div className="titulo-element-um">
            <h3>Coloque o titulo de sua preferência</h3>
            <textarea name="" id=""></textarea>
        </div>
        <div className="conteudo-element-dois">
            <h3>Coloque o conteúdo de sua preferência</h3>
            <textarea name="" id=""></textarea>
        </div>

        <div className='div_do_xzinho2'>
            <button className='x_arruma2' onClick={onClose}>X</button>
        </div>
    

        <div className='modal-arrumar2'>
          {children}
        </div>
        </div>
      </div>
  );
}


export default Modal_adicionar;
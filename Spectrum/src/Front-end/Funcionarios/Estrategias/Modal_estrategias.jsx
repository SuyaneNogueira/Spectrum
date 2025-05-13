import React, { useState } from 'react';
import './Modal_estrategias.css';

function Modal_estrategias({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <div className='modal-arruma'>

<h1>4tggrgtrthsyhythyh</h1>
          <button onClick={onClose}>X</button>







        </div>
        <div className='modal-arrumar'>
          {children}
        </div>
      </div>
    </div>
  );
}

export default Modal_estrategias;
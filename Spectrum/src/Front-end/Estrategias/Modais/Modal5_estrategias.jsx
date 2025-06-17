import React, { useState } from 'react';
import './Modal2_estrategias.css';

function Modal5_estrategias({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay2">
      <div className="modal2">
        <div className='modal-arruma2'>
        <div className="texts_principal_modal2">
        <h1 className='text_protetoresauriculares2'>
  Praticar <span className="destaque1_modal2">técnicas de respiração</span>, <span className="destaque1_modal2">meditação</span> ou outras formas de <span className="destaque1_modal2">relaxamento</span> pode ser extremamente benéfico para reduzir a <span className="destaque1_modal2">ansiedade causada por sons altos</span>.
</h1>
<h1 className='text_protetoresauriculares2'>
  Para pessoas com TEA, técnicas como a <span className="destaque1_modal2">respiração diafragmática</span>, onde se respira profundamente pelo abdômen, podem ajudar a reduzir os níveis de <span className="destaque1_modal2">cortisol</span>, o <span className="destaque1_modal2">hormônio do estresse</span>, promovendo uma <span className="destaque1_modal2">sensação de calma</span>. A <span className="destaque1_modal2">meditação mindfulness</span>, que envolve focar a atenção no <span className="destaque1_modal2">momento presente</span>, também pode ser útil para <span className="destaque1_modal2">acalmar a mente</span>.
</h1>
</div>
          <div className='div_do_xzinho2'>
            <button className='x_arruma2' onClick={onClose}>X</button></div>
        </div>
<div className="video_sobre_assunto2">
<iframe width="560" height="315" src="https://www.youtube.com/embed/6LlSimh_FcY?si=H5K8MCr6r_Mk12Mr" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>
        <div className='modal-arrumar2'>
          {children}
        </div>
      </div>
    </div>
  );
}

export default Modal5_estrategias;

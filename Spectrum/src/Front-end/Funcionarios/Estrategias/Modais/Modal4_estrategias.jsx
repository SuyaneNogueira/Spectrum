import React, { useState } from 'react';
import './Modal2_estrategias.css';

function Modal3_estrategias({ isOpen, onClose, children }) {
    if (!isOpen) return null;

  return (
      <div className="modal-overlay2">
      <div className="modal2">
        <div className='modal-arruma2'>
        <div className="texts_principal_modal2">
        <h1 className='text_protetoresauriculares2'>
  <span className="destaque1_modal2">Informar amigos, familiares e colegas</span> sobre a <span className="destaque1_modal2">sensibilidade ao som</span> é crucial para obter <span className="destaque1_modal2">apoio e compreensão</span>. Explicar a necessidade de <span className="destaque1_modal2">ambientes mais silenciosos</span> pode ajudar a criar um <span className="destaque1_modal2">ambiente adaptado</span> às necessidades de uma pessoa com TEA.
</h1>
<h1 className='text_protetoresauriculares2'>
  Por exemplo, ao participar de <span className="destaque1_modal2">reuniões</span> ou <span className="destaque1_modal2">eventos sociais</span>, pedir que o <span className="destaque1_modal2">volume da música seja reduzido</span> ou que as <span className="destaque1_modal2">conversas sejam mantidas em tom mais baixo</span> pode fazer uma <span className="destaque1_modal2">grande diferença</span> no conforto auditivo.
</h1>
</div>
          <div className='div_do_xzinho2'>
            <button className='x_arruma2' onClick={onClose}>X</button></div>
        </div>
<div className="video_sobre_assunto2">
<iframe width="572" height="322" src="https://www.youtube.com/embed/SlgOpROsqsI?si=Etx0MDh-vasFstSu" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>
        <div className='modal-arrumar2'>
          {children}
        </div>
      </div>
    </div>
  )
}

export default Modal3_estrategias

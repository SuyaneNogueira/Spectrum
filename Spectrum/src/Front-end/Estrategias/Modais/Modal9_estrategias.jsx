import React, { useState } from 'react';
import './Modal2_estrategias.css';

function Modal9_estrategias({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
   <div className="modal-overlay2">
      <div className="modal2">
        <div className='modal-arruma2'>
        <div className="texts_principal_modal2">
        <h1 className='text_protetoresauriculares2'>
  O <span className="destaque1_modal2">suporte emocional</span> é crucial durante <span className="destaque1_modal2">períodos de mudança</span>. Ter alguém para <span className="destaque1_modal2">conversar</span> e <span className="destaque1_modal2">expressar sentimentos</span> pode proporcionar <span className="destaque1_modal2">conforto</span> e <span className="destaque1_modal2">validação</span>.
</h1>
<h1 className='text_protetoresauriculares2'>
  Esse suporte pode vir de <span className="destaque1_modal2">amigos</span>, <span className="destaque1_modal2">familiares</span> ou <span className="destaque1_modal2">profissionais</span>, como terapeutas ou conselheiros. <span className="destaque1_modal2">Sessões regulares</span> de conversa podem ajudar a pessoa a <span className="destaque1_modal2">processar suas emoções</span> e desenvolver <span className="destaque1_modal2">estratégias saudáveis</span> para lidar com a mudança.
</h1>
</div>
          <div className='div_do_xzinho2'>
            <button className='x_arruma2' onClick={onClose}>X</button></div>
        </div>
<div className="video_sobre_assunto2">
<iframe width="560" height="315" src="https://www.youtube.com/embed/Os9LURj5syI?si=VNsoxOVTt3kGHrzJ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>
        <div className='modal-arrumar2'>
          {children}
        </div>
      </div>
    </div>
  )
}

export default Modal9_estrategias

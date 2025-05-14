import React, { useState } from 'react';
import './Modal2_estrategias.css';

function Modal7_estrategias({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay2">
      <div className="modal2">
        <div className='modal-arruma2'>
        <div className="texts_principal_modal2">
        <h1 className='text_protetoresauriculares2'>
  A <span className="destaque1_modal2">preparação antecipada</span> é fundamental para <span className="destaque1_modal2">minimizar o impacto</span> das mudanças. Isso pode incluir <span className="destaque1_modal2">reuniões</span> ou <span className="destaque1_modal2">conversas regulares</span> para discutir as <span className="destaque1_modal2">mudanças iminentes</span>, fornecendo <span className="destaque1_modal2">detalhes específicos</span> sobre o que vai mudar, quando e por quê.
</h1>
<h1 className='text_protetoresauriculares2'>
  Além disso, é útil fornecer <span className="destaque1_modal2">materiais de leitura</span> ou <span className="destaque1_modal2">vídeos explicativos</span> que possam ajudar a pessoa a <span className="destaque1_modal2">entender melhor</span> a situação. A <span className="destaque1_modal2">comunicação</span> deve ser <span className="destaque1_modal2">clara e contínua</span>, permitindo que a pessoa <span className="destaque1_modal2">faça perguntas</span> e <span className="destaque1_modal2">expresse suas preocupações</span>.
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
  );
}

export default Modal7_estrategias;

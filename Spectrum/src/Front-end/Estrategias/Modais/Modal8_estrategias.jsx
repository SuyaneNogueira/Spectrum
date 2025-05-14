import React, { useState } from 'react';
import './Modal2_estrategias.css';

function Modal8_estrategias({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay2">
      <div className="modal2">
        <div className='modal-arruma2'>
        <div className="texts_principal_modal2">
        <h1 className='text_protetoresauriculares2'>
  <span className="destaque1_modal2">Ferramentas visuais</span> são extremamente eficazes para ajudar na <span className="destaque1_modal2">compreensão</span> e <span className="destaque1_modal2">adaptaçã</span> a novas rotinas. <span className="destaque1_modal2">Agendas visuais</span> podem incluir não apenas horários, mas também <span className="destaque1_modal2">descrições detalhadas</span> das atividades, com <span className="destaque1_modal2">imagens ou ícones</span> que representem cada tarefa.
</h1>
<h1 className='text_protetoresauriculares2'>
  Isso é especialmente útil para pessoas que têm <span className="destaque1_modal2">dificuldades com mudanças</span> ou que se beneficiam de <span className="destaque1_modal2">estímulos visuais</span>. Além disso, criar <span className="destaque1_modal2">roteiros detalhados</span> que descrevem <span className="destaque1_modal2">passo a passo</span> o que acontecerá pode ajudar a <span className="destaque1_modal2">reduzir a incerteza</span> e a <span className="destaque1_modal2">ansiedade</span>.
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

export default Modal8_estrategias

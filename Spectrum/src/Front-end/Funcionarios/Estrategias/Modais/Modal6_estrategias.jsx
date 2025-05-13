import React, { useState } from 'react';
import './Modal2_estrategias.css';

function Modal2_estrategias({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay2">
      <div className="modal2">
        <div className='modal-arruma2'>
        <div className="texts_principal_modal2">
        <h1 className='text_protetoresauriculares2'>
  Ouvir <span className="destaque1_modal2">música suave</span> ou <span className="destaque1_modal2">ruído branco</span> pode ser uma maneira eficaz de <span className="destaque1_modal2">mascarar sons altos</span> indesejados e criar um <span className="destaque1_modal2">ambiente mais controlado</span>.
</h1>
<h1 className='text_protetoresauriculares2'>
  Para pessoas com TEA, a <span className="destaque1_modal2">música clássica</span>, <span className="destaque1_modal2">sons da natureza</span> (como chuva ou ondas do mar), e <span className="destaque1_modal2">playlists relaxantes</span> podem ajudar a melhorar a <span className="destaque1_modal2">concentração</span> e promover o <span className="destaque1_modal2">relaxamento</span>. <span className="destaque1_modal2">Aplicativos de ruído branco</span>, que reproduzem sons constantes como ventilador ou chuva, são úteis para <span className="destaque1_modal2">bloquear ruídos</span> e criar um <span className="destaque1_modal2">ambiente tranquilo</span>.
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

export default Modal2_estrategias;

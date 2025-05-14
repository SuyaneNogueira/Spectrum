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
    Identificar e utilizar <span className="destaque1_modal2">áreas silenciosas</span> pode proporcionar um <span className="destaque1_modal2">alívio significativo</span> para pessoas com TEA. Ambientes como <span className="destaque1_modal2">bibliotecas</span>, <span className="destaque1_modal2">parques tranquilos</span> ou <span className="destaque1_modal2">salas de meditação</span> são ideais para momentos de <span className="destaque1_modal2">sobrecarga sensorial</span>.
  </h1>
  <h1 className='text_protetoresauriculares2'>
    Em casa, criar um <span className="destaque1_modal2">espaço tranquilo</span> com <span className="destaque1_modal2">isolamento acústico</span> pode ser extremamente benéfico. Isso pode incluir o uso de <span className="destaque1_modal2">cortinas pesadas</span>, <span className="destaque1_modal2">tapetes</span> e <span className="destaque1_modal2">móveis estofados</span> para absorver o som, além de <span className="destaque1_modal2">plantas</span> que ajudam a criar uma <span className="destaque1_modal2">atmosfera calma</span>.
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

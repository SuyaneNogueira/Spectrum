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
  Evitar <span className="destaque1_modal2">horários barulhentos</span> ou <span className="destaque1_modal2">locais ruidosos</span> é uma estratégia prática para minimizar a <span className="destaque1_modal2">exposição ao ruído</span>. Para pessoas com TEA, <span className="destaque1_modal2">planejar atividades</span> em horários menos movimentados pode reduzir significativamente o <span className="destaque1_modal2">estresse</span>.
</h1>
<h1 className='text_protetoresauriculares2'>
  Por exemplo, fazer <span className="destaque1_modal2">compras no início da manhã</span> ou no <span className="destaque1_modal2">final da noite</span>, quando as lojas estão menos cheias, pode ser mais tranquilo. Da mesma forma, escolher <span className="destaque1_modal2">rotas alternativas</span> para evitar o <span className="destaque1_modal2">tráfego intenso</span> pode ajudar a evitar o <span className="destaque1_modal2">barulho da cidade</span>.
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

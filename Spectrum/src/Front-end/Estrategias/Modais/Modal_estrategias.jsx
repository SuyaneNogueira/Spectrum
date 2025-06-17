import React, { useState } from 'react';
import './Modal2_estrategias.css';

function Modal_estrategias({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay2">
      <div className="modal2">
        <div className='modal-arruma2'>
        <div className="texts_principal_modal2">
  <h1 className="text_protetoresauriculares2">
    O autismo é um distúrbio neurológico que afeta a maneira como uma pessoa percebe o mundo e interage com os outros. Uma característica comum entre indivíduos com autismo é a <span className="destaque1_modal">hipersensibilidade sensorial</span>, que pode incluir uma <span className="destaque1_modal">sensibilidade aumentada ao som</span>. Isso pode levar a <span className="destaque1_modal">desconforto</span>, <span className="destaque1_modal">estresse</span> e até <span className="destaque1_modal">crises</span> em ambientes barulhentos.
    </h1><h1 className="text_protetoresauriculares2">Protetores auriculares são uma ferramenta útil para ajudar indivíduos com autismo a lidar com a <span className="destaque1_modal">hipersensibilidade auditiva</span>. Eles funcionam reduzindo o volume dos sons externos, permitindo que a pessoa se <span className="destaque1_modal">concentre melhor</span> e se sinta mais <span className="destaque1_modal">confortável</span> em ambientes ruidosos. Isso pode ser especialmente benéfico em situações como festas, viagens de avião ou ambientes escolares barulhentos.
  </h1>
  <h1 className="text_protetoresauriculares2">
    <span className="destaque1_modalB2">Benefícios</span>:
    <span className="destaque1_modal2">Redução de Estresse</span>: Ao diminuir o nível de ruído, os protetores auriculares podem ajudar a reduzir o estresse e a ansiedade.
    <span className="destaque1_modal2">Melhora na Concentração</span>: Com menos distrações sonoras, a pessoa pode se concentrar melhor em tarefas escolares ou outras atividades.
    <span className="destaque1_modal2">Prevenção de Crises</span>: Em alguns casos, a redução do ruído pode prevenir crises devido à hipersensibilidade auditiva.
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
  );
}

export default Modal_estrategias;
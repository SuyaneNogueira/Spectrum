import React, { useState } from 'react';
import "./Navbar_estrategias.css";
import Modal_adicionar from './Modal_adicionar';


function Navbar_estrategias() {
  const [isModal90Open, setIsModal90Open] = useState(false);

  const toggleModal90 = () => {
    setIsModal90Open(!isModal90Open);
  };

    return (
        <div className="container_principal_navbar_estrategias">
            <div className="container_navbar_estrategias">
                <div className="container_logo_navbar_estrategias">
                    <img className="logo_navbar_estrategias" src="Spectrum-branco.png" alt="Logo" />
                </div>
                <div className="text_navbar_estrategias">
                    <h2 className="estilo_text_navbar_estrategias">Inicio</h2>
                    <h2 className="estilo_text_navbar_estrategias">Especialistas</h2>
                </div>
                <div className="icones_navbar_estrategias">
                    <div className="div-maisinho-estrategias">

                    <button className="botao-modal-mais-estrategias" onClick={toggleModal90}>
                      <img
                        className="img-mais-estrategias"
                        src="/mais-estrategias.png"
                        alt="Mais Estratégias"
                        style={{ cursor: 'pointer' }}
                      />
                    </button>

                    </div>
                </div>
            </div>
            
            <Modal_adicionar
              isOpen={isModal90Open}
              onClose={toggleModal90} 
            >
            </Modal_adicionar>

        </div> 
    );
}

export default Navbar_estrategias;
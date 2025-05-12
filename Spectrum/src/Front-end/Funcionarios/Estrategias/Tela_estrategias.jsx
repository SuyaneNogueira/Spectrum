import Navbar_estrategias from "./Navbar_estrategias"
import "./Tela_estrategias.css"
import Modal_estrategias from './Modal_estrategias'; // Ajuste o caminho conforme necessário
import { useState } from "react";




function Tela_estrategias() {
  
  const [isModalOpen, setIsModalOpen] = useState(false)

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className='container_principal_tela_estrategias'>
      <div className="container_segundaria_estrategias">
       <Navbar_estrategias/>
        <div className="container_elements_estrategias">
        <div className="element_barra_de_estrategias">
          <div className="element_dois_text_estrategias"><h2>Estratégias para:</h2></div>
          <div className="inputs_estrategias">
            <button className="button_topicos_estrategias">Sons Altos</button>
            <button className="button_topicos_estrategias">Mudança na Rotina</button>
            <button className="button_topicos_estrategias">Rotas diferentes do previsto</button>
            <button className="button_topicos_estrategias">Muitas pessoas em um ambiente</button>
          </div>
        </div>
        <div className="elements_texts_topicos_estrategias">
          <div className="elements_texts_estrategias">
            <h1 className="sons_altos_estrategias">Sons Altos</h1>
            <h2 className="text_sons_altos_estrategias">Lidar com sons altos pode ser particularmente desafiador para pessoas autistas, mas algumas 
            estratégias podem ajudar a minimizar o desconforto:</h2>
          </div>
          <div className="container_buttons_style_estrategias">
          {/* <select className='input1-interesse2'>
            <option value="nao">Não</option>
            <option value="sim">Sim</option>
          </select> */} 
            <button className="buttons_style_estrategias"   onClick={toggleModal} >  <Modal_estrategias isOpen={isModalOpen} onClose={toggleModal}> </Modal_estrategias> Protetores Auriculares</button>
            <button className="buttons_style_estrategias"  >Espaços Tranquilos</button>
            <button className="buttons_style_estrategias"  >Planejamento</button>
            <button className="buttons_style_estrategias"  >Comunicação</button>
            <button className="buttons_style_estrategias"  >Técnicas de relaxamento</button>
            <button className="buttons_style_estrategias"  >Música ou Ruído Branco</button>
            
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Tela_estrategias

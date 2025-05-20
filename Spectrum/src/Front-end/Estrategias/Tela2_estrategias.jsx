import Navbar_estrategias from "./Navbar_estrategias"
import "./Tela_estrategias.css"
import Modal7_estrategias from './Modais/Modal7_estrategias';
import Modal8_estrategias from './Modais/Modal8_estrategias';
import Modal9_estrategias from './Modais/Modal9_estrategias'; 
import Modal10_estrategias from './Modais/Modal10_estrategias'; 
import Modal11_estrategias from './Modais/Modal11_estrategias';
import Modal12_estrategias from './Modais/Modal12_estrategias'; 
import { useState } from "react";
import { Link, useNavigate } from 'react-router-dom'


function Tela2_estrategias() {

  const [isModal7Open, setIsModal7Open] = useState(false);
  const [isModal8Open, setIsModal8Open] = useState(false);
  const [isModal9Open, setIsModal9Open] = useState(false);
  const [isModal10Open, setIsModal10Open] = useState(false);
  const [isModal11Open, setIsModal11Open] = useState(false);
  const [isModal12Open, setIsModal12Open] = useState(false);

  const toggleModal7 = () => {
    setIsModal7Open(!isModal7Open);
  };
  const toggleModal8 = () => {
    setIsModal8Open(!isModal8Open);
  };
  const toggleModal9 = () => {
    setIsModal9Open(!isModal9Open);
  };
  const toggleModal10 = () => {
    setIsModal10Open(!isModal10Open);
  };
  const toggleModal11 = () => {
    setIsModal11Open(!isModal11Open);
  };
  const toggleModal12 = () => {
    setIsModal12Open(!isModal12Open);
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
            <h1 className="sons_altos_estrategias">Mudança na Rotina</h1>
            <h2 className="text_sons_altos_estrategias">Lidar com mudanças de rotina pode ser desafiador para pessoas autistas, mas existem diversas estratégias que podem ajudar:</h2>
          </div>
          <div className="container_buttons_style_estrategias">
          {/* <select className='input1-interesse2'>
            <option value="nao">Não</option>
            <option value="sim">Sim</option>
          </select> */} 
            <button className="buttons_style_estrategias"   onClick={toggleModal7} >  <Modal7_estrategias isOpen={isModal7Open} onClose={toggleModal7}> </Modal7_estrategias> Preparação antecipada</button>
            <button className="buttons_style_estrategias"   onClick={toggleModal8} > <Modal8_estrategias isOpen={isModal8Open} onClose={toggleModal8}> </Modal8_estrategias> Visualização e roteiros</button>
            <button className="buttons_style_estrategias"   onClick={toggleModal9} > <Modal9_estrategias isOpen={isModal9Open} onClose={toggleModal9}> </Modal9_estrategias> Suporte emocional</button>
            <button className="buttons_style_estrategias"   onClick={toggleModal10} > <Modal10_estrategias isOpen={isModal10Open} onClose={toggleModal10}> </Modal10_estrategias> Objetos de conforto</button>
            <button className="buttons_style_estrategias"   onClick={toggleModal11} > <Modal11_estrategias isOpen={isModal11Open} onClose={toggleModal11}> </Modal11_estrategias> Técnicas de relaxamento</button>
            <button className="buttons_style_estrategias"   onClick={toggleModal12} > <Modal12_estrategias isOpen={isModal12Open} onClose={toggleModal12}> </Modal12_estrategias> Introduzir flexibilidade gradualmente</button>
            
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Tela2_estrategias

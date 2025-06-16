import Navbar_estrategias from "./Navbar_estrategias"
import "./Tela_estrategias.css"
import Modal_estrategias from './Modais/Modal_estrategias';
import Modal2_estrategias from './Modais/Modal2_estrategias'; 
import Modal3_estrategias from './Modais/Modal3_estrategias'; 
import Modal4_estrategias from './Modais/Modal4_estrategias';
import Modal5_estrategias from './Modais/Modal5_estrategias'; 
import Modal6_estrategias from './Modais/Modal6_estrategias'; 
import { useState } from "react";
import { Link, useNavigate } from 'react-router-dom'




function Tela_estrategias() {
  
  const [isModal1Open, setIsModal1Open] = useState(false);
  const [isModal2Open, setIsModal2Open] = useState(false);
  const [isModal3Open, setIsModal3Open] = useState(false);
  const [isModal4Open, setIsModal4Open] = useState(false);
  const [isModal5Open, setIsModal5Open] = useState(false);
  const [isModal6Open, setIsModal6Open] = useState(false);

  const toggleModal1 = () => {
    setIsModal1Open(!isModal1Open);
  };
  const toggleModal2 = () => {
    setIsModal2Open(!isModal2Open);
  };
  const toggleModal3 = () => {
    setIsModal3Open(!isModal3Open);
  };
  const toggleModal4 = () => {
    setIsModal4Open(!isModal4Open);
  };

  const toggleModal5 = () => {
    setIsModal5Open(!isModal5Open);
  };
  const toggleModal6 = () => {
    setIsModal6Open(!isModal6Open);
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
            <button className="button_topicos_estrategias"><Link to="/estrategiasM" className="link_topicos_estrategias">Mudança na Rotina</Link></button>
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
            <button className="buttons_style_estrategias"   onClick={toggleModal1} >  <Modal_estrategias isOpen={isModal1Open} onClose={toggleModal1}> </Modal_estrategias> Protetores Auriculares</button>
            <button className="buttons_style_estrategias"   onClick={toggleModal2} > <Modal2_estrategias isOpen={isModal2Open} onClose={toggleModal2}> </Modal2_estrategias> Espaços Tranquilos</button>
            <button className="buttons_style_estrategias"   onClick={toggleModal3} > <Modal3_estrategias isOpen={isModal3Open} onClose={toggleModal3}> </Modal3_estrategias> Planejamento</button>
            <button className="buttons_style_estrategias"   onClick={toggleModal4} > <Modal4_estrategias isOpen={isModal4Open} onClose={toggleModal4}> </Modal4_estrategias> Comunicação</button>
            <button className="buttons_style_estrategias"   onClick={toggleModal5} > <Modal5_estrategias isOpen={isModal5Open} onClose={toggleModal5}> </Modal5_estrategias> Técnicas de relaxamento</button>
            <button className="buttons_style_estrategias"   onClick={toggleModal6} > <Modal6_estrategias isOpen={isModal6Open} onClose={toggleModal6}> </Modal6_estrategias> Música ou Ruído Branco</button>
            
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Tela_estrategias;

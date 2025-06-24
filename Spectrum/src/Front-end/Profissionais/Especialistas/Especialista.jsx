import './Especialista.css';
import { Link, useNavigate } from 'react-router-dom';

function Especialista() {
  return (

      <div className='container-inicial-especialista'>
      <div className='navbar-especialista-inicial'>
        <div className='img-navbar-especialista-inicial'>
          <img className='img-logo-profissionais' src="tela de contrato.png" alt="" />
            </div>
               <div className='button-especialista-inicial'>
                <Link to = "/" className='butao-custom-especialista-inicial'>Informações</Link>
                <Link to = "/estrategiasS" className='butao-custom-especialista-inicial'>Estratégias</Link>
                <Link to = "/" className='butao-custom-especialista-inicial'>Especialistas</Link>
                <Link to = "/chat" className='butao-custom-especialista-inicial'>Chat</Link>
          </div>
      </div>

        <div className="container-todos-especialistas">
            
        </div>

    </div>
  )
}

export default Especialista

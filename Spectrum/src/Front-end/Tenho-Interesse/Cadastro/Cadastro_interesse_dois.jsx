import { Link } from 'react-router-dom'
import './Cadastro_interesse_dois.css'


function Cadastro_interesse() {
  return (
    <div className='div-principal-interesse2'> 
    <div className='inputs-cadastro-interesse2'>
      <div className='div-inputs-interesse2'>
       <div className='container-inputs2'>
        <div className="alinhamento-interesse2">
        <h2 className='titulo-cadastro-interesse2'>Cadastro</h2>
          <div className='conjunto-input-interesse2'>
            <p className='p-inputs-interesse2'>Você conhece alguém que tenha TEA?:</p>
            <input className='input1-interesse2' type="text" />
          </div>
          <div className='conjunto-input-interesse2'>
            <p className='p-inputs-interesse2'>O que você quer saber sobre TEA?:</p>
            <input className='input1-interesse2' type="text" />
          </div>
          <div className='conjunto-input-interesse2'>
            <p className='p-inputs-interesse2'>Você ou alguém tem suspeita de TEA?:</p>
            <input className='input1-interesse2' type="text" /> 
          </div>
          <div className='conjunto-input-interesse2'>
          <p className='p-inputs-interesse2'>Você pretende se especializar na área?:</p>
          <select className='input1-interesse2'>
            <option value="nao">Não</option>
            <option value="sim">Sim</option>
          </select>
          </div>
        </div>
       </div>
       <div className='botoes-cadastro-interesse2'>
        <div className='termos-uso-interesse2'>
        <div className="container">
        <input type="checkbox" id="cbx2" style={{display: 'none'}} />
        <label htmlFor="cbx2" className="check">
          <svg width="18px" height="18px" viewBox="0 0 18 18">
            <path d="M 1 9 L 1 9 c 0 -5 3 -8 8 -8 L 9 1 C 14 1 17 5 17 9 L 17 9 c 0 4 -4 8 -8 8 L 9 17 C 5 17 1 14 1 9 L 1 9 Z" />
            <polyline points="1 9 7 14 15 4" /> 
          </svg> 
        </label>
        <label htmlFor="" ><Link to="" className='cor-link'> Termos de uso</Link></label>
      </div>
          {/* <input type="checkbox" />
          <p>Li e Aceito os <Link to="">Termos de Uso</Link></p> */}
        </div>
        <div className='botao-proximo-interesse2'>
          <button className='style-button-interesse2'>Cadastrar</button>
        </div>
        
       </div>
      </div>
    </div>
    <div className='div-logo-interesse2'>
       <img className='img-logo-interesse2' src="Spectrum.png" alt="Logo" /> 
    </div>
    </div>
  )
}

export default Cadastro_interesse

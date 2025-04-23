import { Link } from 'react-router-dom'
import './Cadastro_interesse.css'


function Cadastro_interesse() {
  return (
    <div className='div-principal-interesse'> 
    <div className='inputs-cadastro-interesse'>
      <div className='div-inputs-interesse'>
       <div className='container-inputs'>
        <div className="alinhamento-interesse">
        <h2 className='titulo-cadastro-interesse'>Cadastro</h2>
          <div className='conjunto-input-interesse'>
            <p className='p-inputs-interesse'>Nome:</p>
            <input className='input1-interesse' type="text" placeholder='Miguel Almeida'/>
          </div>
          <div className='conjunto-input-interesse'>
            <p className='p-inputs-interesse'>Email:</p>
            <input className='input1-interesse' type="text" placeholder='miguelalmeida@gmail.com'/>
          </div>
          <div className='conjunto-input-interesse'>
            <p className='p-inputs-interesse'>Senha:</p>
            <input className='input1-interesse' type="text" placeholder='1234#'/> 
          </div>
          
        </div>
       </div>
       <div className='botoes-cadastro-interesse'>
        <div className='termos-uso-interesse'>
          <input type="checkbox" />
          <p>Li e Aceito os <Link to="">Termos de Uso</Link></p>
        </div>
        <div className='botao-proximo-interesse'>
          <button className='style-button-interesse'>Próximo</button>
        </div>
        <div className='ja-possui-conta-interesse'>
<<<<<<< HEAD:Spectrum/src/Front-end/Tenho-Interesse/Cadastro/Cadastro_interesse.jsx
          <p>Já possui conta? <button>Entrar</button> </p>
=======
          <p>Já possui conta?  <Link to="">Entrar</Link></p>
>>>>>>> 67e7c099ad4c991d07f12c3c8b427f355945e874:Spectrum/src/Tenho-Interesse/Cadastro_interesse.jsx
        </div>
       </div>
      </div>
    </div>
    <div className='div-logo-interesse'>
       <img className='img-logo-interesse' src="Spectrum.png" alt="Logo" /> 
    </div>
    </div>
  )
}

export default Cadastro_interesse

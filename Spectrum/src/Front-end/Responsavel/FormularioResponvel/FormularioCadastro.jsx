import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import './formularioResposavel.css'
function FormularioCadastro() {

  const [termosAceitos, setTermosAceitos] = useState(false);
  const [idade, setIdade] = useState('');
  const [teaRes, setTeaRes] = useState('');
  const [parentesco, setParentesco] = useState('');
  const [erro, setErro] = useState('');
  const navigate = useNavigate();


  const handleSubmit = (e) => {
    e.preventDefault();

    if (!idade || !teaRes || !parentesco) {
      setErro('Preencha todos os campos.');
      return;
    }

    // if (!termosAceitos) {
    //   setErro('Você precisa aceitar os termos de uso.');
    //   return;
    // }

    setErro('');
    navigate('loginResponsavel');
  };
  return (
    <div>
          <div className='div_geral2'>    
          <div className="cadastro">
        <h1 className='titulo'>Cadastro</h1>
     <form onSubmit={handleSubmit} className="inputs_cadastro">
      <div className="idade-input-responsavel">
        <label className='letra'>Qual a sua idade?</label>
       <input type="text" placeholder="dd/dd/dddd" value={idade} 
       onChange={(e) => setIdade(e.target.value)}/>
      </div>
     
     <label  className='letra'>A pessoa Spectrum(tea) Já é cadastrada no site?</label>
        <select className='select-formulario-responsavel'  value={teaRes}>
             <option value="sim">Sim</option>
             <option value="nao">Não</option>     
             onChange={(e) => setTeaRes(e.target.value)}  
        </select>
      
          <label  className='letra'>Qual seu grau de parentesco com a pessoa Spectrum?</label>
          <select className='select-formulario-responsavel'  value={parentesco}>
             <option value="mae">Mãe</option>
             <option value="pai">Pai</option>     
             <option value="responsavel">Responsavel legal</option> 
             onChange={(e) => setParentesco(e.target.value)}  
        </select>

          {/* <button type="button" className="google-button" onClick={handleGoogleLogin}>
            <span className="google">G</span><span className="google_google">oogle</span>
          </button> */}

          {/* <div className="termos-container" onClick={() => setTermosAceitos(!termosAceitos)}>
            <div className={`termo-circulo ${termosAceitos ? 'ativo' : ''}`} />
            <span >Li e aceito os <Link className='termos' 
            to='/termos'>Termos de Uso</Link></span>
          </div> */}

          {erro && <div className="mensagen-erro">{erro}</div>}

          <button type="submit" className="Cadastro_button">Cadastrar</button>

          <div className="login-link">
            Já possui uma conta? <Link to='loginResponsavel'>Entrar</Link>
          </div>
        </form>
      </div>
        <div className="cadastro_imagem">
        <img src="/Spectrum.png" alt="Ilustração cérebro" />
      </div>
      </div>
    </div>
  )
}

export default FormularioCadastro

import './Cadastro_TEA.css'
import { Link } from 'react-router-dom'

function Cadastro_TEA() {
  return (
    <div className='container-all-cadastro-tea'>
        <div className='container-inputs-cadastro-tea'>
             <div className='titulo-cadastro-tea'>
                 <p>Cadastro</p>
             </div>
             <div className='inputs-tea-cadastro'>
                   <div className='nome-cadastro-tea'>
                       <p>Nome:</p>
                       <input type="text" />
                   </div>
                   <div className='email-cadastro-tea'>
                      <p>Email:</p>
                      <input type="text" />
                   </div>
                   <div className='senha-cadastro-tea'>
                       <p>Senha:</p>
                      <input type="text" />
                   </div>
             </div>
             <div className='google-cadastro-tea'>
                     <p>Google</p>
             </div>
             <div className='buton-proximo-cadastro-tea'>
                     <button className='botão-proximo-tea'>Proximo</button>
             </div>
             <div className='ja-possui-conta-cadastro-tea'>
              <p>Ja possui conta? <Link to = "/logintea" >Faça Login</Link></p>
             </div>
        </div>
        <div className='imagem-cadastro-tea'>
          <img className='editar-imagem-cadastro-tea' src="Spectrum.png" alt="" />
        </div>
    </div>
  )
}

export default Cadastro_TEA

import './FormularioCadastroTeaDos.css'

function FormularioCadastroTeaDos() {
  return (
    <div className="container-all-formu-ca-dos">
        <div className='div-input-formu-dos'>
               <div className='button-voltar-form-tea-dos'>
                <button>Voltar</button>
                </div>  
             <div className='input-tea-parte-dos'>
                 <div className='voce-tem-responsavel'>
                      <p>Você tem algum responsavel por você?:</p>
                      <input type="text" />
                 </div>
                 <div className='nome-responsavel-tea-dos'>
                      <p> Se sim qual o nome dele?:</p>
                      <input type="text" />
                 </div>
                 <div className='idade-responsavel-tea-dos'>
                       <p>Qual a idade dele(a)?:</p>
                       <input type="text" />
                 </div>
            </div>
            <div className='button-cadastrar-formu-tea'>
                <button className='cadastrar-button-formulario-tea'>Cadastrar</button>
            </div>
        </div>
        <div className='div-img-formu-dos'>
              <img className='img-ajustes-formulario-tea' src="Spectrum.png" alt="" />
        </div>
    </div>
  )
}

export default FormularioCadastroTeaDos

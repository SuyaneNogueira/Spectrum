import React, { useState } from 'react'
import './FuncionarioCadastro.css'
import { Link, useNavigate } from 'react-router-dom'


function FuncionariosCadastro() {

const [inputNomeEspecialista, setInputNomeEspecialista] = useState ('')
const [inputTelefoneEspecialista, setInputTelefoneEspecialista] = useState ('')
const [inputEmailEspecialista, setInputEmailEspecialista] = useState ('')
const [inputSenhaEspecialista, setInputSenhaEspecialista] = useState ('')

const Navegador = useNavigate()
// const [erros, setErros] = useState({});

function CadastroDeFuncionario() {

// const para detectar campos nao preenchidos no cadastro
  // const novosErros = {};
// VER POR QUE CARALHO ESSA PORRA NÃO FUNCIONA
  // if (!inputNomeEspecialista) novosErros.nome = true;
  // if (!inputTelefoneEspecialista) novosErros.telefone = true;
  // if (!inputEmailEspecialista) novosErros.email = true;
  // if (!inputSenhaEspecialista) novosErros.senha = true;

  
  // if (Object.keys(novosErros).length > 0) {
  //   setErros(novosErros);
  //   alert("Por favor, preencha todos os campos.");
  //   return;
  // }

 // detectar campos nao preenchidos no cadastro
   if(!inputNomeEspecialista || !inputTelefoneEspecialista || !inputEmailEspecialista || !inputSenhaEspecialista){

     {
    alert("Por favor, preencha todos os campos.");
  }

   }else {
  // const para novos cadastros 
   const CadastroNovo = {

    nome: inputNomeEspecialista,
    telefone: inputTelefoneEspecialista,
    email: inputEmailEspecialista,
    senha: inputSenhaEspecialista
   
  }
  // Pegando cadastros já salvos (se existirem)
  const cadastrosSalvos = JSON.parse(localStorage.getItem('cadastros')) || [];

  // Adiciona o novo cadastro à lista existente
  cadastrosSalvos.push(CadastroNovo);

  // Salva a lista atualizada de volta no localStorage
  localStorage.setItem('cadastros', JSON.stringify(cadastrosSalvos));

  Navegador('/')
  alert("Seja Bem-vindo ao time Spectrum")
   }

}
  return (
    <div className='container-all-cadastro-advogados'>
     
<div className='div-imagem-cadastro-advogados'>
<img className='imagem-cadastro-advogado' src="pedagogia.webp" alt="" />
</div>

<div className='div-conteudo-cadastro-advogado'>
<h1 className='h1-cadastro-advogados'>Cadastro de Especialistas</h1>
<div className='div-inputs-cadastro-advogado'>

<div className='inputs-teste-cadastro-advogados-um'>
<p>Nome:</p>
<input type="text" placeholder='Nome Completo'
value={inputNomeEspecialista} onChange={(e) => setInputNomeEspecialista(e.target.value)} 
// className={erros.nome ? 'input-erro' : ''}
/>
</div>
<div className='inputs-teste-cadastro-advogados-dois'>
<p>Telefone:</p>
<input type="text" name="" id=""placeholder='(**)* ****-****'
value={inputTelefoneEspecialista} onChange={(e) => setInputTelefoneEspecialista(e.target.value)}
// className={erros.telefone ? 'input-erro' : ''}
/>
</div>
<div className='inputs-teste-cadastro-advogados-treis'>
<p>Email:</p>
<input type="Email" placeholder='seu@email.com'
value={inputEmailEspecialista} onChange={(e) => setInputEmailEspecialista(e.target.value)}
// className={erros.email ? 'input-erro' : ''}
/>
</div>
{/*Não sei o que colocar aqui */}
{/* <div className='inputs-teste-cadastro-advogados-quatro'>
<p>OAB:</p>
<input type="text" />
</div> */}
<div className='inputs-teste-cadastro-advogados-cinco'>
<p>Senha:</p>
<input type="password" placeholder='minimo de 6 caracteres'
value={inputSenhaEspecialista} onChange={(e) => setInputSenhaEspecialista(e.target.value)}
// className={erros.senha ? 'input-erro' : ''}
/>
</div>

<div className='div-button-cadastro-ad'>
  <button className='button-cadastro-advogado' onClick={CadastroDeFuncionario} >Cadastrar</button>
</div>

</div>

</div>

    </div>
  )
}

export default FuncionariosCadastro

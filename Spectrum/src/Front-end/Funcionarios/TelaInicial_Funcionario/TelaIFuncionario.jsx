import React from 'react'
import '../NavBarFuncionario/NavbarFuncionario.jsx'
function TelaIFuncionario() {
  return (
    <div className='container-tela-inicial-advogados'>
   <NavbarFuncionario/>

  <div className='container-todos-inicial-a'>
    <div className='teste-inicial-advogados-um'>
      <button className='butão-teste-um-ad'>
        Agenda
      </button>
  </div > 

  <div className='container-dois-tela-i-ad'>
    <div className='teste-inicial-advogados-dois'>

     <button className='butão-teste-dois-ad'>
       Ultimos Processos Abertos
     </button>
   </div>

     <div className='teste-inicial-advogados-tres'>
    <button className='butão-teste-dois-ad'>
     Dashbord
    </button>
 </div>
</div>
</div>
  </div>
  )
}

export default TelaIFuncionario

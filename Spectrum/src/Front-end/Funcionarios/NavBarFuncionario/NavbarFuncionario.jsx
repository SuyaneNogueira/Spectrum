import React from 'react'
import './NavBarFuncionarios.css'
function NavbarFuncionario() {
  return (
    <div className='container-advogados-nav'>   
    <div className='container-advogados-nav-dois'>
        <img  src="Spectrum.jpeg" alt="" />
  <div className='container-advogados-nav-tres'>
      <div class="button-group">
         <input type="radio" id="svelt" name="frameworks" />
         <label for="svelt">Inicio</label>
  </div>
      <div class="button-group">
         <input type="radio" id="react" name="frameworks" />
         <label for="react">Agenda</label>
  </div>

  <div class="button-group">
    <input type="radio" id="vue" name="frameworks" />
    <label for="vue">Perfil</label>
  </div>
   

   </div>
       

   </div>


    </div>
  )
}

export default NavbarFuncionario

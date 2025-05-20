import React from 'react'
import './CalendarioTea.css'

function CalendarioTea() {
  return (
    <div className='container-all-calendario-tea'>
        <div className='nao-navbar-calendario-tea'>
            <div className='não-navbar-calendario-buton-um' >
                <button>INICIO</button>
            </div>
            <div className='não-navbar-calendario-buton-dois'>
            <button>ESPECIALISTA</button>
            </div>
        </div>
        <div className='div-base-calendario-tea'>
            <div className='div-divisoria-um-tea'>
                 <div className='div-consultas-agendadas-tea'>
                    <h3 className='titulo-consultas-calendario-tea'>Consultas Agendadas</h3>
                 </div>
            </div>
            <div className='div-divisoria-dois-tea'>
                  <div className='div-consultas-agendadas-tea-dos' >
                      <h3 className='titulo-consultas-calendario-tea'>Profissionais Disponíveis</h3>
                  </div>
            </div>
            <div className='div-divisoria-tres-tea'>
                 <div className='calendario-definitivamente-tea'>
                      
                 </div>
            </div>  
        </div>
    </div>
  )
}

export default CalendarioTea

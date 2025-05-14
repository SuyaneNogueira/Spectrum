import "./Navbar_estrategias.css"

function Navbar_estrategias() {
  return (
    <div className="container_principal_navbar_estrategias">
      <div className="container_navbar_estrategias">
        <div className="container_logo_navbar_estrategias">
            <img className="logo_navbar_estrategias" src="Spectrum-branco.png" alt="Logo" />
        </div>
        <div className="text_navbar_estrategias">
            <h2 className="estilo_text_navbar_estrategias">Inicio</h2> <h2 className="estilo_text_navbar_estrategias">Especialistas</h2>
        </div>
        <div className="icones_navbar_estrategias">
        <div className="barra_pesquisa_navbar_estrategias">
            <input className="input" type="search" placeholder="Pesquisa" />
        <div className="group">
        <svg viewBox="0 0 24 24" aria-hidden="true" className="icon">
          <g>
            <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z" />
          </g>
        </svg>
        </div>
      </div>
        
            <img className="icone_perfil_menu_navbar_estrategias" src="icone_de_perfil.png" alt="Perfil" />
            <img className="icone_perfil_menu_navbar_estrategias" src="icone_menu.png" alt="Menu" />
        </div>
      </div>
    </div>
  )
}

export default Navbar_estrategias

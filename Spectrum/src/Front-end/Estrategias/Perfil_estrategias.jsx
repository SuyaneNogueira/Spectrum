import "./Perfil_estrategias.css"

function Perfil_estrategias() {
  return (
    <div className="container_principal_perfil_interessados">
      <div className="div_botao_voltar"></div>
      <div className="organizacao_elementos_perfil">
      <div className="div_informacao_perfil">
        <div className="foto_perfil_interessados">
          <img className="foto_suyane_teste" src="Suyane.jpg" alt="" />
        </div>
        <div className="info_elements">
          <h1 className="nome_perfil_interessados">Suyane Nogueira</h1>
          <h3 className="infos_perfil_interessados">Idade: <span className="destaque_respostas_perfil">27</span></h3>
          <h3 className="infos_perfil_interessados">Tem suspeita de TEA: <span className="destaque_respostas_perfil">Sim</span></h3>
          <h3 className="infos_perfil_interessados">Pretende se especializar na área: <span className="destaque_respostas_perfil">Sim</span></h3>
        </div>
      </div>
      <div className="div_anotacoes_perfil">
        <div className="elements_anotacoes_perfil">
          <div className="element1_anotacoes">
            <h1 className="titulo_anotacoes">Anotações</h1>
            <input type="text" className="inputs_anotacoes_perfil"/>
            <input type="text" className="inputs_anotacoes_perfil"/>
            <input type="text" className="inputs_anotacoes_perfil"/>
            <input type="text" className="inputs_anotacoes_perfil"/>
            <input type="text" className="inputs_anotacoes_perfil"/>

            <button className="botao_salvar_alteracoes">Salvar</button>
          </div>
        </div>
      </div>
      </div>
      
    </div>
  )
}

export default Perfil_estrategias

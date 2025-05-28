import "./Editar_perfil_interesse.css"

function Editar_perfil_interesse() {
  return (
    <div className="container_principal_editar_perfil">
      <div className="voltar_para_perfil"></div>
      <div className="container_elements_edit_perfil">
        <div className="element_um_edit">
          <div className="element_dois_foto_descricao">
            <div className="edit_foto_interessado">
              <img src="Spectrum.png" alt="" className="foto_edit_perfil_interessado"/>
            </div>
            <div className="descricao_edit_perfil_interessado">

            </div>
          </div>
          <div className="element_tres_informacoes_alteradas">
            <div className="titulo_edit_perfil_interessado">
              <h1>Seu Perfil</h1>
            </div>
            <div className="inputs_h2_edit_perfil_interesse">
              <h2 className="topicos_edit_perfil">Nome:</h2>
              <input type="text" className="inputs_edit_perfil"/>
              <h2 className="topicos_edit_perfil">Senha:</h2>
              <input type="text" className="inputs_edit_perfil"/>
              <h2 className="topicos_edit_perfil">Tem suspeita de TEA:</h2>
              <select name="" id="" className="inputs_edit_perfil">
              <option value="Sim">Sim</option>
              <option value="Não">Não</option>
              </select>
              <h2 className="topicos_edit_perfil">Pretende se especializar na área:</h2>
              <select name="" id="" className="inputs_edit_perfil">
              <option value="Sim">Sim</option>
              <option value="Não">Não</option>
              </select>
            </div>
            <div className="botoes_edit_perfil_interesse">
              <button className="botao_salvar_alteracoes_edit">Salvar Alterações</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Editar_perfil_interesse


import { Link } from "react-router-dom"
import "./Perfil_interesse.css"
import Editar_perfil_interesse from "../Edit perfil int/Editar_perfil_interesse"

function Perfil_interesse() {
  return (
    <div className="container_principal_perfil_interessados">
      <div className="div_botao_voltar"></div>
      <div className="organizacao_elementos_perfil">
      <div className="div_informacao_perfil">
        <div className="foto_perfil_interessados">
          <img className="foto_suyane_teste" src="Suyane.jpg" alt="" />
        </div>
        <div className="info_elements">
          <div className="elements_1234_perfil">
          <h1 className="nome_perfil_interessados">Suyane Nogueira</h1>
          <h3 className="infos_perfil_interessados">Idade: <span className="destaque_respostas_perfil">27</span></h3>
          <h3 className="infos_perfil_interessados">Tem suspeita de TEA: <span className="destaque_respostas_perfil">Sim</span></h3>
          <h3 className="infos_perfil_interessados">Pretende se especializar na área: <span className="destaque_respostas_perfil">Sim</span></h3>
          </div>
          <div className="descricao_perfil_interessado"> 
            <h3 className="titulo_descricao_perfil_interessado">Descrição</h3>
            <p className="p_descricao_perfil_interessado">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto culpa iste doloribus ipsum ea minima magnam reprehenderit facere vel eaque voluptatem inventore temporibus totam recusandae tenetur, aliquam eius natus veniam.</p>
          </div>
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


            <button className="botao_salvar_anotacoes">Salvar</button>
          </div>
          <div className="but_editar_excluir_perfil">
            <Link to='/editarperfilinteresse' className="editar_perfil_interessados">Editar Perfil</Link> 
            <button className="excluir_perfil_interessados">Excluir Perfil</button>
            </div>
        </div>
      </div>
      </div>
      
    </div>
  )
}

export default Perfil_interesse

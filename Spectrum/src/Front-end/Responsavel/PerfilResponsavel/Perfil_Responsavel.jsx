import React from 'react'

function Perfil_Responsavel() {
  return (
    <div className="container_principal_perfil_responsavel">
    <div className="botao_voltar">Voltar</div>
    <div className="organizacao_perfil">
    <div className="div_anotacoes_perfil_responsavel">
      <div className="elementos_anotacoes_perfil">
        <div className="element1_anotacoes">
          <h1 className="titulo_anotacoes">Anotações</h1>
          <input type="text" className="inputs_anotacoes_perfilresponsavel"/>
          <input type="text" className="inputs_anotacoes_perfilresponsavel"/>
          <input type="text" className="inputs_anotacoes_perfilresponsavel"/>
          <input type="text" className="inputs_anotacoes_perfilresponsavel"/>
          <input type="text" className="inputs_anotacoes_perfilresponsavel"/>


          <button className="botao_salvar_anotacoes">Salvar</button>
        </div>
        <div className="but_editar_excluir_perfil">
          {/* <Link to='editarperfilinteresse' className="editar_perfil_interessados">Editar Perfil</Link>  */}
          <Link to = '' className="convesar_perfil_responsavel" >Conversar</Link>
          <Link to = '/editarperfilinteresse' className="editar_perfil_responsavel" >Editar Perfil</Link>

          <button className="excluir_perfil_responsavel">Excluir Perfil</button>
          </div>
      </div>
    </div>
    <div className="informacao_perfil">
      <div className="foto_perfil_responsavel">
        <img className="foto_teste" src="Suyane.jpg" alt="" />
      </div>
      <div className="info_elementos">
        <div className="elementos_1234_perfil">
        <h1 className="nome_perfil_responsavel">Suyane Nogueira</h1>
        <h3 className="infos_perfil_responsavel">Idade: <span className="destaque_respostas_perfil">27</span></h3>
        <h3 className="infos_perfil_responsavel">Tem suspeita de TEA: <span className="destaque_respostas_perfil">Sim</span></h3>
        <h3 className="infos_perfil_iresponsavel">Pretende se especializar na área: <span className="destaque_respostas_perfil">Sim</span></h3>
        </div>
        <div className="descricao_perfil_responsavel"> 
          <h3 className="titulo_descricao_perfil_responsavel">Descrição</h3>
          <p className="p_descricao_perfil_responsavel">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto culpa iste doloribus ipsum ea minima magnam reprehenderit facere vel eaque voluptatem inventore temporibus totam recusandae tenetur, aliquam eius natus veniam.</p>
        </div>
      </div>
    </div>
    </div>
    
  </div>
  )
}

export default Perfil_Responsavel

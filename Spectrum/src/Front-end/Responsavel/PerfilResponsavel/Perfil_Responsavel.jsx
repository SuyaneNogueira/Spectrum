import React from 'react'
import './PerfilResponsavel.css'
import { Link } from 'react-router-dom'

function Perfil_Responsavel() {


// //  atualizar o responsável
// app.put('/responsavel/:id', async (req, res) => {
//   const { id } = req.params;
//   const updateDados= req.body;
// const resultResponsavel = await db.updateResponsavel(id, updateDados)

//   try {
//     const resultresponsavel = await pool.query(
//       'UPDATE responsavel SET nome=$1, email=$2, senha=$3 WHERE id=$4 RETURNING *',
//       [nome, email, senha, id]
//     );
//     res.json(resultresponsavel.rows[0]);
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: 'Erro ao atualizar responsável' });
//   }
// res.json(resultResponsavel.rows[0]);

// });

// app.delete("/responsavel/:id", async (req, res) => {
//     await db.deleteResponsavel(req.params.id)
//     res.status(204).send();
// })


  return (
    <div className="container_principal_perfil_responsavel">
    <div className="botao_voltar"><Link to='/'></Link></div>
    <div className="organizacao_perfil">
 
    <div className="informacao_perfil">
      <div className="foto_perfil_responsavel">
        <img className="foto_teste" src="" alt="" />
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
      </div>  
    </div>
      </div>
      <div className="info_elementos">
        <div className="elementos_1234_perfil">
        <h1 className="nome_perfil_responsavel">Suyane</h1>
        <h3 className="infos_perfil_responsavel">Idade: <span className="destaque_respostas_perfil">23</span></h3>
        <h3 className="infos_perfil_responsavel">Sou responsavel por: <span className="destaque_respostas_perfil"></span></h3>
        <h3 className="infos_perfil_iresponsavel">email: <span className="destaque_respostas_perfil">eee@gmail.com</span></h3>
        </div>
    <div className="but_editar_excluir_perfil">
          <Link to = '/chat' className="convesar_perfil_responsvel" >Conversar</Link>
          <Link to = '/editarperfilinteresse' className="editar_perfil_responsavel" >Editar Perfil</Link>
          <button className="excluir_perfil_responsavel">Excluir Perfil</button>
    </div>
      </div>
    </div>
    </div>
    
  </div>
  )
}

export default Perfil_Responsavel

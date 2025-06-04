import { createBrowserRouter } from "react-router-dom";
import FuncionarioCadastro from "../Front-end/Funcionarios/Cadastro/FuncionariosCadastro.jsx";
import PerfilFuncionario from "../Front-end/Funcionarios/Perfil/PerfilFuncionario.jsx";   
import LoginFuncionario from "../Front-end/Funcionarios/Login/LoginFuncionario.jsx";
import Modal_cadastros from "../Modal_de_Cadastros/Modal_cadastros.jsx";
import Cadastro_interesse from "../Front-end/Tenho-Interesse/Cadastro/Cadastro_interesse.jsx";
import Perfil_interesse from "../Front-end/Tenho-Interesse/Perfil/Perfil_interesse.jsx";
import VerPerfilFuncionario from "../Front-end/Funcionarios/VerPerfilFuncionario/VerPerfilFuncionario.jsx";
import Tela_Inicial from "../Front-end/Tela Inicial Geral/Tela_Inicial.jsx";
import Navbar_estrategias from "../Front-end/Estrategias/Navbar_estrategias.jsx";
import Tela_estrategias from "../Front-end/Estrategias/Tela_estrategias.jsx";
import Tela2_estrategias from "../Front-end/Estrategias/Tela2_estrategias.jsx";
import Tela_Inicial_tEA from "../Front-end/Pessoas TEA/Tela inicial TEA/Tela_Inicial_tEA.jsx";
import TelaIFuncionario from "../Front-end/Funcionarios/TelaInicial_Funcionario/TelaIFuncionario.jsx";
import Chat from "../Front-end/Chat/Chat.jsx";
import CalendarioTea from "../Front-end/Pessoas TEA/Calendario/CalendarioTea.jsx";
import Perfil_TEA from "../Front-end/Pessoas TEA/Perfil TEA/Perfil_TEA.jsx";
import Login_TEA from "../Front-end/Pessoas TEA/Login TEA/Login_TEA.jsx";
import Cadastro_TEA from "../Front-end/Pessoas TEA/Cadastro TEA/Cadastro_TEA.jsx";
import VerPerfil from "../Front-end/Pessoas TEA/VerPerfilTea/VerPerfil.jsx";
import Cadastro_Profissionais from "../Front-end/Profissionais/Cadastro_Profissionais.jsx";
import Tela_Inicial_Profissionais from "../Front-end/Profissionais/Tela_Inicial_Profissionais.jsx";
<<<<<<< HEAD
=======
import Cadastro_Profissionais_Dois from "../Front-end/Profissionais/Cadastro_Profissionais_Dois.jsx";
import Editar_perfil_interesse from "../Front-end/Tenho-Interesse/Edit perfil int/Editar_perfil_interesse.jsx";
import FormularioCadastroTeaDos from "../Front-end/Pessoas TEA/Cadastro TEA/FormularioCadastroTeaDos.jsx";
import FormularioCadastroTea from "../Front-end/Pessoas TEA/Cadastro TEA/FormularioCadastroTea.jsx";
=======
// import Cadastro_Profissionais from "../Front-end/Profissionais/Cadastro_Profissionais.jsx";
import Tela_Inicial_Profissionais from "../Front-end/Profissionais/Tela_Inicial_Profissionais.jsx";
import Editar_perfil_interesse from "../Front-end/Tenho-Interesse/Edit perfil int/Editar_perfil_interesse.jsx";
>>>>>>> 37291544a5695da0a0e7b2af04efb91925ff46ef
>>>>>>> 23dbfa7f707403213d6d8340adeff52c49a3d08a

const Router = createBrowserRouter([
{path: "/", element: <Tela_Inicial/> },

// Funcionario

{path: "funcionarioC", element: <FuncionarioCadastro/> },
{path: "perfilF", element: <PerfilFuncionario/>},
{path: "login", element: <LoginFuncionario/>},
{path: "verPerfil", element: <VerPerfilFuncionario/>},
{path: "telaInicialFuncionario", element: <TelaIFuncionario/>},

// Estrategias

{path: "navbar", element: <Navbar_estrategias/>},
{path: "estrategiasS", element: <Tela_estrategias/>},
{path: "estrategiasM", element: <Tela2_estrategias/>},
{path: "Mudancarotina", element: <Tela2_estrategias/>},

// TEA

{path: "cadastro_TEA", element: <Cadastro_TEA/>},
{path: "telaitea", element: <Tela_Inicial_tEA/>},
{path: "logintea", element: <Login_TEA/>},
// {path: "visaoespecialista", element: <VisaoEspecialista/>},
{path: "verperfilviespe", element: <VerPerfil/>},
{path: "perfiltea", element: <Perfil_TEA/>},
{path: "cadastrotea", element: <Cadastro_TEA/>},
{path: "fomulariocadastrodos", element: <FormularioCadastroTeaDos/>},
{path: "fomulariocadastroum", element: <FormularioCadastroTea/>},





// Interesse

{path: "Tenho_Interesse", element: <Cadastro_interesse/>},
{path: "PerfilInteresse", element: <Perfil_interesse/>},
<<<<<<< HEAD
{path: "/editarperfilinteresse", element: <Editar_perfil_interesse/>},
=======
{path: "editarperfilinteresse", element: <Editar_perfil_interesse/> },
>>>>>>> 37291544a5695da0a0e7b2af04efb91925ff46ef


// Responsavel


{path: "modal", element: <Modal_cadastros/>},
{path: "chat", element: <Chat/>},
<<<<<<< HEAD
// {path: "cadastroprofissionais", element: <Cadastro_Profissionais/>},
=======
<<<<<<< HEAD
{path: "cadastroprofissionais", element: <Cadastro_Profissionais/>},
{path: "cadastroprofissionaisdois", element: <Cadastro_Profissionais_Dois/>},
=======
// {path: "cadastroprofissionais", element: <Cadastro_Profissionais/>},
>>>>>>> 37291544a5695da0a0e7b2af04efb91925ff46ef
>>>>>>> 23dbfa7f707403213d6d8340adeff52c49a3d08a
{path: "telainicialprofissionais", element: <Tela_Inicial_Profissionais/>}

])

export default Router

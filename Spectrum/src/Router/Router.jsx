import { createBrowserRouter } from "react-router-dom";
import Modal_cadastros from "../Front-end/Modals/Modal_cadastros.jsx";
import Cadastro_interesse from "../Front-end/Tenho-Interesse/Cadastro/Cadastro_interesse.jsx";
import Perfil_interesse from "../Front-end/Tenho-Interesse/Perfil/Perfil_interesse.jsx";
import Tela_Inicial from "../Front-end/Tela Inicial Geral/Tela_Inicial.jsx";
import Navbar_estrategias from "../Front-end/Estrategias/Navbar_estrategias.jsx";
import Tela_estrategias from "../Front-end/Estrategias/Tela_estrategias.jsx";
import Tela2_estrategias from "../Front-end/Estrategias/Tela2_estrategias.jsx";
import Tela_Inicial_tEA from "../Front-end/Pessoas TEA/Tela inicial TEA/Tela_Inicial_tEA.jsx";
import Chat from "../Front-end/Chat/Chat.jsx";
import Perfil_TEA from "../Front-end/Pessoas TEA/Perfil TEA/Perfil_TEA.jsx";
import Login_TEA from "../Front-end/Pessoas TEA/Login TEA/Login_TEA.jsx";
import Cadastro_TEA from "../Front-end/Pessoas TEA/Cadastro TEA/Cadastro_TEA.jsx";
import VerPerfil from "../Front-end/Pessoas TEA/VerPerfilTea/VerPerfil.jsx";
import CadastroResponsavel from "../Front-end/Responsavel/CadastroResponsavel/CadastroResponsavel.jsx";
import Login_Responsavel from "../Front-end/Responsavel/LoginResponsavel/Login_Responsavel.jsx";
import Cadastro_Profissionais from "../Front-end/Profissionais/Cadastro/Cadastro_Profissionais.jsx";
import Tela_Inicial_Profissionais from "../Front-end/Profissionais/Tela Inicial Profissionais/Tela_Inicial_Profissionais.jsx";
import Cadastro_Profissionais_Dois from "../Front-end/Profissionais/Cadastro/Cadastro_Profissionais_Dois.jsx";
import Editar_perfil_interesse from "../Front-end/Tenho-Interesse/Edit perfil int/Editar_perfil_interesse.jsx";
import FormularioCadastroTeaDos from "../Front-end/Pessoas TEA/Cadastro TEA/FormularioCadastroTeaDos.jsx";
import FormularioCadastroTea from "../Front-end/Pessoas TEA/Cadastro TEA/FormularioCadastroTea.jsx";
import Perfil_Responsavel from "../Front-end/Responsavel/PerfilResponsavel/Perfil_Responsavel.jsx";
import TelaI_Responsavel from "../Front-end/Responsavel/TelaInicialResponsavel/TelaI_Responsavel.jsx";
import Login_Profissionais from "../Front-end/Profissionais/Login/Login_Profissionais.jsx";


const Router = createBrowserRouter([
{path: "/", element: <Tela_Inicial/> },

// Profissionais
{path: "cadastroprofissionais", element: <Cadastro_Profissionais/>},
{path: "cadastroprofissionaisdois", element: <Cadastro_Profissionais_Dois/>},
{path: "telainicialprofissionais", element: <Tela_Inicial_Profissionais/>},
{path: "loginprofissionais", element: <Login_Profissionais/>},


// Estrategias
{path: "navbar", element: <Navbar_estrategias/>},
{path: "estrategiasS", element: <Tela_estrategias/>},
{path: "estrategiasM", element: <Tela2_estrategias/>},


// TEA
{path: "telaitea", element: <Tela_Inicial_tEA/>},
{path: "logintea", element: <Login_TEA/>},
// {path: "visaoespecialista", element: <VisaoEspecialista/>},
{path: "verperfilviespe", element: <VerPerfil/>},
{path: "perfiltea", element: <Perfil_TEA/>},
{path: "cadastrotea", element: <Cadastro_TEA/>},
{path: "fomulariocadastrodos", element: <FormularioCadastroTeaDos/>},
{path: "fomulariocadastroum", element: <FormularioCadastroTea/>},


// Interesse

{path: "editarperfilinteresse", element: <Editar_perfil_interesse/> },
{path: "Tenho_Interesse", element: <Cadastro_interesse/>},
{path: "PerfilInteresse", element: <Perfil_interesse/>},



// Responsavel
{path:"cadastroResponsavel", element: <CadastroResponsavel/>},
{path: "loginResponsavel", element:<Login_Responsavel/>},
{path: "perfilResponsavel", element: <Perfil_Responsavel/>},
{path: "telaInicialResponsavel", element: <TelaI_Responsavel/>},


// Extras
{path: "modal", element: <Modal_cadastros/>},
{path: "cadastroprofissionais", element: <Cadastro_Profissionais/>},
{path: "cadastroprofissionaisdois", element: <Cadastro_Profissionais_Dois/>},
{path: "telainicialprofissionais", element: <Tela_Inicial_Profissionais/>},
{path: "chat", element: <Chat/>},


])

export default Router

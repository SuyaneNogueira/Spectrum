import { createBrowserRouter } from "react-router-dom";
import FuncionarioCadastro from "../Front-end/Funcionarios/Cadastro/FuncionariosCadastro.jsx";
import PerfilFuncionario from "../Front-end/Funcionarios/Perfil/PerfilFuncionario.jsx";   
import LoginFuncionario from "../Front-end/Funcionarios/Login/LoginFuncionario.jsx";
import Modal_cadastros from "../Modal_de_Cadastros/Modal_cadastros.jsx";
import Cadastro_interesse from "../Front-end/Tenho-Interesse/Cadastro/Cadastro_interesse.jsx";
import VerPerfilFuncionario from "../Front-end/Funcionarios/VerPerfilFuncionario/VerPerfilFuncionario.jsx";
import Tela_Inicial from "../Front-end/Tela Inicial Geral/Tela_Inicial.jsx";
import Navbar_estrategias from "../Front-end/Estrategias/Navbar_estrategias.jsx";
import Tela_estrategias from "../Front-end/Estrategias/Tela_estrategias.jsx";
import Tela2_estrategias from "../Front-end/Estrategias/Tela2_estrategias.jsx";
import Tela_Inicial_tEA from "../Front-end/Pessoas TEA/Tela inicial TEA/Tela_Inicial_TEA.jsx";
import TelaIFuncionario from "../Front-end/Funcionarios/TelaInicial_Funcionario/TelaIFuncionario.jsx";
import Chat from "../Front-end/Chat/Chat.jsx";
import CalendarioTea from "../Front-end/Pessoas TEA/Calendario/CalendarioTea.jsx";
import Perfil_TEA from "../Front-end/Pessoas TEA/Perfil TEA/Perfil_TEA.jsx";
import FormularioCadastroTea from "../Front-end/Pessoas TEA/Cadastro TEA/FormularioCadastroTea.jsx";
import Login_TEA from "../Front-end/Pessoas TEA/Login TEA/Login_TEA.jsx";
import Cadastro_TEA from "../Front-end/Pessoas TEA/Cadastro TEA/Cadastro_TEA.jsx";

const Router = createBrowserRouter([
{path: "/", element: <Tela_Inicial/> },
{path: "funcionarioC", element: <FuncionarioCadastro/> },
{path: "perfilF", element: <PerfilFuncionario/>},
{path: "modal", element: <Modal_cadastros/>},
{path: "Tenho_Interesse", element: <Cadastro_interesse/>},
{path: "login", element: <LoginFuncionario/>},
{path: "verPerfil", element: <VerPerfilFuncionario/>},
{path: "telaitea", element: <Tela_Inicial_tEA/>},
{path: "navbar", element: <Navbar_estrategias/>},
{path: "estrategiasS", element: <Tela_estrategias/>},
{path: "estrategiasM", element: <Tela2_estrategias/>},
{path: "telaInicialFuncionario", element: <TelaIFuncionario/>},
{path: "Mudanca_rotina", element: <Tela2_estrategias/>},
// {path: "chat", element: <Chat/>},
{path: "logintea", element: <Login_TEA/>}
])

export default Router

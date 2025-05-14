import { createBrowserRouter } from "react-router-dom";
import FuncionarioCadastro from "../Front-end/Funcionarios/Cadastro/FuncionariosCadastro.jsx";
import PerfilFuncionario from "../Front-end/Funcionarios/Perfil/PerfilFuncionario.jsx";   
import LoginFuncionario from "../Front-end/Funcionarios/Login/LoginFuncionario.jsx";
import Modal_cadastros from "../Modal_de_Cadastros/Modal_cadastros.jsx";
import Cadastro_interesse from "../Front-end/Tenho-Interesse/Cadastro/Cadastro_interesse.jsx";
import Cadastro_interesse_dois from "../Front-end/Tenho-Interesse/Cadastro/Cadastro_interesse_dois.jsx";
import VerPerfilFuncionario from "../Front-end/Funcionarios/VerPerfilFuncionario/VerPerfilFuncionario.jsx";

import Tela_Inicial_tEA from "../Front-end/Pessoas TEA/Tela inicial TEA/Tela_Inicial_TEA.jsx";
import Tela_Inicial from "../Front-end/Tela Inicial Geral/Tela_Inicial.jsx";
import Perfil_TEA from "../Front-end/Pessoas TEA/Perfil TEA/Perfil_TEA.jsx";



const Router = createBrowserRouter([
{path: "/", element: <Tela_Inicial/> },
{path: "funcionarioC", element: <FuncionarioCadastro/> },
{path: "perfilF", element: <PerfilFuncionario/>},
// {path: "modal", element: <Modal_cadastros/>},
// {path: "Especialista_modal", element: <FuncionarioCadastro/>},
{path: "Tenho_Interesse", element: <Cadastro_interesse/>},
{path: "perfilF", element: <PerfilFuncionario/>},
{path: "login", element: <LoginFuncionario/>},
{path: "verPerfil", element: <VerPerfilFuncionario/>},
{path: "telaitea", element: <Tela_Inicial_tEA/>},
{path: "perfilTea", element: <Perfil_TEA/>},

])

export default Router

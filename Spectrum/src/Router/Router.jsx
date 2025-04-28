import { createBrowserRouter } from "react-router-dom";
import Tela_Inicial from "../Front-end/Tela_Inicial";
import FuncionarioCadastro from "../Front-end/Funcionarios/Cadastro/FuncionariosCadastro.jsx";
import PerfilFuncionario from "../Front-end/Funcionarios/Perfil/PerfilFuncionario.jsx";   
import LoginFuncionario from "../Front-end/Funcionarios/Login/LoginFuncionario.jsx";
import Modal_cadastros from "../Modal_de_Cadastros/Modal_cadastros.jsx";
import Cadastro_interesse from "../Front-end/Tenho-Interesse/Cadastro/Cadastro_interesse.jsx";

const Router = createBrowserRouter([
{path: "/", element: <Tela_Inicial/> },
{path: "funcionarioC", element: <FuncionarioCadastro/> },
// {path: "perfilF", element: <PerfilFuncionario/>}
// {path: "modal", element: <Modal_cadastros/>},
// {path: "Especialista_modal", element: <FuncionarioCadastro/>},
{path: "Tenho_Interesse", element: <Cadastro_interesse/>},
{path: "perfilF", element: <PerfilFuncionario/>},
{path: "login", element: <LoginFuncionario/>}
])

export default Router

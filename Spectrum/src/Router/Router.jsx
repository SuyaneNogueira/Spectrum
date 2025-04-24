import { createBrowserRouter } from "react-router-dom";
import Tela_Inicial from "../Front-end/Tela_Inicial";
import FuncionarioCadastro from "../Front-end/Funcionarios/Cadastro/FuncionariosCadastro.jsx";
import PerfilFuncionario from "../Front-end/Funcionarios/Perfil/PerfilFuncionario.jsx";   
import LoginFuncionario from "../Front-end/Funcionarios/Login/LoginFuncionario.jsx";

const Router = createBrowserRouter([
{path: "/inicio", element: <Tela_Inicial/> },
{path: "funcionarioC", element: <FuncionarioCadastro/>},
{path: "perfilF", element: <PerfilFuncionario/>},
{path: "login", element:<LoginFuncionario/>}

])

export default Router

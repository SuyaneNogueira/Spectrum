import { createBrowserRouter } from "react-router-dom";
import FuncionarioCadastro from "../Front-end/Funcionarios/Cadastro/FuncionariosCadastro.jsx";
import PerfilFuncionario from "../Front-end/Funcionarios/Perfil/PerfilFuncionario.jsx";   
import LoginFuncionario from "../Front-end/Funcionarios/Login/LoginFuncionario.jsx";
import Modal_cadastros from "../Modal_de_Cadastros/Modal_cadastros.jsx";
import Cadastro_interesse from "../Front-end/Tenho-Interesse/Cadastro/Cadastro_interesse.jsx";
import Cadastro_interesse_dois from "../Front-end/Tenho-Interesse/Cadastro/Cadastro_interesse_dois.jsx";
import Slider from "../Front-end/Slider/Slider.jsx";
import VerPerfilFuncionario from "../Front-end/Funcionarios/VerPerfilFuncionario/VerPerfilFuncionario.jsx";
import Tela_Inicial from "../Front-end/Tela Inicial Geral/Tela_Inicial.jsx";
import Chat from "../Front-end/Chat/Chat.jsx";


const Router = createBrowserRouter([
{path: "/", element: <Tela_Inicial/> },
{path: "funcionarioC", element: <FuncionarioCadastro/> },
// {path: "perfilF", element: <PerfilFuncionario/>}
// {path: "modal", element: <Modal_cadastros/>},
// {path: "Especialista_modal", element: <FuncionarioCadastro/>},
{path: "Tenho_Interesse", element: <Cadastro_interesse/>},
<<<<<<< HEAD
{path: "Tenho_Interesse2", element: <Cadastro_interesse_dois/>},
{path: "perfilF", element: <PerfilFuncionario/>}
=======
{path: "perfilF", element: <PerfilFuncionario/>},
{path: "chat", element: <Chat/>},
{path: "login", element: <LoginFuncionario/>},
{path: "verPerfil", element: <VerPerfilFuncionario/>}

>>>>>>> f74a8909b0cd0bba7b108cf8774337ff0e486888
])

export default Router

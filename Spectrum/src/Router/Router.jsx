import { createBrowserRouter } from "react-router-dom";
import Tela_Inicial from "../Front-end/Tela_Inicial";
import FuncionarioCadastro from "../Front-end/Funcionarios/Cadastro/FuncionariosCadastro.jsx";
import PerfilFuncionario from "../Front-end/Funcionarios/Perfil/PerfilFuncionario.jsx";
import Cadastro_interesse from "../Tenho-Interesse/Cadastro_interesse.jsx";
import Slider from "../Front-end/Slider/Slider.jsx";    
import LoginFuncionario from "../Front-end/Funcionarios/Login/LoginFuncionario.jsx";

const Router = createBrowserRouter([
<<<<<<< HEAD
{path: "/", element: <Tela_Inicial/> },
{path: "funcionarioC", element: <FuncionarioCadastro/>},
=======
{path: "/", element: <Cadastro_interesse/> },
{path: "funcionarioC", element: <FuncionarioCadastro/> },
>>>>>>> 7d7cb428cfaf1955bc37034422fc681c9746f1a1
{path: "perfilF", element: <PerfilFuncionario/>},
{path: "login", element:<LoginFuncionario/>}

])

export default Router

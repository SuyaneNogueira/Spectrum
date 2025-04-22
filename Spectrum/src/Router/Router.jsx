import { createBrowserRouter } from "react-router-dom";
import Tela_Inicial from "../Front-end/Tela_Inicial";
import FuncionarioCadastro from "../Front-end/Funcionarios/Cadastro/FuncionariosCadastro.jsx";
import PerfilFuncionario from "../Front-end/Funcionarios/Perfil/PerfilFuncionario.jsx";
import Cadastro_interesse from "../Tenho-Interesse/Cadastro_interesse.jsx";
import Slider from "../Front-end/Slider/Slider.jsx";    
import LoginFuncionario from "../Front-end/Funcionarios/Login/LoginFuncionario.jsx";

const Router = createBrowserRouter([
<<<<<<< HEAD
{path: "/", element: <FuncionarioCadastro/> },
=======
{path: "/", element: <Tela_Inicial/> },
>>>>>>> 91fcae5acf0401dcf889b2962e13a4af12190a6f
{path: "funcionarioC", element: <FuncionarioCadastro/> },
<<<<<<< HEAD
// {path: "perfilF", element: <PerfilFuncionario/>}
    
=======
{path: "perfilF", element: <PerfilFuncionario/>},
{path: "login", element:<LoginFuncionario/>}

>>>>>>> 8364c305f868401c70798d955e0b0715a3d7a4ec
])

export default Router

import { createBrowserRouter } from "react-router-dom";
import Tela_Inicial from "../Front-end/Tela_Inicial";
import FuncionarioCadastro from "../Front-end/Funcionarios/Cadastro/FuncionariosCadastro.jsx";
import PerfilFuncionario from "../Front-end/Funcionarios/Perfil/PerfilFuncionario.jsx";
import Cadastro_interesse from "../Tenho-Interesse/Cadastro_interesse.jsx";
import Slider from "../Front-end/Slider/Slider.jsx";    

const Router = createBrowserRouter([
<<<<<<< HEAD
{path: "/", element: <Cadastro_interesse/> },
=======
    
{path: "/", element: <Tela_Inicial/> },
>>>>>>> fb4adfa1e4bbcb27f51b2f1cf894cf516b8cd332
{path: "funcionarioC", element: <FuncionarioCadastro/> },
{path: "perfilF", element: <PerfilFuncionario/>},

])

export default Router

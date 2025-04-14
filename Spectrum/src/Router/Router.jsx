import { createBrowserRouter } from "react-router-dom";
import Tela_Inicial from "../Front-end/Tela_Inicial";
import FuncionarioCadastro from "../Front-end/Funcionarios/Cadastro/FuncionariosCadastro.jsx";
import PerfilFuncionario from "../Front-end/Funcionarios/Perfil/PerfilFuncionario.jsx";
import TelaIFuncionario from "../Front-end/Funcionarios/TelaInicial_Funcionario/TelaIFuncionario.jsx";
const Router = createBrowserRouter([
{path: "/", element: <Tela_Inicial/> },
{path: "funcionarioC", element: <FuncionarioCadastro/> },
{path: "perfilF", element: <PerfilFuncionario/>},
{path: "TelaIFuncionario", element: <TelaIFuncionario/>}
    
])

export default Router

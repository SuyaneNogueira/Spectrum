import { createBrowserRouter } from "react-router-dom";
import Tela_Inicial from "../Front-end/Tela_Inicial";
import FuncionarioCadastro from "../Front-end/Funcionarios/Cadastro/FuncionariosCadastro.jsx";
import PerfilFuncionario from "../Front-end/Funcionarios/Perfil/PerfilFuncionario.jsx";
<<<<<<< HEAD
import TelaIFuncionario from "../Front-end/Funcionarios/TelaInicial_Funcionario/TelaIFuncionario.jsx";
=======
import Cadastro_interesse from "../Tenho-Interesse/Cadastro_interesse.jsx";
>>>>>>> dbb7689e752e65dc834eb30613d8daa72e85f1cf
const Router = createBrowserRouter([
{path: "/", element: <Cadastro_interesse/> },
{path: "funcionarioC", element: <FuncionarioCadastro/> },
{path: "perfilF", element: <PerfilFuncionario/>},
{path: "TelaIFuncionario", element: <TelaIFuncionario/>}
    
])

export default Router

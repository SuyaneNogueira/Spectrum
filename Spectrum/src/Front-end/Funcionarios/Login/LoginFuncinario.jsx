import React from 'react'
import './LoginFuncinario.css'
function LoginFuncinario() {
  return (
    <div>
          <div>
        <img src="./lawofdefense.jpg" alt=""/><h2>Login</h2>
      {/* inicio  */}<div>
    <div>
       <p>Nome Completo:</p> <input  type="text" name="" id="" />  
    </div>
  
    <div>
       <p>Email: </p> <input type="text" name="" id="" />
    </div>

    <div>
       <p>Senha:</p>  <input type="password" name="" id="" />
    </div>
{/* fim  */}</div>

<div>
    <div>
      <button>Login</button>
    </div>
    <div>
      você ainda não possui cadastro? <button>Cadastre-se</button>
    </div>
</div>
    </div>
    </div>
  )
}

export default LoginFuncinario

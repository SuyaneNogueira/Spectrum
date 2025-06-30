
// ------------------------------------
// ------------------------------------

async function connect() {
  const { Pool } = require("pg");

  if(global.connection)
    return global.connection.connect();

  const pool = new Pool({
  user: process.env.USER_NAME,
  host: process.env.HOST_NAME,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  dialect: process.env.DB_DIALECT,
  port: process.env.PORT_NUMBER
  });

  const client = await pool.connect();
  console.log("O Pool de conexão foi criado com sucesso!")
  client.release();

  global.connection = pool;


  return pool.connect()
}

connect();
// todos os responsáveis
// app.get('/responsavel', async (req, res) => {
//   try {
//     const result = await pool.query('SELECT * FROM responsavel ORDER BY id');
//     res.json(result.rows);
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: 'Erro ao buscar responsável' });
//   }
// });

async function selectResponsavel() {
    // Estabelecer conexão
    const client = await connect();
 const res = await client.query('SELECT * FROM responsavel ORDER BY id');

    // Enviar comando sql para o banco de dados
    // const res = await client.query("SELECT * FROM clientes");

    return res.rows;
}

async function insertResponsavel() {

    const client = await connect();
 const res = await client.query('INSERT INTO responsavel (nome, email, senha) VALUES ($1, $2, $3) RETURNING *')
    return res.rows;

}

async function updateResponsavel(id, responsavel) {
    // Estabelecer conexão
    const client = await connect();
    // query
   const sql = 'UPDATE responsavel SET nome=$1, email=$2, senha=$3 WHERE id=$4 RETURNING *'
    // parâmetros que devem ser injetados na consulta
    const values = [responsavel.nome, responsavel.email, responsavel.senha, id];
    // não tem retorno
    const result = await client.query(sql, values);
    return result;
   
}
//====================================
// criar um responsável
// app.post('/responsavel', async (req, res) => {
//   const { nome, email, senha } = req.body;
//   try {
//     const result = await pool.query(
//       'INSERT INTO responsavel (nome, email, senha) VALUES ($1, $2, $3) RETURNING *',
//       [nome, email, senha]
//     );
//     res.status(201).json(result.rows[0]);
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: 'Erro ao criar responsável' });
//   }
// });

//  atualizar o responsável
// app.put('/responsavel/:id', async (req, res) => {
//   const { id } = req.params;
//   const { nome, email, senha } = req.body;
//   try {
//     const result = await pool.query(
//       'UPDATE responsavel SET nome=$1, email=$2, senha=$3 WHERE id=$4 RETURNING *',
//       [nome, email, senha, id]
//     );
//     res.json(result.rows[0]);
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: 'Erro ao atualizar responsável' });
//   }
// });
async function deleteResponsavel(id) {
   // Estabelecer conexão
    const client = await connect();
    // parâmetros que devem ser injetados na consulta
    const sql = "DELETE FROM responsavel WHERE id=$1";
    const values = [id];
    // não tem retorno
    await client.query(sql, values)
}



// return pool.connect();

// console.log("Backend Rodando!")
module.exports = {
 selectResponsavel,
 insertResponsavel,
 updateResponsavel,
 deleteResponsavel
}









































// const { Pool } = require("pg");

// async function connect() {
//   if (global.connection) return global.connection;

//   const pool = new Pool({
//     user: process.env.USER_NAME,
//     host: process.env.HOST_NAME,
//     database: process.env.DB_NAME,
//     password: process.env.DB_PASSWORD,
//     port: process.env.PORT_NUMBER
//   });

//   console.log("Pool de conexão criado com sucesso!");
//   global.connection = pool;
//   return pool;
// }

// async function selectCustomers() {
//   const db = await connect();
//   const res = await db.query("SELECT * FROM especialistas");
//   return res.rows;
// }

// async function selectCustomer(id) {
//   const db = await connect();
//   const res = await db.query("SELECT * FROM especialistas WHERE cpf=$1", [id]);
//   return res.rows;
// }

// async function insertCustomer(customer) {
//   const db = await connect();
//   const sql = "INSERT INTO especialistas (cpf, nome, email, idade, profissao) VALUES ($1, $2, $3, $4, $5)";
//   const values = [customer.cpf, customer.nome, customer.email, customer.idade, customer.profissao];
//   await db.query(sql, values);
// }

// module.exports = {
//   insertCustomer,
//   selectCustomers,
//   selectCustomer
// };
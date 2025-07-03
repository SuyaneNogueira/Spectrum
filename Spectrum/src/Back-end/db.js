
// // ------------------------------------
// // ------------------------------------

// async function connect() {
//   const { Pool } = require("pg");

//   if(global.connection)
//     return global.connection.connect();

//   const pool = new Pool({
//   user: process.env.USER_NAME,
//   host: process.env.HOST_NAME,
//   database: process.env.DB_NAME,
//   password: process.env.DB_PASSWORD,
//   dialect: process.env.DB_DIALECT,
//   port: process.env.PORT_NUMBER
//   });

//   const client = await pool.connect();
//   console.log("O Pool de conexão foi criado com sucesso!")
//   client.release();

//   global.connection = pool;


//   return pool.connect()
// }

// connect();


// async function selectResponsavel() {
//     // Estabelecer conexão
//     const client = await connect();
//  const res = await client.query('SELECT * FROM responsavel ORDER BY id');

//     // Enviar comando sql para o banco de dados
//     // const res = await client.query("SELECT * FROM clientes");

//     return res.rows;
// }

// async function insertResponsavel() {

//     const client = await connect();
//  const res = await client.query('INSERT INTO responsavel (nome, email, senha) VALUES ($1, $2, $3) RETURNING *')
//     return res.rows;

// }

// async function updateResponsavel(id, responsavel) {
//     // Estabelecer conexão
//     const client = await connect();
//     // query
//    const sql = 'UPDATE responsavel SET nome=$1, email=$2, senha=$3 WHERE id=$4 RETURNING *'
//     // parâmetros que devem ser injetados na consulta
//     const values = [responsavel.nome, responsavel.email, responsavel.senha, id];
//     // não tem retorno
//     const result = await client.query(sql, values);
//     return result;
   
// }

// async function deleteResponsavel(id) {
//    // Estabelecer conexão
//     const client = await connect();
//     // parâmetros que devem ser injetados na consulta
//     const sql = "DELETE FROM responsavel WHERE id=$1";
//     const values = [id];
//     // não tem retorno
//     await client.query(sql, values)
// }
// //====================================

// async function selectPessoaTea() {
//   // Estabelecer conexão
//   const client = await connect();
// const res = await client.query('SELECT * FROM pessoatea ORDER BY id');
//   return res.rows;
// }

// async function insertPessoaTea() {

//   const client = await connect();
// const res = await client.query('INSERT INTO pessoatea (nome, email, senha) VALUES ($1, $2, $3) RETURNING *')
//   return res.rows;

// }

// async function updatePessoaTea(id, pessoaTea) {
//   // Estabelecer conexão
//   const client = await connect();
//   // query
//  const sql = 'UPDATE pessoatea SET nome=$1, email=$2, senha=$3 WHERE id=$4 RETURNING *'
//   // parâmetros que devem ser injetados na consulta
//   const values = [pessoaTea.nome, pessoaTea.email, pessoaTea.senha, id];
//   // não tem retorno
//   const result = await client.query(sql, values);
//   return result;
 
// }

// async function deletePessoaTea(id) {
//  // Estabelecer conexão
//   const client = await connect();
//   // parâmetros que devem ser injetados na consulta
//   const sql = "DELETE FROM pessoatea WHERE id=$1";
//   const values = [id];
//   // não tem retorno
//   await client.query(sql, values)
// }
// //====================================

// async function selectInteresse() {
//   // Estabelecer conexão
//   const client = await connect();
// const res = await client.query('SELECT * FROM interesse ORDER BY id');


//   return res.rows;
// }

// async function insertInteresse() {

//   const client = await connect();
// const res = await client.query('INSERT INTO Interesse (nome, email, senha) VALUES ($1, $2, $3) RETURNING *')
//   return res.rows;

// }

// async function updateInteresse(id, Interesse) {
//   // Estabelecer conexão
//   const client = await connect();
//   // query
//  const sql = 'UPDATE responsavel SET nome=$1, email=$2, senha=$3 WHERE id=$4 RETURNING *'
//   // parâmetros que devem ser injetados na consulta
//   const values = [Interesse.nome, Interesse.email, Interesse.senha, id];
//   // não tem retorno
//   const result = await client.query(sql, values);
//   return result;
 
// }

// async function deleteInteresse(id) {
//  // Estabelecer conexão
//   const client = await connect();
//   // parâmetros que devem ser injetados na consulta
//   const sql = "DELETE FROM Interesse WHERE id=$1";
//   const values = [id];
//   // não tem retorno
//   await client.query(sql, values)
// }
// //====================================

// async function selectEspecialistas() {
//   // Estabelecer conexão
//   const client = await connect();
// const res = await client.query('SELECT * FROM responsavel ORDER BY id');

//   return res.rows;
// }

// async function insertEspecialistas() {

//   const client = await connect();
// const res = await client.query('INSERT INTO responsavel (nome, email, senha) VALUES ($1, $2, $3) RETURNING *')
//   return res.rows;

// }

// async function updateEspecialistas(id, especialistas) {
//   // Estabelecer conexão
//   const client = await connect();
//   // query
//  const sql = 'UPDATE especialistas SET nome=$1, email=$2, senha=$3 WHERE id=$4 RETURNING *'
//   // parâmetros que devem ser injetados na consulta
//   const values = [especialistas.nome, especialistas.email, especialistas.senha, id];
//   // não tem retorno
//   const result = await client.query(sql, values);
//   return result;
 
// }

// async function deleteEspecialistas(id) {
//  // Estabelecer conexão
//   const client = await connect();
//   // parâmetros que devem ser injetados na consulta
//   const sql = "DELETE FROM especialistas WHERE id=$1";
//   const values = [id];
//   // não tem retorno
//   await client.query(sql, values)
// }
// //====================================

// // return pool.connect();

// // console.log("Backend Rodando!")
// module.exports = {
//  selectResponsavel,
//  insertResponsavel,
//  updateResponsavel,
//  deleteResponsavel,
//  selectPessoaTea,
//  insertPessoaTea,
//  updatePessoaTea,
//  deletePessoaTea,
//  selectInteresse,
//  insertInteresse,
//  updateInteresse,
//  deleteInteresse,
//  selectEspecialistas,
//  insertEspecialistas,
//  updateEspecialistas,
//  deleteEspecialistas
// }
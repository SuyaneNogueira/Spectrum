const { Pool } = require("pg");

async function connect() {
  if (global.connection) return global.connection;

  const pool = new Pool({
    user: process.env.USER_NAME,
    host: process.env.HOST_NAME,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.PORT_NUMBER
  });

  console.log("Pool de conexão criado com sucesso!");
  global.connection = pool;
  return pool;
}

async function selectCustomers() {
  const db = await connect();
  const res = await db.query("SELECT * FROM especialistas");
  return res.rows;
}

async function selectCustomer(id) {
  const db = await connect();
  const res = await db.query("SELECT * FROM especialistas WHERE cpf=$1", [id]);
  return res.rows;
}

async function insertCustomer(customer) {
  const db = await connect();
  const sql = "INSERT INTO especialistas (cpf, nome, email, idade, profissao) VALUES ($1, $2, $3, $4, $5)";
  const values = [customer.cpf, customer.nome, customer.email, customer.idade, customer.profissao];
  await db.query(sql, values);
}

module.exports = {
  insertCustomer,
  selectCustomers,
  selectCustomer
};

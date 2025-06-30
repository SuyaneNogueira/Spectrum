// require("dotenv").config(); 

import dotenv from "dotenv";
dotenv.config();

const cors = require('cors');

const db = require("./db");

const port = process.env.PORT;

const express = require('express');

const app = express();

app.use(express.json());
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}));
// app.get('caminho da rota', (função de callback que na verdade é a função que vai ser disparada quando a rota é chamada)=> {})

app.get('/', (req, res) => {
    res.json({
        message: "Funcionando!!!"
    })
})



// app.listen(port);

app.get('/responsavel', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM responsavel ORDER BY id');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erro ao buscar responsável' });
  }
});
app.get('/responsavel', async (req, res) => {
    const responsavel = await db.selectResponsavel();

    res.json(responsavel);
})


// criar um responsável
app.post('/responsavel', async (req, res) => {
  const { nome, email, senha } = req.body;
  try {
    const result = await pool.query(
      'INSERT INTO responsavel (nome, email, senha) VALUES ($1, $2, $3) RETURNING *',
      [nome, email, senha]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erro ao criar responsável' });
  }
});

//  atualizar o responsável
app.put('/responsavel/:id', async (req, res) => {
  const { id } = req.params;
  const updateDados= req.body;
const result = await db.updateResponsavel(id, updateDados)
// res.sendStatus(200) 
res.json(result.rows[0]);
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
});

app.delete("/responsavel/:id", async (req, res) => {
    await db.deleteResponsavel(req.params.id)
    res.status(204).send();
})

//  apagar um responsável
// app.delete('/responsavel/:id', async (req, res) => {
//   const { id } = req.params;
//   try {
//     await pool.query('DELETE FROM responsavel WHERE id=$1', [id]);
//     res.status(204).send();
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: 'Erro ao deletar responsável' });
//   }
// });

// const PORT = 6000;
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});







// // Rota GET para listar todos os clientes
// app.get('/especialistas', async (req, res) => {
//     // Chama a função que seleciona os clientes no banco de dados
//     const clientes = await db.selectCustomers();
//     // Envia a resposta em formato JSON contendo os clientes
//     res.json(clientes);
// });


// // Rota para listar um cliente específico
// app.get('/especialistas/:id', async (req, res) => {
//     // Captura o parâmetro 'id' presente na URL, que corresponde ao CPF do cliente
//     const cliente = await db.selectCustomer(req.params.id);
//     // Responde com os dados do cliente em formato JSON
//     res.json(cliente);
// });


// // Rota responsável pelo envio de informações para a função que insere dados de clientes no banco de dados
// app.post('/especialistas', async (req, res) => {
//     // O objeto req.body contem os dados enviados pelo cliente na requisição POST
//     await db.insertCustomer(req.body);
//     // Envia o status 201 para indicar que um novo recurso foi criado com sucesso
//     res.sendStatus(201);
// });


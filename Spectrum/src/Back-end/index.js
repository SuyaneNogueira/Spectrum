require("dotenv").config(); 

const db = require("./db");

const port = process.env.PORT;

const express = require('express');

const app = express();

app.use(express.json());


// Rota GET para listar todos os clientes
app.get('/', async (req, res) => {
    // Chama a função que seleciona os clientes no banco de dados
    const clientes = await db.selectCustomers();
    // Envia a resposta em formato JSON contendo os clientes
    res.json(clientes);
});


// Rota para listar um cliente específico
app.get('/client/:id', async (req, res) => {
    // Captura o parâmetro 'id' presente na URL, que corresponde ao CPF do cliente
    const cliente = await db.selectCustomer(req.params.id);
    // Responde com os dados do cliente em formato JSON
    res.json(cliente);
});


// Rota responsável pelo envio de informações para a função que insere dados de clientes no banco de dados
app.post('/client', async (req, res) => {
    // O objeto req.body contem os dados enviados pelo cliente na requisição POST
    await db.insertCustomer(req.body);
    // Envia o status 201 para indicar que um novo recurso foi criado com sucesso
    res.sendStatus(201);
});

app.listen(port);

console.log("Backend Rodando!")
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

app.get('/', (req, res) => {
    res.json({
        message: "Funcionando!!!"
    })
})



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
const resultResponsavel = await db.updateResponsavel(id, updateDados)

  try {
    const resultresponsavel = await pool.query(
      'UPDATE responsavel SET nome=$1, email=$2, senha=$3 WHERE id=$4 RETURNING *',
      [nome, email, senha, id]
    );
    res.json(resultresponsavel.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erro ao atualizar responsável' });
  }
res.json(resultResponsavel.rows[0]);

});

app.delete("/responsavel/:id", async (req, res) => {
    await db.deleteResponsavel(req.params.id)
    res.status(204).send();
})

// ======================================

app.get('/especialistas', async (req, res) => {
  try {
    const resultEspecialista = await pool.query('SELECT * FROM especialistas ORDER BY id');
    res.json(resultEspecialista.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erro ao buscar Especialista' });
  }
});
app.get('/especialistas', async (req, res) => {
    const especialistas = await db.selectEspecialistas();

    res.json(especialistas);
})


// criar um especialista
app.post('/especialistas', async (req, res) => {
  const { nome, email, senha } = req.body;
  try {
    const resultEspecialistas = await pool.query(
      'INSERT INTO especialistas (nome, email, senha) VALUES ($1, $2, $3) RETURNING *',
      [nome, email, senha]
    );
    res.status(201).json(resultEspecialistas.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erro ao criar o Especilaistas' });
  }
});

//  atualizar o especialista
app.put('/especilistas/:id', async (req, res) => {
  const { id } = req.params;
  const updateDadosEspecialista= req.body;
const resulEspecilista = await db.updateEspecialistas(id, updateDadosEspecialista)
  try {
    const resultadoEspecialista = await pool.query(
      'UPDATE especialistas SET nome=$1, email=$2, senha=$3 WHERE id=$4 RETURNING *',
      [nome, email, senha, id]
    );
    res.json(resultadoEspecialista.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erro ao atualizar o Especilista' });
  }
res.json(resulEspecilista.rows[0]);
});


app.delete("//especialistas:id", async (req, res) => {
    await db.deleteEspecialistas(req.params.id)
    res.status(204).send();
})


//====================

app.get('/interesse', async (req, res) => {
  try {
    const resultInteresse = await pool.query('SELECT * FROM interesse ORDER BY id');
    res.json(resultInteresse.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erro ao buscar a Pessoa interessada' });
  }
});
app.get('/interesse', async (req, res) => {
    const pessoainteresse = await db.selectInteresse();

    res.json(pessoainteresse);
})


// criar uma pessoa interessada
app.post('/interesse', async (req, res) => {
  const { nome, email, senha } = req.body;
  try {
    const resultPessoaInteressada = await pool.query(
      'INSERT INTO interesse (nome, email, senha) VALUES ($1, $2, $3) RETURNING *',
      [nome, email, senha]
    );
    res.status(201).json(resultPessoaInteressada.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erro ao criar a pessoa com interesse' });
  }
});

//  atualizar a pessoa interessada
app.put('/interesse/:id', async (req, res) => {
  const { id } = req.params;
  const updateDadosInteresse= req.body;
const resultInteressada = await db.updateInteresse(id, updateDadosInteresse)
  try {
    const ResltadoInteresse = await pool.query(
      'UPDATE interesse SET nome=$1, email=$2, senha=$3 WHERE id=$4 RETURNING *',
      [nome, email, senha, id]
    );
       res.json(ResltadoInteresse.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erro ao atualizar a pessoa interessada' });
  }
res.json(resultInteressada.rows[0]);
});



app.delete("/interesse/:id", async (req, res) => {
    await db.deleteInteresse(req.params.id)
    res.status(204).send();
})

//==========================

app.get('/pessoatea', async (req, res) => {
  try {
    const resultPessoaTea = await pool.query('SELECT * FROM pessoatea ORDER BY id');
    res.json(resultPessoaTea.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erro ao buscar a pessoa com TEA' });
  }
});
app.get('/pessoatea', async (req, res) => {
    const pessoaTea = await db.selectPessoaTea();

    res.json(pessoaTea);
})


// criar uma pessoa tea
app.post('/pessoatea', async (req, res) => {
  const { nome, email, senha } = req.body;
  try {
    const resultTea = await pool.query(
      'INSERT INTO pessoatea (nome, email, senha) VALUES ($1, $2, $3) RETURNING *',
      [nome, email, senha]
    );
    res.status(201).json(resultTea.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erro ao criar responsável' });
  }
});

//  atualizar o responsável
app.put('/pessoatea/:id', async (req, res) => {
  const { id } = req.params;
  const updateDadostea= req.body;
const resultTEA = await db.updatePessoaTea(id, updateDadostea)
  try {
    const resultpessoaTea = await pool.query(
      'UPDATE responsavel SET nome=$1, email=$2, senha=$3 WHERE id=$4 RETURNING *',
      [nome, email, senha, id]
    );
    
    res.json(resultpessoaTea.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erro ao atualizar a pessoa com TEA' });
  }
res.json(resultTEA.rows[0]);
});



app.delete("/responsavel/:id", async (req, res) => {
    await db.deleteResponsavel(req.params.id)
    res.status(204).send();
})


// const PORT = 6000;
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
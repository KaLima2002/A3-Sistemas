const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 4000;
contador = 0
// Configurar o body-parser para lidar com dados JSON
app.use(bodyParser.json());


// Rota para criar um novo lembrete
app.put('/lembretes', (req, res) => {
  contador++;
  const { texto } = req.body;
  lembretes[contador] = {
      contador, texto
  }
  res.status(201).send(lembretes[contador]);
});

// Rota para obter todos os lembretes
app.get('/lembretes', (req, res) => {
  res.json(lembretes);
});

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});

app.use(express.static('public'));
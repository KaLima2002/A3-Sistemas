const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 5000;
contador = 0
// Configurar o body-parser para lidar com dados JSON
app.use(bodyParser.json());


// Rota para criar um novo lembrete
app.put('/observacoes', (req, res) => {
  contador++;
  const { texto } = req.body;
  observacoes[contador] = {
      contador, texto
  }
  res.status(201).send(observacoes[contador]);
});

// Rota para obter todos os lembretes
app.get('/observacoes', (req, res) => {
  res.json(observacoes);
});

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});

app.use(express.static('public'));
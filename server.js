const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 4000;
const dataAtual = new Date();


// Configurar o body-parser para lidar com dados JSON
app.use(bodyParser.json());

// Array para armazenar os lembretes (substitua por um banco de dados em um ambiente de produção)
let lembretes = [];

// Array para armazenar a lista de compras (substitua por um banco de dados em um ambiente de produção)
let produto = [];

// Rota para criar um novo lembrete
app.put('/lembretes', (req, res) => {
  const { nome, descricao } = req.body;
  const novoLembrete = {     
        nome,
        descricao,
        data: `${dataAtual.toLocaleDateString()} ${dataAtual.toLocaleTimeString()}` };
  lembretes.push(novoLembrete);
  res.status(201).json({ message: 'Lembrete criado com sucesso.' });
});


// Rota para escolher um novo produto
app.put('/produto', (req, res) => {
  const { nome, preco, quantidade } = req.body;
  const novoProduto = {     
        nome,
        preco,
        quantidade};
  produto.push(novoProduto);
  res.status(201).json({ message: 'Produto adicionado com sucesso.' });
});

// Rota para obter todos os lembretes
app.get('/lembretes', (req, res) => {
  res.json(lembretes);
});

// Rota para obter todos os lembretes
app.get('/produto', (req, res) => {
  res.json(produto);
});


// Iniciar o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});

app.use(express.static('public'));

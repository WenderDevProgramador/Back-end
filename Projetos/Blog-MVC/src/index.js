const express = require('express');

const app = express();
const path = require('node:path');
const router = require('./routes');

const PORT = process.env.PORT || 3000;

// Configuração do EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))

// Configuração de arquivos estáticos
app.use(express.static('public'))

// Configuração para ler dados da requisição
app.use(express.urlencoded({ extended: true }));

// Rotas da aplicação 
app.use(router)

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta: \nhttp://localhost:${PORT}`);
})
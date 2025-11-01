
const express = require('express');

const server = express();

server.get('/', (request, response) => {
    response.send('Olá mundo! Servidor funcionando!\n Você está na pagina inicial.')
})

server.get('/artigos', (req, res) => {
    res.send('Você está na pagina de artigos!')
})

const PORT = 3000;

server.listen(PORT, () => {
    console.log(`Servidor rodando na porta http://localhost:${PORT}`);
})


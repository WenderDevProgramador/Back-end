const express = require('express');

const gamesController = require('./controller/games-controller');

const app = express();
const PORT = 3000;


app.get('/', (req, res) => {
    res.json({ message: 'Hello, world!' })
})

app.get('/games', gamesController.index);
app.get('/games/:id', gamesController.show);

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta: \n http://localhost:${PORT}`);
})
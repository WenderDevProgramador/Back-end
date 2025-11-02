const express = require('express');
const app = express();

const path = require('node:path');

const storedUsers = [];

// Configuração do EJS

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

// Configuração do body

app.use(express.urlencoded({ extended: true}));


app.get('/', (req,res) => {
    const title = 'Home page'
    const message = 'Mensagem dinâmica vinda do EJS'

    res.render('index', {title , message})
})

app.get('/formulario', (req, res ) => {
    res.render('form')
})

app.get('/usuarios', (req, res) => {
    res.render('user', {users: storedUsers})
})

app.post('/register', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    storedUsers.push({username, password});

    res.redirect('/usuarios')
})



const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})


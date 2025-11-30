const express = require('express')
const session = require('express-session')
const path = require('node:path');
const router = require('./routes');

const PORT = 3000;
const app = express()

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.use(express.urlencoded({extended: true}))


app.use(session({
    secret: 'palavara-chave-secreta',
    resave: false,
    saveUninitialized: true,
    cookie: {secure: false}
}))

app.use(router)





app.listen(PORT, () => {
    console.log(`Servidor iniciado: \n http://localhost:${PORT}`)
})
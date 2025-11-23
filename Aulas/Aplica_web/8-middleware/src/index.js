const express = require('express');
const middlewareC = require('./middlewares/middleware-c');
const app = express();

app.use((req, res, next) => {
    console.log('Executando o middleA')
    req.middlewareA = 'OK!'
    next()

})

const middlewareB = (req, res, next) => {
    console.log('Executando o midlleB')
    req.middlewareB = 'OK também!'
    next()
}


app.get('/testeA', (req, res) => {
    console.log({ a: req.middlewareA, b: req.middlewareB });
    throw new Error('Algo deu errado aqui!')
    res.end()
})

app.get('/testeB',middlewareC, middlewareB, (req, res) => {
    console.log({ a: req.middlewareA, b: req.middlewareB, c: req.middlewareC });
    res.end()
})


app.use((err,req, res, next) => {
    if(err) {
        console.log(err.message)
        res.status(400)
        res.json({message: err.message})
    } else {
        next()
    }
}) 






const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor iniciado na porta: 
        \n http://localhost:${PORT}`);
})
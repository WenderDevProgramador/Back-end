const router = require("./routes");

const express = require(('express'));
const app = express()
const PORT = 3000;

app.use(express.json());

app.use('/api',router)


app.listen(PORT, () => {
    console.log(`Servidor iniciado!
        Acesse em : http://localhost:${PORT}`)
})

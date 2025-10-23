const fs = require('node:fs');

fs.unlink('arquiv.txt', (err) => {
    if (err) {
        console.log('Erro ao deletar o arquivo:', err.message);
        return;
    }
    console.log('Arquivo deletado com sucesso!');
});
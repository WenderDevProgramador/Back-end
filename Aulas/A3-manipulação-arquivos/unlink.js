const fs = require('node:fs');

fs.unlink('arqui.txt', (err) => {
    if (err) {
        console.log('Erro ao deletar o arquivo:', err);
        return;
    }
    console.log('Arquivo deletado com sucesso!');
});
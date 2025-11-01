const fs = require('node:fs');

fs.rename('novo-nome.txt', 'arquivo.csv', (err) => {
    if (err) {
        console.log('Erro ao renomear o arquivo:', err);
        return;
    }
    console.log('Arquivo renomeado com sucesso!');
});

// Se você quiser usar a versão síncrona, pode fazer assim:
// try {
//   fs.renameSync('arquivo.txt', 'novo-nome.txt');
//   console.log('Arquivo renomeado com sucesso!');
// } catch (err) {
//   console.error('Erro ao renomear o arquivo:', err);
// }
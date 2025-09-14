const fs = require('node:fs');

const exists = fs.existsSync('arquivo.csv');

if (exists) {

    fs.readFile('arquivo.csv', 'utf-8', (error, data) => {
        if (error) {
            console.log('Erro ao ler o arquivo', error.message);
            return;
        }

        const entries = data.split(',')
        entries.forEach((entry) => console.log(`${entry.trim()} robou pão na casa do João.`))
    });
} else {
    console.log("Arquivo não existe.")
}


// try {
//     const data = fs.readFileSync('arquivo.txt', 'utf-8');
//     console.log(data);
//     console.log('Arquivo lido com sucesso!');
// } catch (error) {
//     console.log('Erro ao ler o arquivo', error.message);
// }
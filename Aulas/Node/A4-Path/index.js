const path = require('node:path');
const dir = 'src';
const file = 'app.js';

// join une vários pedaços de um caminho

const fullPath = path.join(__dirname, dir, file);
console.log(fullPath);

// __dirname é uma variável global que representa o diretório atual do arquivo

const relativePath = '../arquivos/relatorio.pdf'

const absolutePath = path.resolve(__dirname, relativePath);
console.log(absolutePath);

// resolve transforma um caminho relativo em absoluto
// resolve sempre parte do diretório atual (ou do diretório passado como primeiro argumento) e "sobe" na árvore de diretórios se necessário
// resolve elimina os "." e ".." do caminho, retornando o caminho mais curto possível
// resolve sempre retorna um caminho absoluto
// join apenas concatena os pedaços do caminho, sem considerar o diretório atual ou eliminar os "." e ".."
// join pode retornar um caminho relativo ou absoluto, dependendo dos pedaços passados como argumento

const fileName = path.basename(relativePath);
console.log(fileName);

// basename retorna o nome do arquivo com extensão

const ext = path.extname(absolutePath);
console.log(ext);

// extname retorna a extensão do arquivo


// Crie um arquivo que exporte , usando sintaxe ESModules, as 4 funções abaixo:
// Função que cria um arquivo de texto.
// Função que rescreve o texto dentro do arquivo criado.
// Função que lê o arquivo criado.
// Função que deleta o arquivo criado.
// Depois exporte para um outro arquivo e utilize as funções criadas.
// arquivo: funcoesArquivo.js
import fs from 'node:fs';

const conteudo = 'Meu arquivo criado';

const editArq = () => {
    const Novoconteudo = 'Olavo, Bolsonaro, Darciolo, Tarcisio, Ciro';
    return Novoconteudo
        .split(',')
        .map((item) => `Candidato a presidência: ${item.trim()}`)
        .join('\n');
};

export function criarArquivo() {
    fs.writeFile('meuarquivo.txt', conteudo, 'utf-8', (error) => {
        if (error) {
            console.log("Erro ao criar arquivo", error.message);
            return;
        }
        console.log('Arquivo criado.');
    });
}

export function rescreverArquivo() {
    fs.writeFile('meuarquivo.txt', editArq(), 'utf-8', (error) => {
        if (error) {
            console.log("Erro ao reescrever arquivo", error.message);
            return;
        }
        console.log('Arquivo reescrito.');
    });
}

export function lerArquivo() {
    fs.readFile('meuarquivo.txt', 'utf-8', (error, data) => {
        if (error) {
            console.log("Erro ao ler arquivo", error.message);
            return;
        }
        console.log('Conteúdo:', data);
    });
}

export function deletarArquivo() {
    fs.unlink('meuarquivo.txt', (error) => {
        if (error) {
            console.log("Erro ao deletar arquivo", error.message);
            return;
        }
        console.log('Arquivo deletado.');
    });
}
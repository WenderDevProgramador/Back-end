// Crie um arquivo que exporte , usando sintaxe ESModules, as 4 funções abaixo:
// Função que cria um arquivo de texto.
// Função que rescreve o texto dentro do arquivo criado.
// Função que lê o arquivo criado.
// Função que deleta o arquivo criado.
// Depois exporte para um outro arquivo e utilize as funções criadas.
// arquivo: funcoesArquivo.js
import { rejects } from 'node:assert';
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
    return new Promise((resolve, reject) => {
        fs.writeFile('meuarquivo.txt', conteudo, 'utf-8', (error) => {
            if (error) {
                reject("Erro ao criar arquivo", error.message);
            } else {
                
                console.log('Arquivo criado.');
                resolve();
            }

        });
    });

}

export function rescreverArquivo() {
    return new Promise((resolve, reject) => {
        fs.writeFile('meuarquivo.txt', editArq(), 'utf-8', (error) => {
            if (error) {
                reject("Erro ao reescrever arquivo", error.message);

            } else {
                
                console.log('Arquivo reescrito.');
                resolve();
            }

        });
    })

}

export function lerArquivo() {
    return new Promise((resolve, reject) => {
        fs.readFile('meuarquivo.txt', 'utf-8', (error, data) => {
            if (error) {
                reject("Erro ao ler arquivo", error.message);
                
            } else {
                
                console.log('Conteúdo:', data);
                resolve();
            }
            
        });
    })
}

export function deletarArquivo() {
    return new Promise((resolve, reject) => {
        fs.unlink('meuarquivo.txt', (error) => {
            if (error) {
                reject("Erro ao deletar arquivo", error.message);
            } else {
                
                console.log('Arquivo deletado.');
                resolve();
            }
        });
    })
}
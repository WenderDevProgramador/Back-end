// Crie um arquivo que exporte , usando sintaxe ESModules, as 4 funções abaixo:
// Função que cria um arquivo de texto.
// Função que rescreve o texto dentro do arquivo criado.
// Função que lê o arquivo criado.
// Função que deleta o arquivo criado.
// Depois exporte para um outro arquivo e utilize as funções criadas.


import fs from 'node:fs';

const Novoconteudo = 'Olavo, Bolsonaro, Darciolo, Tarcisio, Ciro'

const conteudo = 'Meu arquivo criado'

const editArq = () => {
    Novoconteudo.split(',').forEach((item) => `Candidato a presidencia: ${item.trim()}/n`)
}

export const criarArquivo = () => {
    fs.writeFile('meuarquivo.txt', conteudo, 'utf-8', (error) => {
        if (error) {
            console.log("Erro ao criar arquivo", error.message)
            return
        }

        console.log('Arquivo editado.')
    });
}




export const rescreverArquivo = () => {
    fs.writeFile('meuarquivo.txt', editArq(), 'utf-8', (error) => {
        if (error) {
            console.log("Erro ao criar arquivo", error.message)
            return

        } 

        console.log('Arquivo Reeinscrito.')
    });
}




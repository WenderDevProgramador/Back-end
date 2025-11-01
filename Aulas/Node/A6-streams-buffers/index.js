
const fs = require('node:fs');

const streamLeitura = fs.createReadStream('arq.txt')
// const streamImgLeitura = fs.createReadStream('img.png')

const buffer = []

streamLeitura.on('data', (chunk) => {
    buffer.push(chunk)
    console.log('Um chunk foi processado.')
})


streamLeitura.on('end', () => {
    
    console.log('buffer: \n ' , buffer)
    const dadosCompletos = Buffer.concat(buffer).toString()
    console.log('Dados lidos: \n ' , dadosCompletos)
})


const fs = require("node:fs")

const content = 'Mária, Jose, Paula , Antonia, Sileide, Joseane'

fs.writeFile('arquivo.csv', content, 'utf-8',(error) => {
    if (error) {
        console.log("Erro ao escrever arquivo", error.message)
        return
    }

    console.log("Arquivo escrito com sucesso, de forma assíncrona.")

})



// try {

//     fs.writeFileSync("arquivo.txt", "Olá mundo!","utf-8")
//     console.log("Arquivo escrito com sucesso")

// } catch (error) {
//     console.log("Erro ao escrever arquivo", error.message)
// }
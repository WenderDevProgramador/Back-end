import { criarArquivo, deletarArquivo, lerArquivo, rescreverArquivo } from "./functions.mjs";

async function main() {
    try {
        await criarArquivo();
        console.log('----------------------');
        await lerArquivo();
        console.log('----------------------');
        await rescreverArquivo();
        console.log('----------------------');
        await lerArquivo();
        console.log('----------------------');
        setTimeout( async () => {
            await deletarArquivo();
        }, 20000);
    } catch (error) {
        console.error(error);
    }

}

main();
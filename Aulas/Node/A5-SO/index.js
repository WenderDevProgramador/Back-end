const os = require('node:os');

// Plataform do sistema operacional

const plataform = os.platform();

console.log('Plataforma do so: ', plataform);

// Retorna a arquitetura do processador

const arch = os.arch();
console.log('Arquitetura do processador: ', arch);

// Informações sobre a CPU

const cpus = os.cpus();
console.log('Info da CPU: ', cpus);

const memory = os.totalmem();
console.log(`Memória total do sistema: ${memory / 1024 / 1024 / 1024} GB`);

const freeMemory = os.freemem();
console.log(`Memória livre do sistema: ${freeMemory / 1024 / 1024 / 1024} GB`);


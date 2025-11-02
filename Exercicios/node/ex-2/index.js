// Crie um monitor de sistema que deverá exibir detalhes do computador e seus componentes a cada segundo. Além dissso, os dados devem ser salvos em um arquivo de log, 'log.txt',localizado na pasta log, na raiz do sistema de arquivos. Este exercicio deve ser feito apenas usando módulos nativos do node.js.

// Requisitos: 

// 1 - Função:
// A cada segundo, o monitor deve exibir os seguintes dados:
// - Nome do sistema operacional
// - Arquitetura do sistema operacional
// - Modelo do processador
// - Tempo de atividade do sistema
// - Versão do sistema operacional
// - Total de memória RAM
// - Memória RAM disponível
// - Uso de CPU em porcentagem

// 2 - Funçaõ:
// A cada 1 segundo registre os detalhes exibidos no arquivo log.txt. Cada resgistro deve ser acrescentado ao arquivo, separado por uma linha em branco.

// 3 - Funçaõ:
// Crie a pasta log na raiz do sistema de arquivos se ela não existir.


const os = require('node:os');
const fs = require('node:fs');
const path = require('node:path');

const systemPlatformMap = {
    'aix': 'AIX',
    'darwin': 'macOS',
    'freebsd': 'FreeBSD',
    'linux': 'Linux',
    'openbsd': 'OpenBSD',
    'sunos': 'SunOS',
    'win32': 'Windows'
}

const getSystemInfo = () => {
    const system = systemPlatformMap[os.platform()];
    const arch = os.arch();
    const cpuModel = os.cpus()[0].model;
    const uptime = Math.floor(os.uptime() / 60 / 60/ 24);
    const uptimeDaysSeconds = uptime * 24 * 60 * 60;
    const uptimeHours = Math.floor((os.uptime() - uptimeDaysSeconds) / 60 / 60);
    const osVersion = os.version();
    const totalMem = (os.totalmem() / (1024 ** 3)).toFixed(2) + ' GB';
    const freeMem = (os.freemem() / (1024 ** 3)).toFixed(2) + ' GB';

    return { system, arch, cpuModel, uptime, uptimeDaysSeconds, uptimeHours, osVersion, totalMem, freeMem };
}

const printLog = ({ system, arch, cpuModel, uptime, uptimeDaysSeconds, uptimeHours, osVersion, totalMem, freeMem }) => {

    console.log(`DETALHES DO SISTEMA:
        Sistema Operacional: ${system}
        Arquitetura: ${arch}
        Modelo do Processador: ${cpuModel}
        Tempo de Atividade: ${uptime} segundos
        Tempo de Atividade: ${uptimeDaysSeconds} dias
        Tempo de Atividade: ${uptimeHours} horas
        Versão do Sistema Operacional: ${osVersion}
        Memória RAM Total: ${totalMem}
        Memória RAM Disponível: ${freeMem}
    `);
}

const saveLog = ({ system, arch, cpuModel, uptime, uptimeDaysSeconds, uptimeHours, osVersion, totalMem, freeMem }) => {
    const log = `DETALHES DO SISTEMA:
        Sistema Operacional: ${system}
        Arquitetura: ${arch}
        Modelo do Processador: ${cpuModel}
        Tempo de Atividade: ${uptime} segundos
        Tempo de Atividade: ${uptimeDaysSeconds} dias
        Tempo de Atividade: ${uptimeHours} horas
        Versão do Sistema Operacional: ${osVersion}
        Memória RAM Total: ${totalMem}
        Memória RAM Disponível: ${freeMem}
    `

    const logDir = path.join(__dirname, 'log');
    if (!fs.existsSync(logDir)) {
        fs.mkdirSync(logDir);
    }

    const logFile = path.join(logDir, 'log.txt');
    fs.appendFileSync(logFile, log + '\n\n');
}



const systemInfo = getSystemInfo();

printLog(systemInfo);
saveLog(systemInfo);


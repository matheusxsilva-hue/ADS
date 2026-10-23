
const http = require('http');

const servidor = http.createServer((req, res) => {
    const caminho = req.url;

    if (caminho === '/') {
        res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
        res.end('Sistema de Cursos Técnicos');
    } 
    else if (caminho === '/cursos') {
        res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
        res.end('Lista de cursos disponíveis');
    } 
    else if (caminho === '/professores') {
        res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
        res.end('Lista de professores');
    } 
    else if (caminho === '/sobre') {
        res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
        res.end('Informações sobre a instituição');
    } 
    else {
        res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
        res.end('Página não encontrada!');
    }
});

servidor.on('error', (erro) => {
    console.log('Erro ao iniciar o servidor:', erro.message);
});

servidor.listen(3000, () => {
    console.log('Servidor funcionando em http://localhost:3000');
});

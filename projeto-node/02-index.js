const http = require("http");

const servidor = http.createServer((req, res) => {

    res.writeHead(200, {
        "Content-Type": "text/plain"
    });

    res.end("Olá, Mundo! Servidor Node.js funcionando!");
});

servidor.listen(3000, () => {
    console.log("Servidor executando na porta 3000.");
});
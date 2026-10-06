import http from "http";

const servidor = http.createServer((req, res) => {

    if (req.url === "/") {

        res.statusCode = 200;
        res.setHeader("Content-Type", "text/plain");

        res.end("Página inicial");

    } else if (req.url === "/sobre") {

        res.statusCode = 200;
        res.setHeader("Content-Type", "text/plain");

        res.end("Página sobre o sistema");

    } else if (req.url === "/contato") {

        res.statusCode = 200;
        res.setHeader("Content-Type", "text/plain");

        res.end("Página de contato");

    } else {

        res.statusCode = 404;
        res.setHeader("Content-Type", "text/plain");

        res.end("Página não encontrada");
    }
});

servidor.listen(3000, () => {
    console.log("Servidor iniciado na porta 3000.");
});

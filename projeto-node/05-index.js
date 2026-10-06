import http from "http";

const servidor = http.createServer((req, res) => {

    if (req.url === "/dados") {

        const dados = {
            nome: "Maria",
            idade: 22,
            curso: "Sistemas de Informação"
        };

        res.setHeader("Content-Type", "application/json");

        res.end(JSON.stringify(dados));
    }
});

servidor.listen(3000, () => {
    console.log("Servidor iniciado.");
});

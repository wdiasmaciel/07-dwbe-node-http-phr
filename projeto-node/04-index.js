import http from "http";

const servidor = http.createServer((req, res) => {

    if (req.url === "/dados") {

        const dados = {
            nome: "João",
            idade: 20,
            curso: "Sistemas de Informação"
        };

        res.writeHead(200, {
            "Content-Type": "application/json"
        });

        res.end(JSON.stringify(dados));
    }

});

servidor.listen(3000, () => {
    console.log("Servidor iniciado na porta 3000.");
});
import http from "http";

const servidor = http.createServer((req, res) => {

    if (req.url === "/dados") {

        const dados = [
            {
                id: 1,
                nome: "João",
                idade: 20
            },
            {
                id: 2,
                nome: "Maria",
                idade: 22
            },
            {
                id: 3,
                nome: "Carlos",
                idade: 21
            }
        ];

        res.setHeader("Content-Type", "application/json");

        res.end(JSON.stringify(dados));
    }
});

servidor.listen(3000, () => {
    console.log("Servidor iniciado.");
});

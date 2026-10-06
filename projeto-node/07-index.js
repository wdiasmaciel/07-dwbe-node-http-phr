import http from "http";

const servidor = http.createServer((req, res) => {

    if (req.url === "/dados" || req.url === "/") {

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

        const linhas = dados.map(({ id, nome, idade }) => `
            <tr>
                <td>${id}</td>
                <td>${nome}</td>
                <td>${idade}</td>
            </tr>
        `).join("");

        res.setHeader("Content-Type", "text/html; charset=utf-8");
        res.end(`<!DOCTYPE html>
                 <html lang="pt-BR">
                 <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>Dados</title>
                 </head>
                 <body>
                    <h1>Dados dos usuários</h1>
                    <table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Nome</th>
                                <th>Idade</th>
                            </tr>
                        </thead>
                        <tbody>${linhas}
                        </tbody>
                    </table>
                 </body>
                 </html>`);
                return;
    }

    res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
    res.end("Página não encontrada.");
});

servidor.listen(3000, () => {
    console.log("Servidor iniciado.");
});

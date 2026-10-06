import http from "http";

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

function gerarLinhasTabela(dados) {
    return dados.map(({ id, nome, idade }) => `
        <tr>
            <td>${id}</td>
            <td>${nome}</td>
            <td>${idade}</td>
        </tr>
    `).join("");
}

function gerarPaginaHtml(dados) {
    const linhas = gerarLinhasTabela(dados);

    return `<!DOCTYPE html>
            <html lang="pt-BR">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <link rel="stylesheet" href="/style/estilo.css">
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
            </html>`;
}

function tratarRequisicao(req, res) {
    if (req.url === "/" || req.url === "/dados") {
        res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
        res.end(gerarPaginaHtml(dados));
        return;
    }

    res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
    res.end("Página não encontrada.");
}

const servidor = http.createServer(tratarRequisicao);
const porta = process.env.PORT || 3000;

servidor.listen(porta, () => {
    console.log(`Servidor iniciado na porta ${porta}.`);
});

const express = require('express')
const app = express()
const port = 3000
const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb'
}
const mysql = require('mysql')
const connection = mysql.createConnection(config)

const sql = "CREATE TABLE IF NOT EXISTS people(id INT PRIMARY KEY AUTO_INCREMENT, nome VARCHAR(255) NOT NULL);"
connection.query(sql)
connection.end()

app.get('/', (req,res) => {
    con = mysql.createConnection(config)

    const novoNome = 'Aleatorio ' + Math.floor(Math.random() * 1000);
    con.query(`INSERT INTO people (nome) VALUES ('${novoNome}')`)

    con.query('SELECT * FROM people;', (error, results, fields) => {
        if (error) {
            console.error('Erro ao executar a consulta: ', error);
            res.status(500).send('Erro interno do servidor');
            return;
        }

        let html = '<h1>Full Cycle Rocks!</h1>';

        html += '<ul>';
        results.forEach(({ nome }) => {
            html += `<li>Nome: ${nome}</li>`;
        });
        html += '</ul>';

        res.send(html);
    });

    con.end()
})

app.listen(port,() => {
    console.log('Rodando na porta ' + port)
})
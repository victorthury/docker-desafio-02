const express = require('express');
const app = express();
const port = 3000;
const config = {
  host: 'db',
  user: 'root',
  password: 'root',
  database: 'nodedb'
};
const mysql = require('mysql');
const connection = mysql.createConnection(config);

// Deleção da tabela people para manter o resultado de criar a tabela e adicionar 2 registros
const sqlDrop = `DROP TABLE IF EXISTS people`;
const sqlCreate = `CREATE TABLE people(id int not null auto_increment, name varchar(255), primary key(id))`;
const sqlInsert1 = `INSERT IGNORE INTO people (name) values('Victor')`;
const sqlInsert2 = `INSERT IGNORE INTO people (name) values('Wesley')`;
const sqlSelect = `SELECT name FROM people`;

connection.query(sqlDrop);
connection.query(sqlCreate);
connection.query(sqlInsert1);
connection.query(sqlInsert2);
let select = [];
connection.query(sqlSelect, (err, result, fields) => {
  if (err) throw err;
  select = result;
});
connection.end()

app.get('/', (req, res) => {
  const names = getNames(select)
  res.send(`<h1>Full Cycle Rocks!!!</h1> <ul>${names}</ul>`);
});

app.listen(port, () => {
  console.log('Rodando na port ' + port);
});

function getNames(select) {
  const names = select.map(item => `<li>${item.name}</li>`);
  return names.join('');
}
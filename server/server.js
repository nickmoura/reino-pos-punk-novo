import express from 'express';
import mysql from 'mysql2';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'inserir-senha',
  database: 'inserir_db'
});

db.connect((err) => {
  if (err) throw err;
  console.log('Conectado ao banco de dados MySQL.');
});

app.post('/api/participar', (req, res) => {
  const { nome, email, telefone, banda, cidade_do_show } = req.body;
  const query = 'INSERT INTO participantes (nome, email, telefone, banda, cidade_do_show) VALUES (?, ?, ?, ?, ?)';
  db.query(query, [nome, email, telefone, banda, cidade_do_show], (err, result) => {
	if (err) {
	  console.error(err);
	  res.status(500).send('Erro ao inserir dados.');
	} else {
	  console.log('Inserção bem-sucedida:', result); // Usando a variável result
	  res.status(200).send('Participação registrada.');
	}
  });
});

app.listen(5000, () => {
  console.log('Servidor rodando na porta 5000');
});

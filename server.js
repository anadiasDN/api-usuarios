const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const usuariosRoutes = require('./routes/usuarios');

app.use(cors());
app.use(bodyParser.json());

app.use('/api/usuarios', usuariosRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

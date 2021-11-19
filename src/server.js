// dotenv é utilizado para que possamos ler o aquivo de 
// variáveis de ambiente.
require('dotenv').config({ path: 'variaveis.env'});
const express = require('express');
// Permite o acesso a recursos de outro site mesmo estando 
// em domínios diferentes.
const cors = require('cors');
// Permite a transformação do body da requisição
// em vários outros formatos.
const bodyParser = require('body-parser');
const routes = require('./routes');

const server = express();

server.use(cors());
server.use(bodyParser.urlencoded({ extended: false }));
server.use('/api', routes);

server.listen(process.env.PORT, () => {
    console.log(`Server listening on http://localhost:${process.env.PORT}`);
});
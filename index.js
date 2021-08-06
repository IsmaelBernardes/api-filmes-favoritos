const express = require('express');
const bodyParser = require('body-parser');
const config = require('config'); 
const roteador = require('./routes/filmes-favoritos');

const app = express();

app.use(bodyParser.json());
app.use('/filmesfavoritos', roteador);

app.listen(config.get('api.porta'), () => console.log('Api Oline'));
 
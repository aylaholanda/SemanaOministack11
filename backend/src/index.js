const express = require ('express')
const routes = require('./routes.js')
const cors = require('cors')
const app = express();
app.use(express.json());//adicionando o entendimento do json
app.use(routes);

app.use(cors());//rota 
app.listen(3333); // aqui é a porta que aparecer no localhost
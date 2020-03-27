const express = require('express');
const routes = express.Router();
const sessionController = require('./controllers/SessionController')
const ongController = require('./controllers/ongcontroller')
const profileincController = require('./controllers/profileController')
const incidentsController = require('./controllers/incidentController')
routes.post('/ongs', ongController.create);
routes.get('/ongs', ongController.index);
routes.post('/incidents',incidentsController.create);
routes.get('/incidents',incidentsController.index);
routes.delete('/incidents/:id',incidentsController.delete);
routes.get('/profile',profileincController.index);
routes.post('/session',sessionController.create);

module.exports = routes;
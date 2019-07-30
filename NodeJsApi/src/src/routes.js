const express = require('express');
const routes = express.Router();

const Ranking = require ('./controllers/Ranking');

routes.get('/ranking', Ranking.index);
routes.get('/ranking/:id', Ranking.visualization);
routes.post('/ranking', Ranking.create);
routes.put('/ranking/:id', Ranking.update);
routes.delete('/ranking/:id', Ranking.delete);

module.exports = routes;
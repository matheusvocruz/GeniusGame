const express = require('express');
const mongooose = require('mongoose');
const requireDir = require('require-dir');

const app = express();
app.use(express.json());

mongooose.connect(
    'mongodb://localhost:27017/ranking', 
    { useNewUrlParser: true }
);

requireDir('./src/models');

// localhost:1012/api
app.use('/api', require('./src/routes'));
// localhost:1012
app.use('/', (req, res) => {
    res.send('You are connected.');
});

// localhost:1012
app.listen(1012);
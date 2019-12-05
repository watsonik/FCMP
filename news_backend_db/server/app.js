const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const Logger = require('./logger');
const db = require('./db/db');

const logger = new Logger();

db.connect();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use((req, res) => {
    logger.logInfo(req.method, req.url);
    req.next();
});

app.use((err, req, res, next) => {
    logger.logError(err.message);
    res.status(500).render('error', {error: err});
});

app.listen(3000,
    () => console.log('application started on port 3000'));

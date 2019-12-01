const express = require('express');
const app = express();
const router = express.Router();
const bodyParser = require('body-parser');
const NewsDAO = require('./newsDAO');
const Logger = require('./logger');

const logger = new Logger();
const newsDAO = new NewsDAO();

router.get('/', (req, res) => {
    res.send(newsDAO.getNews());
});

router.get('/:id', (req, res) => {
    res.send(newsDAO.getNewsById(req.params.id));
});

router.post('/', (req, res) => {
    newsDAO.addNews(req.body);
    res.send();
});

router.put('/:id', (req, res) => {
    newsDAO.updateNews(req.params.id, req.body);
    res.send();
});

router.delete('/:id', (req, res) => {
    newsDAO.deleteNews(req.params.id);
    res.send();
});

router.use(function (req, res) {
    res.send("OK");
});

app.use('/news', router);

app.use((req, res) => {
    logger.logInfo(req.method, req.url);
    req.next();
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(function (err, req, res, next) {
    logger.logError(err.message);
    res.status(500).render('error', { error: err });
});

app.listen(3000,
    () => console.log('application started on port 3000'));
const express = require('express');
const app = express();
const router = express.Router();
const NewsDAO = require('./newsDAO');

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
app.listen(3000,
    () => console.log('application started on port 3000'));
const express = require('express');
const router = express.Router();
const NewsDAO = require('./newsDAO');

const newsDAO = new NewsDAO();

router.get('/', (req, res) => {
    res.json(newsDAO.getNews());
});

router.get('/:id', (req, res) => {
    res.json(newsDAO.getNewsById(req.params.id));
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

module.exports = router;

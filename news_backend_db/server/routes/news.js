const express = require('express');
const router = express.Router();
const NewsService = require('../services/newsService');

const newsService = new NewsService();

router.get('/', async (req, res) => res.json(await newsService.getAllNews()));

router.get('/:id', async (req, res) => {
    const {id} = req.params;
    const result = await newsService.getNewsById(id);

    if (!result) {
        res.status(404).send(`There is no existing news with id = ${id}`);
    } else {
        res.json(result);
    }
});

router.post('/', require('connect-ensure-login').ensureLoggedIn(), async (req, res) => {
    await newsService.addNews(req.body);
    res.send();
});

router.post('/updatenews', require('connect-ensure-login').ensureLoggedIn(), async (req, res) => {
    const id = req.body.targetid;
    await newsService.updateNews(id, req.body);
    res.send();
});

router.get('/delete/:id', require('connect-ensure-login').ensureLoggedIn(),
    async (req, res) => {
        const id = req.params.id;
        if (id == 'all') {
            await newsService.deleteAllNews();
            res.send();
        } else {
            await newsService.deleteNews(id);
        }
        res.send();
    });

router.get('/delete', require('connect-ensure-login').ensureLoggedIn(),
    async (req, res) => {
        await newsService.deleteAllNews();
        res.send();
    });

module.exports = router;

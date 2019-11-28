const express = require('express');
const app = express();
const router = express.Router();
const NewsDAO = require('./newsDAO');

const newsDAO = new NewsDAO();


router.get('/', (req, res) => {
    res.send(newsDAO.getNews())
});

router.use(function (req, res) {
    res.send("OK");
});


app.use('/news', router);
app.listen(3000,
    () => console.log('application started on port 3000'));
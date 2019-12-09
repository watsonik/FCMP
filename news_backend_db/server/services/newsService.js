const News = require('../models/news.js');

class NewsService {
    async getAllNews() {
        return await News.find();
    };

    async getNewsById(id) {
        return await News.findOne({id: id});
    };

    async addNews(data) {
        await News.create(data);
    };

    async updateNews(id, data) {
        await News.findOneAndUpdate({id: id}, data);
    };

    async deleteAllNews() {
        await News.deleteMany();
    };

    async deleteNews(id) {
        await News.findOneAndDelete({id: id});
    }

}

module.exports = NewsService;

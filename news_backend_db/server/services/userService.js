const User = require('../models/user');

class NewsService {

    async getByUsername(username) {
        return await User.findOne({username});
    };

    async add(user) {
        await User.create([user]);
    };
}

module.exports = NewsService;

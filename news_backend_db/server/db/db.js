const mongoose = require('mongoose');

const url = 'mongodb://localhost:27017';
const dbName = 'frontcamp';

const connect = () => {
    mongoose.set('useFindAndModify', false);
    mongoose.connect(`${url}/${dbName}`, {useNewUrlParser: true});
    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'Connection error'));
    db.once('open', () => {
        console.log('MongoDB connected');
    });
};
module.exports.connect = connect;



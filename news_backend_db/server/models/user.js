const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    id: String,
    username: String,
    password: String,
    displayName: String
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
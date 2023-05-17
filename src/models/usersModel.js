

const {model, Schema} = require('mongoose');

const schema = new Schema({
    email: {type: String, required: true},
    passwordHash: {type: String, required:true},
})

const UserModel = model('users', schema, 'users');

module.exports = {UserModel}
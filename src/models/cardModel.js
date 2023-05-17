

const {model, Schema} = require('mongoose');


const schema = new Schema({
    user_id: {type: String, required: true},
    money: {type: Number}
})

const CardModel = model('cards', schema, 'cards');

module.exports = {CardModel};
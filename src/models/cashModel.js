

const {model, Schema} = require('mongoose');


const schema = new Schema({
    user_id: {type: String, required: true},
    money: {type: Number}
})

const CashModel = model('cashes', schema, 'cashes');

module.exports = {CashModel};
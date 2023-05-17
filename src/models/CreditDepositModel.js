

const {model, Schema} = require('mongoose');

const schema = new Schema({
    type: {type: String, required: true},
    user_id: {type: String, required: true},
    money: {type: Number, required: true},
    rate_percent: {percent: Number, percent_by: String},
    duration: {years: Number, months: Number, days: String},
    date: Date
})

const CreditDepositModel = model('credit_deposit', schema, 'credit_deposit');

module.exports = {CreditDepositModel};

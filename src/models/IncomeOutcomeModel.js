

const {model, Schema} = require('mongoose');

const schema = new Schema({
    category: {type: String, required:true},
    user_id: {type: String, required: true},
    type: {type: String, required: true},
    costs: {type:Number, required:true},
    date: {type: Date, required: true},
    method: {type: String, required: true}
})

const IncomeOutcomeModel = model('incomes_outcomes', schema, 'incomes_outcomes');

module.exports = {IncomeOutcomeModel};
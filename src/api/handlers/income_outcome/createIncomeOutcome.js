


const {IncomeOutcomeModel} = require('../../../models/IncomeOutcomeModel');
const {CashModel} = require('../../../models/cashModel');
const {CardModel} = require('../../../models/cardModel');
const jwt = require('jsonwebtoken');


module.exports.createIncomeOutcome = async (req,res) =>{

    const {token, category, type, method, costs} = req.body;


    const decoded_token = jwt.verify(token, 'secret123');

    const model = new IncomeOutcomeModel({
        user_id: decoded_token._id,
        category: category,
        type: type, 
        method: method,
        costs: costs,
        date: new Date
    })

    const doc = await model.save();

    if(method == 'outcome') {
        if(method == 'cash') {
            const currentCash = await CashModel.findOne({user_id: decoded_token._id});
            const money = currentCash.money - costs;
            const updateCash = await CashModel.updateOne({user_id: decoded_token._id}, {$set: {money: money}})
    
        } else if(method == 'card') {
            const currentCash = await CardModel.findOne({user_id: decoded_token._id});
            const money = currentCash.money - costs;
            const updateCash = await CardModel.updateOne({user_id: decoded_token._id}, {$set: {money: money}})
        }
    } else if (method =='income') {

        if(method == 'cash') {
            const currentCash = await CashModel.findOne({user_id: decoded_token._id});
            const money = currentCash.money + costs;
            const updateCash = await CashModel.updateOne({user_id: decoded_token._id}, {$set: {money: money}})
    
        } else if(method == 'card') {
            const currentCash = await CardModel.findOne({user_id: decoded_token._id});
            const money = currentCash.money + costs;
            const updateCash = await CardModel.updateOne({user_id: decoded_token._id}, {$set: {money: money}})
        }

    }
 


    res.status(200).send(doc);
}
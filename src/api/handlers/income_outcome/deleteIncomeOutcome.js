


const {IncomeOutcomeModel} = require('../../../models/IncomeOutcomeModel');
const {CashModel} = require('../../../models/cashModel');
const {CardModel} = require('../../../models/cardModel');
const jwt = require('jsonwebtoken');


module.exports.deleteIncomeOutcome = async (req,res) =>{

    const {id, token} = req.body;


    const decoded_token = jwt.verify(token, 'secret123');

    const doc = await IncomeOutcomeModel.findOne({_id: id});

    const deleteDocument = await IncomeOutcomeModel.deleteOne({_id: id});

    if(doc.type == 'income') {
        
        if(doc.method == 'cash') {
            const userCash = await CashModel.findOne({user_id: decoded_token._id});
            const money = userCash.money - doc.money;
            const updateCash = await CashModel.updateOne({user_id: decoded_token._id}, {$set: {money: money}});
        }

        if(doc.method == 'card') {
            const userCard = await CardModel.findOne({user_id: decoded_token._id});
            const money = userCard.money - doc.money;
            const updateCard = await CashModel.updateOne({user_id: decoded_token._id}, {$set: {money: money}});
        }

    } else if(type == 'outcome') {

        if(doc.method == 'cash') {
            const userCash = await CashModel.findOne({user_id: decoded_token._id});
            const money = userCash.money + doc.money;
            const updateCash = await CashModel.updateOne({user_id: decoded_token._id}, {$set: {money: money}});
        }

        if(doc.method == 'card') {
            const userCard = await CardModel.findOne({user_id: decoded_token._id});
            const money = userCard.money + doc.money;
            const updateCard = await CashModel.updateOne({user_id: decoded_token._id}, {$set: {money: money}});
        }
    } 



    res.status(200).send("Document was deleted", deleteDocument);

}